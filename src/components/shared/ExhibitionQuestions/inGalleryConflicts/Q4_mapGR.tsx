import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

const MapQFourDE = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w"
  const doc = new GoogleSpreadsheet(creds.sheet_id)
  const [finalGeoJsonFour, setfinalGeoJsonFour] = useState([]);

        const [AllRowsFour, setAllRowsFour] = useState([]);
        useEffect( () => { 
          async function fetchData() {
                await doc.useServiceAccountAuth(creds);
                await doc.loadInfo();      
                await doc.getInfo();
                const sheetFour = doc.sheetsByIndex[11];
                const rowsFour = await sheetFour.getRows();
                const AllRowsFour = rowsFour.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRowsFour(AllRowsFour)

                const sortingRowsFour = AllRowsFour.map(({
                  [0]: exact_match,	[1]: longitude, [2]: latitude, [3]: Country,
                  [4]: Ans4a,	[5]: Ans4b,	[6]: 	Ans4c,	[7]: 	Ans4d,	[8]: 	Ans4e, [9]: Ans4f,
                  [10]: Ans4aFin,	[11]: Ans4bFin,	[12]: Ans4cFin,	[13]: Ans4dFin,	[14]: Ans4eFin, [15]: Ans4fFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans4a,	Ans4b,	Ans4c,	Ans4d,	Ans4e, Ans4f,
                  Ans4aFin,	Ans4bFin,	Ans4cFin,	Ans4dFin,	Ans4eFin, Ans4fFin
                  }))
            //  console.log(sortingRows)

            const hasAnswersFour = sortingRowsFour.filter((res) => res.Ans4aFin !== "no answers");
            // console.log(hasAnswers)
           
            const MyGeoJsonFour = hasAnswersFour.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Country": row.Country,
                    "Answer_A": row.Ans4aFin,
                    "Answer_B": row.Ans4bFin,
                    "Answer_C": row.Ans4cFin,
                    "Answer_D": row.Ans4dFin,
                    "Answer_E": row.Ans4eFin,
                    "Answer_F": row.Ans4fFin
                },
                "geometry": {
                  "coordinates": [Number(row.longitude), Number(row.latitude)],
                  "type": "Point",
                },
              }
            })      
            
            setfinalGeoJsonFour(MyGeoJsonFour)

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
            
            const GeoJsonCollFour = {
                "type": "FeatureCollection",
                "features": 
                    finalGeoJsonFour
              };
                // This GeoJson is valid
                // console.log(JSON.stringify(GeoJsonColl))            
     
        map.on('load', () => {

        map.addLayer({
                id: 'resultsAnswerFourConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollFour
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
                map.on('click', 'resultsAnswerFourConflict', function(e) {
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
                <li>F: Συνολικά ` + e.features[0].properties.Answer_F + ` άνθρωποι</li>
              </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerFourConflict', function() {
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
        <h2>Ερώτηση 4:</h2>
            <h3>
            Πολλοί άνθρωποι πιστεύουν πως οι συγκρούσεις προκύπτουν κυρίως επειδή οι άνθρωποι δεν κατανοούν ο ένας τον άλλο. Συμφωνείτε;
            </h3> 
            <div className="exh_map_quest_result"><span>A</span><p>Γενικά, ναι. Πολύ συχνά κάποιος προτιμά να έχει δίκιο παρά να κατανοήσει τον άλλο. Το τέλος του δογματισμού είναι συχνά το τέλος μιας διαμάχης.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>Όχι. Διότι κάθε κατανόηση, αργά ή γρήγορα τελειώνει. Για παράδειγμα, δεν καταλαβαίνω γιατί οι άλλοι δεν καταλαβαίνουν ότι η κλιματική αλλαγή απειλεί την ανθρωπότητα. Εδώ τελειώνει η δική μου κατανόηση.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Αυτή η άποψη είναι λάθος. Αρκετά συχνά κατανοώ τη στάση του ατόμου και επομένως το καταλαβαίνω. Ωστόσο, η διαμάχη δεν επιλύεται με τον τρόπο αυτό. Διότι πολλές φορές δε συμμερίζομαι αυτή τη στάση και ούτε πρόκειται να το κάνω.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Δεν έχει να κάνει με το να καταλαβαίνεις το άλλο άτομο, αλλά με το να τα πας καλά μαζί του. Στην περίπτωση της διαμάχης επομένως, ψάχνω για λύσεις με τις οποίες θα συμφωνήσουν και οι δύο πλευρές. Τα αποτελέσματα είναι πιο σημαντικά από την αμοιβαία κατανόηση.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Ναι. Διότι το να καταλαβαίνεις τον άλλο ανοίγει νέες προοπτικές και τρόπους επίλυσης της διαμάχης.</p></div>
            <div className="exh_map_quest_result"><span>F</span><p>Όχι. Δεν έχει να κάνει με την κατανόηση αλλά με τα συμφέροντα. Δεν πρέπει να τα κατανοήσεις, απλώς υπάρχουν εκεί.</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQFourDE