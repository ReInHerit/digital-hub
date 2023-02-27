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
        <h2>Question 2:</h2>
            <h3>Gender roles existed at all times and in every society. What do you think: is a society without gender roles possible in the future?</h3> 
              <div className="exh_map_quest_result"><span>A</span><p>No. I can not imagine that. A gender role is simply not an invention of a poet, but linked to biological sex. But as long as the sexes are biologically different, there will also be different gender roles.</p></div>
              <div className="exh_map_quest_result"><span>B</span><p>I am not even sure to appreciate that. I even welcome different gender roles. But the problem with gender roles is not their existence. It is discrimination that can be associated with such a role.</p></div>
              <div className="exh_map_quest_result"><span>C</span><p>Yes. After all, gender is not natural, but only a human invention. If you want to build a society without gender roles, you simply have to stop paying too much attention to gender. Why should not that be possible?</p></div>
              <div className="exh_map_quest_result"><span>D</span><p>I can even imagine a society divided in two. In one part of such a society there will still be gender roles. And for the other part, they just do not matter.</p></div>
        </div>

        <div className="visitCollection"><Button className="coll_button" href="https://collection.reinherit-hub.eu/">Visit Collection</Button></div>
      </React.Fragment>
    );          
}

export default MapQTwo

