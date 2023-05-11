import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

const MapQThreeDE = () => {
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
              center: [15.754, 48.228],
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
                id: 'resultsAnswerThreeConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollThree
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
                map.on('click', 'resultsAnswerThreeConflict', function(e) {
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
                map.on('mouseenter', 'resultsAnswerThreeConflict', function() {
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
            Κάποιες φορές οι συγκρούσεις δεν προκαλούνται από τα άτομα διότι είναι εγγενείς στο κοινωνικό σύστημα μέσα στο οποίο ζούμε. Κάποιος θα μπορούσε να πει πως πρόκειται για «δομική βία». Πώς θα πρέπει να αντιμετωπίσουμε αυτή τη δομική βία;
            </h3> 
            <div className="exh_map_quest_result"><span>A</span><p>Ομολογουμένως, δεν υπάρχει κράτος που να είναι τέλειο ή χωρίς συγκρούσεις. Σε ένα δημοκρατικό καθεστώς ωστόσο πάντα υπάρχει τρόπος να επιλυθούν οι διαμάχες χωρίς βία. Ο καθένας μπορεί να έχει πολιτική εμπλοκή ή να κινηθεί νομικά.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>Κάθε κοινωνικό σύστημα χρειάζεται πολύ καιρό για να αντιδράσει στις κοινωνικές συγκρούσεις. Αυτοί που περιμένουν η χώρα τους να κάνει κάτι αποτελεσματικό για να καταπολεμήσει την κοινωνική ανισότητα, για παράδειγμα, καταλήγουν να περιμένουν πολύ.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Δεν υπάρχει σύστημα, ακόμα και το καλύτερο, που να είναι απόλυτα δίκαιο. Αυτή είναι η φύση των συστημάτων. Πρέπει να το ανεχτούμε όλο αυτό.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Η δομική βία είναι πάντοτε αφηρημένη βία. Γίνεται πραγματική βία μόνο μέσω των ανθρώπων που είναι μέρος του συστήματος και επωφελούνται από αυτό. Το πιο αποτελεσματικό μέσο πίεσης ενάντια στη δομική βία είναι επομένως η ενεργή αντίσταση σε αυτούς που την επιβάλλουν.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Ο μισογυνισμός ή ο ρατσισμός δεν οικοδομούνται μόνο στα κοινωνικά συστήματα, αλλά και στο μυαλό του πληθυσμού. Είναι επομένως λιγότερο σημαντικό το να αλλάξει κανείς το σύστημα από το να αλλάξει τη στάση των ατόμων.</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQThreeDE