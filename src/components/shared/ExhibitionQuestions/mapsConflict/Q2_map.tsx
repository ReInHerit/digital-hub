import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
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
                map.on('click', 'resultsAnswerTwoConflict', function(e) {
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
        <h2>Question 2:</h2>
            <h3>Is it bad if you fight back?</h3> 
            <div className="exh_map_quest_result"><span>A</span><p>No. Resistance can be a very good thing and sometimes even becomes a duty. Often you even have to defend what is important to you. In this case I not only have the right but also the duty to defend myself.</p></div>
            <div className="exh_map_quest_result"><span>B</span><p>I don't know if it is evil to fight back. But for my part I abhor any form of violence. Therefore, if in doubt, I would not defend myself.</p></div>
            <div className="exh_map_quest_result"><span>C</span><p>Anyone who thinks it is evil to stand up for one's freedom, for example, morally equates oppressor and victim. But that is wrong. A perpetrator is never on the same moral level as the victim. So it is not evil to fight back.</p></div>
            <div className="exh_map_quest_result"><span>D</span><p>Anyone who resists creates counter-violence with his violence. This definitely leads to a spiral of violence. So it may not be evil to fight back, but it is at least unwise.</p></div>
            <div className="exh_map_quest_result"><span>E</span><p>Imagine your parents' house suddenly being illegally occupied. What should prevent you from fighting back? Nothing. Any questions?</p></div>
        </div>

        <div className="visitCollection"><Button className="coll_button" href="https://collection.reinherit-hub.eu/">Visit Collection</Button></div>
      </React.Fragment>
    );          
}

export default MapQTwo