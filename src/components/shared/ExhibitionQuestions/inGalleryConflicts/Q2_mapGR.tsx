import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

const MapQTwoDE = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w"
  const doc = new GoogleSpreadsheet(creds.sheet_id)
  const [finalGeoJsonTwo, setfinalGeoJsonTwo] = useState([]);

        const [AllRowsTwo, setAllRowsTwo] = useState([]);
        useEffect( () => { 
          async function fetchData() {
                await doc.useServiceAccountAuth(creds);
                await doc.loadInfo();      
                await doc.getInfo();
                const sheetTwo = doc.sheetsByIndex[5];
                const rowsTwo = await sheetTwo.getRows();
                const AllRowsTwo = rowsTwo.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRowsTwo(AllRowsTwo)

                const sortingRowsTwo = AllRowsTwo.map(({
                  [0]: exact_match,	[1]: longitude, [2]: latitude, [3]: Country,
                  [4]: Ans2a,	[5]: Ans2b,	[6]: 	Ans2c,	[7]: 	Ans2d,	[8]: 	Ans2e,	
                  [9]: Ans2aFin,	[10]: Ans2bFin,	[11]: Ans2cFin,	[12]: Ans2dFin,	[13]: Ans2eFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans2a,	Ans2b,	Ans2c,	Ans2d,	Ans2e,	
                  Ans2aFin,	Ans2bFin,	Ans2cFin,	Ans2dFin,	Ans2eFin
                  }))
            //  console.log(sortingRows)

            const hasAnswersTwo = sortingRowsTwo.filter((res) => res.Ans2aFin !== "no answers");
            // console.log(hasAnswers)
           
            const MyGeoJsonTwo = hasAnswersTwo.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Country": row.Country,
                    "Answer_A": row.Ans2aFin,
                    "Answer_B": row.Ans2bFin,
                    "Answer_C": row.Ans2cFin,
                    "Answer_D": row.Ans2dFin,
                    "Answer_E": row.Ans2eFin
                },
                "geometry": {
                  "coordinates": [Number(row.longitude), Number(row.latitude)],
                  "type": "Point",
                },
              }
            })      
            
            setfinalGeoJsonTwo(MyGeoJsonTwo)

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
            
            const GeoJsonCollTwo = {
                "type": "FeatureCollection",
                "features": 
                    finalGeoJsonTwo
              };
                // This GeoJson is valid
                // console.log(JSON.stringify(GeoJsonColl))            
     
        map.on('load', () => {

        map.addLayer({
                id: 'resultsAnswerTwoConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollTwo
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
                map.on('click', 'resultsAnswerTwoConflict', function(e) {
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
                map.on('mouseenter', 'resultsAnswerTwoConflict', function() {
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
        <h2>Ερώτηση 2:</h2>
            <h3>Είναι κακό να αντεπιτεθείς;</h3> 
            <div className="exh_map_quest_result"><span>A</span><p>Όχι. Η αντεπίθεση μπορεί να είναι πολύ καλό πράγμα και πολλές φορές γίνεται καθήκον. Πολύ συχνά πρέπει να υπερασπιστείς όσα είναι σημαντικά για σένα. Σε αυτή την περίπτωση, όχι μόνο έχω το δικαίωμα αλλά και την υποχρέωση να υπερασπιστώ τον εαυτό μου.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>Δεν γνωρίζω αν είναι κακό να αντεπιτίθεσαι. Εγώ προσωπικά απεχθάνομαι κάθε μορφή βίας. Επομένως, αν βρισκόμουν σε δίλημμα, δεν θα υπερασπιζόμουν τον εαυτό μου.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Οποιοσδήποτε πιστεύει πως είναι κακό να ορθώνει κανείς το ανάστημά του για την ελευθερία του, για παράδειγμα, εξισώνει τον καταπιεστή με το θύμα ηθικά. Αλλά αυτό είναι λάθος. Ο θύτης δεν βρίσκεται ποτέ στο ίδιο ηθικό επίπεδο με το θύμα. Επομένως δεν είναι κακό να αντεπιτίθεται κανείς.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Οποιοσδήποτε αντιστέκεται δημιουργεί βία ως αντίδραση στη βία του. Αυτό σίγουρα οδηγεί σε μια αλυσίδα βίας. Επομένως, δεν είναι κακό να αντεπιτίθεται κανείς, αλλά δεν είναι σοφό, το λιγότερο.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Φανταστείτε το σπίτι των γονιών σας να καταληφθεί παράνομα ξαφνικά. Τι θα σας εμπόδιζε από το να αντεπιτεθείτε; Τίποτα. Έχετε ερωτήσεις;</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQTwoDE