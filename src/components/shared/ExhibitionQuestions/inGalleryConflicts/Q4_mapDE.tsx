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
                map.on('click', 'resultsAnswerFourConflict', function(e) {
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
                <li>F: Gesamt ` + e.features[0].properties.Answer_F + ` Personen</li>
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
        <h2>Frage 4:</h2>
            <h3>
            Viele Menschen meinen, Konflikte entstehen vor allem dadurch, dass man einander nicht versteht. Sind Sie auch dieser Ansicht?
            </h3> 
            <div className="exh_map_quest_result"><span>A</span><p>Im Prinzip ja. Oft will man lieber recht haben, als den anderen zu verstehen. Das Ende der Rechthaberei ist oft auch das Ende eines Konfliktes.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>Nein. Denn jedes Verstehen hat einmal ein Ende. Ich zum Beispiel kann nicht verstehen, wenn andere nicht verstehen, dass der Klimawandel die Menschheit bedroht. Da hört mein Verständnis auf.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Diese Ansicht ist falsch. Ganz oft kann ich zwar die Haltung eines Menschen nachvollziehen und damit auch verstehen. Der Konflikt ist damit aber noch nicht gelöst. Denn oft teile ich einfach seine Haltung nicht und werde es auch nicht tun.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Es kommt nicht darauf an, den anderen zu verstehen, sondern mit ihm auszukommen. Im Falle eines Konfliktes suche ich deshalb nach Lösungen, denen beide Parteien zustimmen können. Ergebnisse sind wichtiger als gegenseitiges Verständnis.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Ja. Denn den anderen zu verstehen, eröffnet neue Sichtweisen und Wege, den Konflikt zu lösen.</p></div>
            <div className="exh_map_quest_result"><span>F</span><p>Nein. Es geht nicht um Verständnis, sondern um Interessen. Man muss sie nicht verstehen, sie sind einfach da.</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQFourDE