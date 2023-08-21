import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"
import { Button } from "react-bootstrap"

const MapQTwo = () => {
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
                  [4]: Ans2a,	[5]: Ans2b,	[6]: 	Ans2c,	[7]: 	Ans2d,		
                  [8]: Ans2aFin,	[9]: Ans2bFin,	[10]: Ans2cFin,	[11]: Ans2dFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans2a,	Ans2b,	Ans2c,	Ans2d,		
                  Ans2aFin,	Ans2bFin,	Ans2cFin,	Ans2dFin
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
                id: 'resultsAnswerTwoIdentities',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonCollTwo
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
                map.on('click', 'resultsAnswerTwoIdentities', function(e) {
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
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerTwoIdentities', function() {
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
        <h2>Frage 2:</h2>
            <h3>
            Geschlechterrollen gab es zu jeder Zeit und in allen Gesellschaften. Was meinen Sie: Ist in der Zukunft eine Gesellschaft ohne Geschlechterrollen möglich?
            </h3> 
              <div className="exh_map_quest_result_red"><span>A</span><p>
              Nein. Ich kann mir das nicht vorstellen. Eine Geschlechterrolle ist ja nicht die Erfindung eines Dichters, sondern an das biologische Geschlecht geknüpft. Solange die Geschlechter biologisch unterschiedlich sind, solange wird es auch unterschiedliche Geschlechterrollen geben.
              </p></div>
              <div className="exh_map_quest_result_red"><span>B</span><p>
              Ich bin mir nicht sicher, ob ich das überhaupt begrüßen würde. Ich weiß unterschiedliche Geschlechterrollen sehr wohl zu schätzen. Das Problem mit Geschlechterrollen ist nicht ihre Existenz, sondern die Diskriminierung, die mit einer solchen Rolle einhergehen kann.
              </p></div>
              <div className="exh_map_quest_result_red"><span>C</span><p>
              Ja. Schlussendlich ist das Geschlecht nichts Natürliches, sondern bloß eine Erfindung der Menschheit. Wenn man eine Gesellschaft ohne Geschlechterrollen schaffen möchte, muss man einfach aufhören, dem Geschlecht zu viel Aufmerksamkeit zu schenken. Warum sollte das nicht möglich sein?
              </p></div>
              <div className="exh_map_quest_result_red"><span>D</span><p>
              Ich kann mir sogar eine zweigeteilte Gesellschaft vorstellen. In einem Teil der Gesellschaft wird es noch Geschlechterrollen geben. Für den anderen Teil sind sie von keiner Bedeutung mehr.
              </p></div>
        </div>

      </React.Fragment>
    );          
}

export default MapQTwo

