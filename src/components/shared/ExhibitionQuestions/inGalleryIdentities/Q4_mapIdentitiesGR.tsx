import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"
import { Button } from "react-bootstrap"

const MapQFour = () => {
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
                  [4]: Ans4a,	[5]: Ans4b,	[6]: 	Ans4c,	[7]: 	Ans4d,	[8]: 	Ans4e,	
                  [9]: Ans4aFin,	[10]: Ans4bFin,	[11]: Ans4cFin,	[12]: Ans4dFin,	[13]: Ans4eFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans4a,	Ans4b,	Ans4c,	Ans4d,	Ans4e,	
                  Ans4aFin,	Ans4bFin,	Ans4cFin,	Ans4dFin,	Ans4eFin
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
              center: [23.742, 37.975],
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
                id: 'resultsAnswerFourIdentities',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollFour
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
                map.on('click', 'resultsAnswerFourIdentities', function(e) {
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
                map.on('mouseenter', 'resultsAnswerFourIdentities', function() {
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
            «Ταυτότητα» σημαίνει: το να έχω την απάντηση στην ερώτηση «ποιος είμαι πραγματικά». «Ταυτότητα Φύλου» επομένως σημαίνει: το να έχω την απάντηση στην ερώτηση «σε ποιο κοινωνικό φύλο ανήκω στην πραγματικότητα». Πόσο σημαντική είναι η απάντηση σε αυτή την ερώτηση για σένα;
            </h3> 
            <div className="exh_map_quest_result_red"><span>Α</span><p>
            Είναι πολύ σημαντικό για μένα να γνωρίζω σε ποιο κοινωνικό φύλο ανήκω. Είμαι μέρος του κοινωνικού μου φύλου και δεν μπορώ να το αλλάξω όπως αλλάζω πάροχο ίντερνετ.
            </p></div>
            <div className="exh_map_quest_result_red"><span>Β</span><p>
            Κατά τη γνώμη μου, δίνεται υπερβολικά μεγάλη προσοχή στο θέμα της ταυτότητας. Δεν έχει σημασία αν έχω μια ταυτότητα οποιουδήποτε είδους. Το μόνο πράγμα που έχει σημασία είναι η δική μου ευτυχία.
              </p></div>
            <div className="exh_map_quest_result_red"><span>Γ</span><p>
            Για μένα, η ερώτηση της ταυτότητας δεν έχει ενδιαφέρον. Δεν γνωρίζω καν ποιος είμαι. Ακόμη και να γνώριζα, τι όφελος θα μπορούσα να έχω από αυτό;
              </p></div>
            <div className="exh_map_quest_result_red"><span>Δ</span><p>
            Αρνούμαι να απαντήσω στην ερώτηση της ταυτότητάς μου. Προϋποθέτει πως υπάρχει μέσα μου κάτι που παραμένει πάντα ίδιο – η φύση μου, συμπεριλαμβανομένης της φύσης μου ως σεξουαλικού όντος. Αλλά αυτό δεν ισχύει για εμένα. Για εμένα, το να κυνηγώ την ταυτότητά μου, είναι σαν να κυνηγώ ένα φάντασμα.
              </p></div>
            <div className="exh_map_quest_result_red"><span>Ε</span><p>
            Στον κόσμο στον οποίο ζούμε κυριαρχούν ακόμη οι ρόλοι των φύλων. Αυτό είναι ο λόγος για τον οποίο με ενδιαφέρουν. Ωστόσο, ελπίζω ότι για τις επόμενες γενιές δεν θα μετράει σε ποιο κοινωνικό φύλο ανήκει κανείς.
              </p></div>
        </div>

    </React.Fragment>

    );          
}

export default MapQFour
