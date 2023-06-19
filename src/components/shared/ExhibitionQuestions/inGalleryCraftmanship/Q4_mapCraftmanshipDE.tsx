import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsCraftmanship/cred/myjson.json'
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
                  [4]: Ans4a,	[5]: Ans4b,	[6]: 	Ans4c,	[7]: 	Ans4d,		
                  [8]: Ans4aFin,	[9]: Ans4bFin,	[10]: Ans4cFin,	[11]: Ans4dFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans4a,	Ans4b,	Ans4c,	Ans4d,		
                  Ans4aFin,	Ans4bFin,	Ans4cFin,	Ans4dFin	
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
              center: [33.362, 35.173],
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
                id: 'resultsAnswerFourCraftmanship',
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
                map.on('click', 'resultsAnswerFourCraftmanship', function(e) {
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
                map.on('mouseenter', 'resultsAnswerFourCraftmanship', function() {
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
        <h2>Question 3:</h2>
            <h3>
            Manche sagen, dass mit der traditionellen Handwerkskunst auch unersetzbares Wissen und Können verloren gehen. Stimmt das?
            </h3> 
            <div className="exh_map_quest_result_green"><span>A</span><p>Ich weiß nicht, ob Wissen verloren geht. Es gibt ja noch Bücher oder das Internet, wo Wissen gespeichert und aufbewahrt wird. Aber das Können geht verloren, das stimmt.</p></div>
            <div className="exh_map_quest_result_green"><span>B</span><p>Das stimmt, aber das ist gut so. Manchmal wird mangelhaftes Wissen einfach durch besseres ersetzt. Wen interessiert es, wie ein Dieselmotor funktioniert, wenn es Autos mit besseren Motoren gibt, zum Beispiel Elektroautos?</p></div>
            <div className="exh_map_quest_result_green"><span>C</span><p>Es geht noch viel mehr verloren, etwa der angemessene und ganzheitliche Umgang mit der Natur und ihren Erzeugnissen. Wer Käse mit der Milch seiner eigenen Kühe herstellt, ist auf eine ganz andere Weise in die Natur eingebunden als der Konsument im Supermarkt, der eher einen chemischen Prozess oder einen 3D-Drucker in der Käseerzeugung vermutet.</p></div>
            <div className="exh_map_quest_result_green"><span>D</span><p>Vor allem gehen bedeutungsvolle Zusammenhänge verloren. Handarbeit bedeutet auch, die eigene Anstrengung bei der Produkterzeugung als sinnvoll zu erleben. Das Bedienen einer Maschine gibt keine solche Sinnhaftigkeit.</p></div>
        </div>

    </React.Fragment>

    );          
}

export default MapQFour