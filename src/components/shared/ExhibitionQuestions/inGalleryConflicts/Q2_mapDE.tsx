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
        <h2>Frage 2:</h2>
            <h3>Ist es böse, wenn man sich wehrt?</h3> 
            <div className="exh_map_quest_result"><span>A</span><p>Nein. Widerstand kann etwas sehr Gutes sein und wird manchmal sogar zur Pflicht. Oftmals muss man sogar das verteidigen, was einem wichtig ist. Dann habe ich nicht nur das Recht, sondern auch die Pflicht, mich zu wehren.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>Ich weiß nicht, ob es böse ist, wenn man sich wehrt. Aber ich für meinen Teil verabscheue jede Form der Gewalt. Deshalb würde ich mich im Zweifelsfall nicht wehren.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Wer meint, es sei böse, sich beispielsweise für seine Freiheit einzusetzen, der setzt Unterdrücker und Opfer moralisch gleich. Das aber ist falsch. Ein Täter steht moralisch niemals auf derselben Stufe wie ein Opfer. Also ist es nicht böse, sich zu wehren.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Wer sich wehrt, der erzeugt mit seiner Gewalt Gegengewalt. Das führt zu einer Gewaltspirale. Deshalb ist es vielleicht nicht unbedingt böse sich zu wehren, aber unklug.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Stellen Sie sich vor, ihr Elternhaus wird plötzlich unrechtmäßig besetzt. Was sollte Sie daran hindern, sich dagegen zu wehren? Nichts. Oder?</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQTwoDE