import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsConflict/cred/myjson.json'
import {GoogleSpreadsheet} from "google-spreadsheet"
import { render } from "react-dom";

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
                const sheet = doc.sheetsByIndex[0];
                const rows = await sheet.getRows();
                const AllRows = rows.map((GoogleSpreadsheetRow) => GoogleSpreadsheetRow._rawData);
            //  console.log(AllRows) 
                setAllRows(AllRows)
                
                const sortingRows = AllRows.map(({
                  [0]: country, [1]: questionOne, [2]: longitude, [3]: latitude, [4]: AnswerOneID
                }) => 
                ({country, questionOne, longitude, latitude, AnswerOneID}))
            //  console.log(sortingRows)
           
            const MyGeoJson = sortingRows.map(row => {
              return {
                "type": "Feature",
                "properties": {
                    "Answer_chosen": row.AnswerOneIDs
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
              source: 'finalGeoJson',
              layer: 'finalGeoJson'
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

            map.addSource('locations', {
                type: 'geojson',
                data: GeoJsonColl,
                cluster: false,    
              });

            map.addLayer({
                id: 'resultsAnswerOneConflict',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: GeoJsonColl
                },
                paint: {
               'circle-color': '#dd502c',
               'circle-stroke-width': 1,
               'circle-stroke-color': '#dd502c',
               'circle-opacity': 0.5,
               'circle-radius': {
                property: 'Answer_chosen',
                // think how to make them more proportional to our responses
                stops: [
                  [2, 100],
                  [101, 500],
                  [501, 1000],
                ]
              }
                }
            })
    
            // pop up -- to be improved (still undefined)
            map.on('click', 'resultsAnswerOneConflict', function(e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description =
                `<h3>` +
                e.features[0].properties.Answer_chosen +
                `</h3>`

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                  }
                
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
          
        <div>
            <h3 className="mt-5">Question 1: new test question what needs to be improved here?</h3> 
                <p>
                Answer 1. The following three objects deal with rising food prices and the effects of wars, with geopolitical conflicts and social hierarchies.
                </p>
                <p>
                Answer 2. hfuiwhfalfjsjaiudgjd
                </p>
                <p>
                Answer 3. hudiaghiudahgdkjgfdngkjfd    
                </p>
          
        </div>
    </React.Fragment>
    );
          
}

export default MapQOne