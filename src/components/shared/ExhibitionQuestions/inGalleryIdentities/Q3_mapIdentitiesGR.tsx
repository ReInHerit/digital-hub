import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"
import { Button } from "react-bootstrap"

const MapQThree = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w"
  const doc = new GoogleSpreadsheet(creds.sheet_id)
  const [finalGeoJsonThree, setfinalGeoJsonThree] = useState([]);

        const [AllRowsThree, setAllRowsThree] = useState([]);
        useEffect( () => { 
          async function fetchData() {
                await doc.useServiceAccountAuth(creds);
                await doc.loadInfo();      
                await doc.getInfo();
                const sheetThree = doc.sheetsByIndex[8];
                const rowsThree = await sheetThree.getRows();
                const AllRowsThree = rowsThree.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRowsThree(AllRowsThree)

                const sortingRowsThree = AllRowsThree.map(({
                  [0]: exact_match,	[1]: longitude, [2]: latitude, [3]: Country,
                  [4]: Ans3a,	[5]: Ans3b,	[6]: 	Ans3c,	[7]: 	Ans3d,	[8]: 	Ans3e,	
                  [9]: Ans3aFin,	[10]: Ans3bFin,	[11]: Ans3cFin,	[12]: Ans3dFin,	[13]: Ans3eFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans3a,	Ans3b,	Ans3c,	Ans3d,	Ans3e,	
                  Ans3aFin,	Ans3bFin,	Ans3cFin,	Ans3dFin,	Ans3eFin
                  }))
            //  console.log(sortingRows)

            const hasAnswersThree = sortingRowsThree.filter((res) => res.Ans3aFin !== "no answers");
            // console.log(hasAnswers)
           
            const MyGeoJsonThree = hasAnswersThree.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Country": row.Country,
                    "Answer_A": row.Ans3aFin,
                    "Answer_B": row.Ans3bFin,
                    "Answer_C": row.Ans3cFin,
                    "Answer_D": row.Ans3dFin,
                    "Answer_E": row.Ans3eFin
                },
                "geometry": {
                  "coordinates": [Number(row.longitude), Number(row.latitude)],
                  "type": "Point",
                },
              }
            })      
            
            setfinalGeoJsonThree(MyGeoJsonThree)

        }
        fetchData();
    //    console.log(finalGeoJson)
      }, []);

      
        const mapContainer = useRef(null);
        useEffect(() => {
            const map = new mapboxgl.Map({
              container: mapContainer.current,
              style: 'mapbox://styles/mapbox/light-v11',
              center: [23.742, 37.975],
              zoom: 5.15,
              projection: 'naturalEarth',
            });
    
            map.addControl(new mapboxgl.NavigationControl(), "top-right");
            
            const GeoJsonCollThree = {
                "type": "FeatureCollection",
                "features": 
                    finalGeoJsonThree
              };
                // This GeoJson is valid
                // console.log(JSON.stringify(GeoJsonColl))            
     
        map.on('load', () => {

        map.addLayer({
                id: 'resultsAnswerThreeIdentities',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollThree
                },
                paint: {
               'circle-color': '#526d9d',
               'circle-stroke-width': 1,
               'circle-stroke-color': '#526d9d',
               'circle-opacity': 0.5,
               'circle-radius': {
                property: 'Answer_A',
                // think how to make them more proportional to our responses
                stops: [
                  [0, 0],
                  [1, 5],
                  [5, 20],
                ]
              }
                }
            })
    
// When a click event occurs on a feature in the csvData layer, open a popup at the
// location of the feature, with description HTML from its properties.            
                map.on('click', 'resultsAnswerThreeIdentities', function(e) {
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
                map.on('mouseenter', 'resultsAnswerThreeIdentities', function() {
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
        <h2>Ερώτηση 3:</h2>
            <h3>
            Από που προέρχονται οι ρόλοι των φύλων;
            </h3> 
            <div className="exh_map_quest_result_red"><span>Α</span><p>
            Οι ρόλοι των φύλων έχουν τις ρίζες τους στη βιολογική ποικιλομορφία του ανθρώπου. Αν όλοι οι άνθρωποι είχαν βιολογικά το ίδιο φύλο, δε θα υπήρχαν ρόλοι.
        </p></div>
            <div className="exh_map_quest_result_red"><span>Β</span><p>
            Οι ρόλοι έχουν πάντα να κάνουν με τον καταμερισμό της δύναμης. Οι ισχυροί αποκαλούνται «άρχοντες» και οι κατώτεροί τους «υπηρέτες». Το ίδιο ισχύει και με τα κοινωνικά φύλα.
              </p></div>
            <div className="exh_map_quest_result_red"><span>Γ</span><p>
            Δεν έχει σημασία από που προκύπτουν οι ρόλοι των φύλων. Αυτό που έχει σημασία είναι πώς να τους υπερβεί κανείς όταν είναι άδικοι. Το μόνο που χρειάζεται είναι καλή θέληση.
              </p></div>
            <div className="exh_map_quest_result_red"><span>Δ</span><p>
            Στο παρελθόν, οι ρόλοι των φύλων θεωρούνταν απόρροια της φύσης κάθε ανθρώπου. Σήμερα γνωρίζουμε περισσότερα. Για παράδειγμα, οι άνθρωποι έχουν μάθει να ξεχωρίζουν το «κοινωνικό» από το «βιολογικό» φύλο.  Από ιστορικής πλευράς επομένως, οι ρόλοι των φύλων δεν είναι τίποτα παραπάνω από ανθρωπολογικά λάθη.
              </p></div>
            <div className="exh_map_quest_result_red"><span>Ε</span><p>
            Ως «σωβινισμός» ορίζεται η πεποίθηση στην ανωτερότητα της ομάδας στην οποία ανήκουμε. Ας πάρουμε ως παραδείγματα το χρώμα του δέρματος, τη θρησκεία και το κοινωνικό φύλο. Οι κλασικοί ρόλοι των φύλων είναι μόνο οι εκδηλώσεις αυτού του σωβινισμού.              
              </p></div>
          </div>

    </React.Fragment>
    );          
}

export default MapQThree
