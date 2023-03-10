import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsCraftmanship/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"
import { Button } from "react-bootstrap"

const MapQOne = () => {
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
                  [4]: Ans1a,	[5]: Ans1b,	[6]: 	Ans1c,	[7]: 	Ans1d, [8]: Ans1e, [9]: Ans1f, [10]: Ans1g, [11]: Ans1h,
                  [12]: Ans1aFin,	[13]: Ans1bFin,	[14]: Ans1cFin,	[15]: Ans1dFin, [16]: Ans1eFin, [17]: Ans1fFin, [18]: Ans1gFin, [19]: Ans1hFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans1a,	Ans1b,	Ans1c,	Ans1d, Ans1e, Ans1f, Ans1g, Ans1h,	
                  Ans1aFin,	Ans1bFin,	Ans1cFin,	Ans1dFin, Ans1eFin, Ans1fFin, Ans1gFin, Ans1hFin 
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
                    "Answer_E": row.Ans1eFin,
                    "Answer_F": row.Ans1fFin,
                    "Answer_G": row.Ans1gFin,
                    "Answer_H": row.Ans1hFin,
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
              center: [33.362, 35.173],
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
                id: 'resultsAnswerOneCraftmanship',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonColl
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
                map.on('click', 'resultsAnswerOneCraftmanship', function(e) {
                var coordinates = e.features[0].geometry.coordinates.slice();

                // set popup text
                var description =
                `<h4>` +
                e.features[0].properties.Country +
                `</h4> 
                <ul>
                  <li>A: In total ` + e.features[0].properties.Answer_A + ` People</li>
                  <li>B: In total ` + e.features[0].properties.Answer_B + ` People</li>
                  <li>C: In total ` + e.features[0].properties.Answer_C + ` People</li>
                  <li>D: In total ` + e.features[0].properties.Answer_D + ` People</li>
                  <li>E: In total ` + e.features[0].properties.Answer_E + ` People</li>
                  <li>E: In total ` + e.features[0].properties.Answer_F + ` People</li>
                  <li>E: In total ` + e.features[0].properties.Answer_G + ` People</li>
                  <li>E: In total ` + e.features[0].properties.Answer_H + ` People</li>
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerOneCraftmanship', function() {
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
        <h2>Question 1:</h2>
        <h3>If you had the choice between a handmade piece of furniture and the same piece of machine-made furniture, which one would you choose?</h3>
        <div className="exh_map_quest_result_green"><span>A</span><p>The cheapest.</p></div>
        <div className="exh_map_quest_result_green"><span>B</span><p>The best one, the handmade piece of furniture. Machine production never reaches the quality of craftsmanship.</p></div>
        <div className="exh_map_quest_result_green"><span>C</span><p>The machine-made piece of furniture. Machines work more precisely than people.</p></div>
        <div className="exh_map_quest_result_green"><span>D</span><p>The one that has the smallest ecological footprint. I think it’s the machine-made one because if you count it down per unit it probably takes less energy to make.</p></div>
        <div className="exh_map_quest_result_green"><span>E</span><p>The one that has the smallest ecological footprint. I think it’s the handmade one. The energy that a person puts into something is sustainable. Very often energy used by machines is very often non-sustainable.</p></div>
        <div className="exh_map_quest_result_green"><span>F</span><p>The one that lasts longer. The handmade one.</p></div>
        <div className="exh_map_quest_result_green"><span>G</span><p>The handmade one. With my purchase, I ensure that the craftsman can earn his living and not give it to a money-hungry investor.</p></div>
        <div className="exh_map_quest_result_green"><span>H</span><p>I do not care. They are the same anyway.</p></div>

        </div>

    </React.Fragment>
    );          
}

export default MapQOne