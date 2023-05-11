import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

const MapQOneDE = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w"
  const doc = new GoogleSpreadsheet(creds.sheet_id)
  const [finalGeoJson, setfinalGeoJson] = useState([]);

        const [AllRows, setAllRows] = useState([]);
        useEffect( () => { 
          async function fetchData() {
                await doc.useServiceAccountAuth(creds);
                await doc.loadInfo();      
                await doc.getInfo();
                const sheet = doc.sheetsByIndex[2];
                const rows = await sheet.getRows();
                const AllRows = rows.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRows(AllRows)

                const sortingRows = AllRows.map(({
                  [0]: exact_match,	[1]: longitude, [2]: latitude, [3]: Country,
                  [4]: Ans1a,	[5]: Ans1b,	[6]: 	Ans1c,	[7]: 	Ans1d,	[8]: 	Ans1e,	
                  [9]: Ans1aFin,	[10]: Ans1bFin,	[11]: Ans1cFin,	[12]: Ans1dFin,	[13]: Ans1eFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans1a,	Ans1b,	Ans1c,	Ans1d,	Ans1e,	
                  Ans1aFin,	Ans1bFin,	Ans1cFin,	Ans1dFin,	Ans1eFin
                  }))
            //  console.log(sortingRows)

            const hasAnswers = sortingRows.filter((res) => res.Ans1aFin !== "no answers");
            // console.log(hasAnswers)
           
            const MyGeoJson = hasAnswers.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Country": row.Country,
                    "Answer_A": row.Ans1aFin,
                    "Answer_B": row.Ans1bFin,
                    "Answer_C": row.Ans1cFin,
                    "Answer_D": row.Ans1dFin,
                    "Answer_E": row.Ans1eFin
                },
                "geometry": {
                  "coordinates": [Number(row.longitude), Number(row.latitude)],
                  "type": "Point",
                },
              }
            })      
            
            setfinalGeoJson(MyGeoJson)

        }
        fetchData();
    //    console.log(finalGeoJson)
      }, []);

      
        const mapContainer = useRef(null);
        useEffect(() => {
            const map = new mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/light-v11',
              center: [15.754, 48.228],
              zoom: 5.15,
              projection: 'naturalEarth',
            });
    
            map.addControl(new mapboxgl.NavigationControl(), "top-right");
            
            const GeoJsonColl = {
                "type": "FeatureCollection",
                "features": 
                    finalGeoJson
              };
                // This GeoJson is valid
                // console.log(JSON.stringify(GeoJsonColl))            
     
        map.on('load', () => {

        map.addLayer({
                id: 'resultsAnswerOneConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonColl
                },
                paint: {
               'circle-color': '#526d9d',
               'circle-stroke-width': 3,
               'circle-stroke-color': '#526d9d',
               'circle-opacity': 0.7,
               'circle-radius': 13              
                }
            })
    
// When a click event occurs on a feature in the csvData layer, open a popup at the
// location of the feature, with description HTML from its properties.            
                map.on('click', 'resultsAnswerOneConflict', function(e) {
                var coordinates = e.features[0].geometry.coordinates.slice();

                // set popup text
                var description =
                `<h4>` +
                e.features[0].properties.Country +
                `</h4> 
                <ul>
                  <li>A: Συνολικά ` + e.features[0].properties.Answer_A + ` άνθρωποι</li>
                  <li>B: Συνολικά ` + e.features[0].properties.Answer_B + ` άνθρωποι</li>
                  <li>C: Συνολικά ` + e.features[0].properties.Answer_C + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_D + ` άνθρωποι</li>
                  <li>E: Συνολικά ` + e.features[0].properties.Answer_E + ` άνθρωποι</li>
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerOneConflict', function() {
                  map.getCanvas().style.cursor = 'pointer';
                });
                
                // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'places', function() {
                  map.getCanvas().style.cursor = '';
                });
                
        })
  })

    return (
    <React.Fragment>
       <div>
            <div ref={mapContainer} className="map-container" />
        </div>
     <div className="exh_map_result_content">
        <h2>Ερώτηση 1:</h2>
            <h3>«Η βία δεν είναι η λύση» – αυτό ισχυρίζονται πολλοί άνθρωποι όταν πρόκεται για τις συγκρούσεις. Κάνουν ευχές για έναν κόσμο στον οποίο οι διαφορές επιλύονται χωρίς βία. Τι πιστεύετε: μπορεί ένας τέτοιος κόσμος να γίνει πραγματικότητα ή θα παραμείνει όνειρο θερινής νυκτός;</h3>
                <div className="exh_map_quest_result"><span>A</span><p>Όχι. Ένας τέτοιος κόσμος δεν είναι πιθανό να υπάρξει. Είτε μας αρέσει είτε όχι, στην πραγματικότητα, η βία είναι πάντα η λύση. Και θα είναι πάντα η λύση. Είναι τόσο απλό.</p></div>
                <div className="exh_map_quest_result"><span>B</span><p>Σε έναν κόσμο χωρίς όπλα, ο κάτοχος του όπλου είναι βασιλιάς. Τουλάχιστον αυτό ισχύει σύμφωνα με τη σύγχρονη εξελικτική βιολογία. Οποιοσδήποτε έχει την ευκαιρία να χρησιμοποιήσει βία, στο τέλος θα το κάνει.</p></div>
                <div className="exh_map_quest_result"><span>C</span><p>Όσοι λιμοκτονούν είναι πιο πιθανό να καταφύγουν στη βία. Διότι αν δεν έχεις τίποτα να χάσεις, η βία θα αποτελεί πάντα επιλογή. Ακριβώς επειδή δεν έχει μείνει σε κανέναν τίποτα να χάσει. Αντιστρόφως, αυτό, επίσης, σημαίνει ότι όσοι θέλουν έναν κόσμο χωρίς συγκρούσεις ίσως πρέπει να αποδεχτούν την αναδιανομή του πλούτου ή των πόρων.</p></div>
                <div className="exh_map_quest_result"><span>D</span><p>Η βία δεν είναι ποτέ η πρώτη μου επιλογή. Αλλά αν οι άλλοι κατέφευγαν στη βία, θα υπερασπιζόμουν τον εαυτό μου – με βία, αν ήταν απαραίτητο.</p></div>
                <div className="exh_map_quest_result"><span>E</span><p>Δεν βλέπω γιατί ένας κόσμος χωρίς βία δεν μπορεί να είναι εφικτός. Υπάρχει πάντα εναλλακτική στη βία. Για όσους έχουν συνειδητοποιήσει ότι η βία παράγει μόνο βία, η αποκήρυξή της είναι ο μόνος τρόπος βελτίωσης.</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQOneDE