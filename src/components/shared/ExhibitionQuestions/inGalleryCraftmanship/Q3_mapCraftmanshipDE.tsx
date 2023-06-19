import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsCraftmanship/cred/myjson.json'
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
                  [4]: Ans3a,	[5]: Ans3b,	[6]: 	Ans3c,	[7]: 	Ans3d,	[8]: 	Ans3e, [9]: Ans3f,
                  [10]: Ans3aFin,	[11]: Ans3bFin,	[12]: Ans3cFin,	[13]: Ans3dFin,	[14]: Ans3eFin, [15]: Ans3fFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans3a,	Ans3b,	Ans3c,	Ans3d,	Ans3e,	Ans3f,
                  Ans3aFin,	Ans3bFin,	Ans3cFin,	Ans3dFin,	Ans3eFin, Ans3fFin
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
                    "Answer_E": row.Ans3eFin,
                    "Answer_F": row.Ans3fFin,
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
              center: [33.362, 35.173],
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
                id: 'resultsAnswerThreeCraftmanship',
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
                map.on('click', 'resultsAnswerThreeCraftmanship', function(e) {
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
                  <li>E: Gesamt ` + e.features[0].properties.Answer_F + ` Personen</li>
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerThreeCraftmanship', function() {
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
        <h2>Question 2:</h2>
            <h3>
            Gibt es handwerkliche Produkte, die niemals von einer Maschine hergestellt werden können? Was meinen Sie?
            </h3> 
            <div className="exh_map_quest_result_green"><span>A</span><p>Nein. Früher dachten die Menschen, dass das menschliche Gehirn nie von Maschinen übertroffen werden kann. Zum Beispiel im Schachspiel. Davon spricht keiner mehr. Mit handgefertigten Waren wird es dasselbe sein.</p></div>
            <div className="exh_map_quest_result_green"><span>B</span><p>Ja. Ein handgefertigtes Produkt ist immer einzigartig, während maschinelle Herstellung niemals einzigartige Produkte erzeugt. Eines ist gleich wie das andere.</p></div>
            <div className="exh_map_quest_result_green"><span>C</span><p>Ja, weil manche Qualitätsstufen nicht von Maschinen erreicht werden können. Ein Beispiel: Das handgefertigte Mundstück eines Saxophons. Ein maschinell hergestelltes Mundstück kann nie die Klangqualität eines handgefertigten erreichen.</p></div>
            <div className="exh_map_quest_result_green"><span>D</span><p>Ich glaube, dass die Unterschiede so gering sind, dass niemand sie bemerken wird.</p></div>
            <div className="exh_map_quest_result_green"><span>E</span><p>Kunsthandwerk braucht Geist und Hingabe, mechanisch erzeugte Produkte brauchen lediglich Energie. Zwischen beiden besteht eine unüberwindbare Kluft.</p></div>
            <div className="exh_map_quest_result_green"><span>F</span><p>Womöglich werden maschinengefertigte Produkte nie so gut sein wie handgefertigte. Aber gemessen an der Menge sind sie besser.</p></div>
        </div>

    </React.Fragment>
    );          
}

export default MapQThree