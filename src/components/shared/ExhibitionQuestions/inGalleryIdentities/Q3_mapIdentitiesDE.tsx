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
                  <li>A: Gesamt ` + e.features[0].properties.Answer_A + ` Personen</li>
                  <li>B: Gesamt ` + e.features[0].properties.Answer_B + ` Personen</li>
                  <li>C: Gesamt ` + e.features[0].properties.Answer_C + ` Personen</li>
                  <li>D: Gesamt ` + e.features[0].properties.Answer_D + ` Personen</li>
                  <li>E: Gesamt ` + e.features[0].properties.Answer_E + ` Personen</li>
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
        <h2>Frage 3:</h2>
            <h3>
            Woher stammen Geschlechterrollen? 
            </h3> 
            <div className="exh_map_quest_result_red"><span>A</span><p>
            Geschlechterrollen sind in der menschlichen biologischen Vielfalt verwurzelt. Wenn alle Menschen biologisch das gleiche Geschlecht hätten, würden die Rollen nicht existieren. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>B</span><p>
            Rollen handeln immer von Machtverhältnissen. Die Mächtigen nennt man „Herren“ und die Untergebenen „Diener“. Mit den Geschlechtern ist es gleich. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>C</span><p>
            Woher Geschlechterrollen stammen, spielt keine Rolle. Was zählt ist, dass sie überwunden werden, wenn sie ungerecht sind. Alles, was es braucht, ist guter Wille. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>D</span><p>
            In der Vergangenheit wurden Geschlechterrollen als natürlich angesehen. Heutzutage wissen wir es besser. Zum Beispiel haben die Menschen gelernt, zwischen dem „biologischen“ und dem „sozialen“ Geschlecht zu unterscheiden. Aus historischer Sicht sind Geschlechterrollen also nichts weiter als ein anthropologischer Irrtum. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>E</span><p>
            Den Glauben an die Überlegenheit der eigenen Gruppe bezeichnet man als „Chauvinismus“. Beispiele dafür gibt es genügend, wie Hautfarbe, Religion oder eben das Geschlecht. Die typischen Geschlechterrollen machen diesen Chauvinismus lediglich sichtbar. 
            </p></div>
          </div>

    </React.Fragment>
    );          
}

export default MapQThree