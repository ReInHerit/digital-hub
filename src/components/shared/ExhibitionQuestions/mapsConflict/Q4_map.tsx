import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"

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
                  [9]: Ans4aFin,	[10]: Ans4bFin,	[11]: Ans4cFin,	[12]: Ans4dFin,	[13]: Ans4eFin, [14]: Ans4fFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans4a,	Ans4b,	Ans4c,	Ans4d,	Ans4e,	
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
               'circle-color': '#dd502c',
               'circle-stroke-width': 1,
               'circle-stroke-color': '#dd502c',
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
                `<h3>` +
                e.features[0].properties.Country +
                `</h3> 
                <ul>
                  <li> Answer A: ` + e.features[0].properties.Answer_A + `</li>
                  <li> Answer B: ` + e.features[0].properties.Answer_B + `</li>
                  <li> Answer C: ` + e.features[0].properties.Answer_C + `</li>
                  <li> Answer D: ` + e.features[0].properties.Answer_D + `</li>
                  <li> Answer E: ` + e.features[0].properties.Answer_E + `</li>
                  <li> Answer F: ` + e.features[0].properties.Answer_F + `</li>
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
        <div>
            <h3 className="mt-5">
            Many people think that conflicts arise primarily because people do not understand each other. Do you agree?
            </h3> 
                <p>a. Generally, yes. Often one would rather be right than understand the other person. The end of dogmatism is often the end of a conflict.</p>
                <p>b. No. Because every understanding sooner or later comes to an end. For example, I cannot understand when others do not understand that climate change threatens humanity. That is where my understanding ends.</p>
                <p>c. This view is wrong. Quite often I can understand the attitude of a person and thus also understand it. However, the conflict has not yet been resolved by that. Because often I just do not share his attitude and I will not do it either.</p>
                <p>d. It is not about understanding the other person, it is about getting along with them. In the case of a conflict, I therefore look for solutions that both parties can agree to. Results are more important than mutual understanding.</p>
                <p>e. Yes. Because understanding the other opens up new perspectives and ways of resolving the conflict.</p>
                <p>f. No. It is not about understanding, it is about interests. You do not have to understand them, they are just there.</p>
        </div>
    </React.Fragment>
    );          
}

export default MapQFour