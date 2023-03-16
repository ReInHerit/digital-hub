import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

const MapQOneDE = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoia2lhLXoiLCJhIjoiY2xkZzRnZjRnMHRvazN2bzZ0cnh4OWtzeSJ9.COmQgzmRsKnMZKw77WDF6w"
  const doc = new GoogleSpreadsheet(creds.sheet_id)
  const [finalGeoJson, setfinalGeoJson] = useState([]);

        const [AllRows, setAllRows] = useState([]);
        useEffect( () => { 
          async function fetchData() {
                await doc.useServiceAccountAuth(creds);
                await doc.loadInfo();      
                await doc.getInfo();
                const sheet = doc.sheetsByIndex[2];
                const rows = await sheet.getRows();
                const AllRows = rows.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRows(AllRows)

                const sortingRows = AllRows.map(({
                  [0]: exact_match,	[1]: longitude, [2]: latitude, [3]: Country,
                  [4]: Ans1a,	[5]: Ans1b,	[6]: 	Ans1c,	[7]: 	Ans1d,	[8]: 	Ans1e,	
                  [9]: Ans1aFin,	[10]: Ans1bFin,	[11]: Ans1cFin,	[12]: Ans1dFin,	[13]: Ans1eFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans1a,	Ans1b,	Ans1c,	Ans1d,	Ans1e,	
                  Ans1aFin,	Ans1bFin,	Ans1cFin,	Ans1dFin,	Ans1eFin
                  }))
            //  console.log(sortingRows)

            const hasAnswers = sortingRows.filter((res) => res.Ans1aFin !== "no answers");
            // console.log(hasAnswers)
           
            const MyGeoJson = hasAnswers.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Country": row.Country,
                    "Answer_A": row.Ans1aFin,
                    "Answer_B": row.Ans1bFin,
                    "Answer_C": row.Ans1cFin,
                    "Answer_D": row.Ans1dFin,
                    "Answer_E": row.Ans1eFin
                },
                "geometry": {
                  "coordinates": [Number(row.longitude), Number(row.latitude)],
                  "type": "Point",
                },
              }
            })      
            
            setfinalGeoJson(MyGeoJson)

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
            
            const GeoJsonColl = {
                "type": "FeatureCollection",
                "features": 
                    finalGeoJson
              };
                // This GeoJson is valid
                // console.log(JSON.stringify(GeoJsonColl))            
     
        map.on('load', () => {

        map.addLayer({
                id: 'resultsAnswerOneConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonColl
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
                map.on('click', 'resultsAnswerOneConflict', function(e) {
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
                map.on('mouseenter', 'resultsAnswerOneConflict', function() {
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
        <h2>Frage 1:</h2>
            <h3>„Gewalt ist keine Lösung“ – das sagen viele Menschen, wenn es um Konflikte geht. Sie wünschen sich eine Welt, in der Konflikte ohne Gewalt gelöst werden. Was meinen Sie: Kann eine solche Welt Wirklichkeit werden oder bleibt sie ein Wunschtraum?</h3>
                <div className="exh_map_quest_result"><span>A</span><p>Nein. Eine solche Welt ist nicht möglich. Ob man will oder nicht: Gewalt ist immer eine Lösung. Sie wird auch immer eine Lösung bleiben. So einfach ist das.</p></div>
                <div className="exh_map_quest_result"><span>B</span><p>In einer Welt ohne Waffen ist der Revolver-Besitzer König. Das sagt jedenfalls die moderne Evolutionsbiologie. Wer die Möglichkeit hat, Gewalt einzusetzen wird das auch irgendwann tun.</p></div>
                <div className="exh_map_quest_result"><span>C</span><p>Wer hungert oder verhungert, der greift schneller zu Gewalt. Denn wer nichts zu verlieren hat, für den ist Gewalt immer eine Option. Gerade weil er nichts mehr zu verlieren hat. Umgekehrt heißt das auch: Wer sich eine Welt ohne Konflikte wünscht, muss möglicherweise auch die Umverteilung von Wohlstand oder Ressourcen in Kauf nehmen.</p></div>
                <div className="exh_map_quest_result"><span>D</span><p>Gewalt ist für mich niemals die erste Option. Wenn aber andere zu Gewalt greifen, würde ich mich verteidigen – notfalls auch mit Gewalt.</p></div>
                <div className="exh_map_quest_result"><span>E</span><p>Ich sehe nicht, warum eine Welt ohne Gewalt nicht möglich sein sollte. Es gibt immer eine Alternative zu Gewalt. Wer eingesehen hat, dass Gewalt immer nur Gegengewalt erzeugt, für den ist Gewaltverzicht der einzige Weg zur Besserung.</p></div>
        </div>
    </React.Fragment>
    );          
}

export default MapQOneDE