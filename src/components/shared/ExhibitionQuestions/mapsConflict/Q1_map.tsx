import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

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
                map.on('click', 'resultsAnswerOneConflict', function(e) {
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
        <h2>Question 1:</h2>
            <h3>"Violence is no solution" – that's what many people say when it comes to conflicts. They wish for a world in which conflicts are resolved without violence. What do you think: Can such a world become reality or will it remain a pipe dream?</h3> 
                <div className="exh_map_quest_result"><span>A</span><p>No. Such a world is not possible. Whether you like it or not, violence is in fact always a solution. It will always remain a solution. It is that simple.</p></div>
                <div className="exh_map_quest_result"><span>B</span><p>In a world without guns, the gun owner is king. At least that is what modern evolutionary biology says. Anyone who has the opportunity to use violence will eventually do so.</p></div>
                <div className="exh_map_quest_result"><span>C</span><p>Those who starve or starve are more likely to resort to violence. Because if you have nothing to lose, violence is always an option. Precisely because one has nothing left to lose. Conversely, this also means that those who want a world without conflicts may also have to accept the redistribution of wealth or resources.</p></div>
                <div className="exh_map_quest_result"><span>D</span><p>Violence is never my first option. But if others resort to violence, I would defend myself – if necessary with violence.</p></div>
                <div className="exh_map_quest_result"><span>E</span><p>I don't see why a world without violence shouldn't be possible. There is always an alternative to violence. For those who have realized that violence only generates counter-violence, renunciation of violence is the only way to improvement.</p></div>
        </div>



        <div className="visitCollection"><button className="">Visit Collection</button></div>
    </React.Fragment>
    );          
}

export default MapQOne