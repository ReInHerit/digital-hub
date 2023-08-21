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
                    "Answer_E": row.Ans4eFin
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
        <h2>Frage 4:</h2>
            <h3>
            „Identität“ bedeutet, die Antwort auf die Frage zu kennen, wer man eigentlich ist. Daher bedeutet „Geschlechtsidentität“, die Antwort auf die Frage zu kennen, welchem sozialen Geschlecht man angehört. Wie wichtig ist für Sie die Antwort auf diese Frage?            </h3> 
            <div className="exh_map_quest_result_red"><span>A</span><p>
            Für mich ist es sehr wichtig zu wissen, welchem sozialen Geschlecht ich angehöre. Ich bin ein Teil dieses Geschlechts und kann es nicht wie meinen Internetanbieter wechseln.
            </p></div>
            <div className="exh_map_quest_result_red"><span>B</span><p>
            Meiner Meinung nach wird der Debatte um Identität zu viel Aufmerksamkeit geschenkt. Es ist nicht wichtig, ob ich eine Identität von jeglicher Art habe. Das Einzige, was zählt, ist meine eigene Zufriedenheit. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>C</span><p>
            Für mich spielt die Frage nach der Identität keine Rolle. Ich weiß nicht einmal, wer ich bin. Und wenn ich es wüsste, was hätte ich davon?
            </p></div>
            <div className="exh_map_quest_result_red"><span>D</span><p>
            Ich lehne die Frage nach meiner Identität ab. Das setzt ja die Annahme voraus, dass da etwas in mir wäre, das sich nie verändern würde – meine Natur, auch mein sexuelles Sein. Aber das trifft auf mich nicht zu. Für mich kommt die Suche nach meiner Identität der Suche nach einem Gespenst gleich. 
            </p></div>
            <div className="exh_map_quest_result_red"><span>E</span><p>
            Die Welt, in der wir leben, wird noch immer von Geschlechterrollen beherrscht. Daher interessiere ich mich auch für diese Thematik. Allerdings hoffe ich, dass die Zuordnung zu einem Geschlecht für zukünftige Generationen keine Rolle mehr spielen wird. 
            </p></div>
        </div>

    </React.Fragment>



    );          
}

export default MapQFour