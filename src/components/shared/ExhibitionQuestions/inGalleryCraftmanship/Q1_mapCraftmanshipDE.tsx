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
                  <li>A: Gesamt ` + e.features[0].properties.Answer_A + ` Personen</li>
                  <li>B: Gesamt ` + e.features[0].properties.Answer_B + ` Personen</li>
                  <li>C: Gesamt ` + e.features[0].properties.Answer_C + ` Personen</li>
                  <li>D: Gesamt ` + e.features[0].properties.Answer_D + ` Personen</li>
                  <li>E: Gesamt ` + e.features[0].properties.Answer_E + ` Personen</li>
                  <li>E: Gesamt ` + e.features[0].properties.Answer_F + ` Personen</li>
                  <li>E: Gesamt ` + e.features[0].properties.Answer_G + ` Personen</li>
                  <li>E: Gesamt ` + e.features[0].properties.Answer_H + ` Personen</li>
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
        <h2>Frage 1:</h2>
        <h3>Wenn Sie sich zwischen einem handgefertigten und dem gleichen, aber maschinell hergestellten Möbelstück entscheiden müssten, welches würden Sie wählen?</h3>
        <div className="exh_map_quest_result_green"><span>A</span><p>Das Günstigste.</p></div>
        <div className="exh_map_quest_result_green"><span>B</span><p>Das Beste, also das handgefertigte Möbelstück. Eine maschinelle Herstellung ist nie von so hoher Qualität wie Handwerkskunst.</p></div>
        <div className="exh_map_quest_result_green"><span>C</span><p>Das maschinengefertigte Möbelstück. Maschinen arbeiten präziser als Personen.</p></div>
        <div className="exh_map_quest_result_green"><span>D</span><p>Jenes mit dem geringsten ökologischen Fußabdruck. Das dürfte das Maschinengefertigte sein, denn wenn man die einzelnen dafür nötigen Einheiten betrachtet, braucht es vermutlich weniger Energie in der Herstellung.</p></div>
        <div className="exh_map_quest_result_green"><span>E</span><p>Jenes mit dem geringsten ökologischen Fußabdruck. Das dürfte das Handgefertigte sein. Die von einer Person aufgewendete Energie ist nachhaltig. Von Maschinen verbrauchte Energie ist oft nicht nachhaltig.</p></div>
        <div className="exh_map_quest_result_green"><span>F</span><p>Jenes, das länger hält. Das Handgefertigte.</p></div>
        <div className="exh_map_quest_result_green"><span>G</span><p>Das Handgefertigte. Mit meinem Kauf sorge ich dafür, dass der Handwerker seinen Lebensunterhalt bestreiten kann und unterstützte keinen geldgierigen Investor.</p></div>
        <div className="exh_map_quest_result_green"><span>H</span><p>Das ist mir egal. Sie sind ohnehin gleich.</p></div>
        </div>

    </React.Fragment>
    );          
}

export default MapQOne