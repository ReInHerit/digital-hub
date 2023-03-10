import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
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
                id: 'resultsAnswerOneIdentities',
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
                map.on('click', 'resultsAnswerOneIdentities', function(e) {
                var coordinates = e.features[0].geometry.coordinates.slice();

                // set popup text
                var description =
                `<h4>` +
                e.features[0].properties.Country +
                `</h4> 
                <ul>
                  <li>A: Συνολικά ` + e.features[0].properties.Answer_A + ` άνθρωποι</li>
                  <li>B: Συνολικά ` + e.features[0].properties.Answer_B + ` άνθρωποι</li>
                  <li>C: Συνολικά ` + e.features[0].properties.Answer_C + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_D + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_E + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_F + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_G + ` άνθρωποι</li>
                  <li>D: Συνολικά ` + e.features[0].properties.Answer_H + ` άνθρωποι</li>
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerOneIdentities', function() {
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
        <h2>Ερώτηση 1:</h2>
            <h3> 
            Αν είχατε τη δυνατότητα να επιλέξετε ανάμεσα σε ένα χειροποίητο έπιπλο και το ίδιο έπιπλο που κατασκευάζεται από μηχανή, ποιο θα επιλέγατε;
              </h3> 
                <div className="exh_map_quest_result_green"><span>Α</span><p>
                Το φθηνότερο.
                </p></div>
                      <div className="exh_map_quest_result_green"><span>Β</span><p>
                Το καλύτερο, δηλαδή το χειροποίητο έπιπλο. Η μηχανική παραγωγή δεν φτάνει ποτέ την ποιότητα της χειροτεχνίας.
                  </p></div>
                <div className="exh_map_quest_result_green"><span>Γ</span><p>
                Το έπιπλο που κατασκευάστηκε από μηχανή. Σε σύγκριση με τους ανθρώπους, οι μηχανές εργάζονται με μεγαλύτερη ακρίβεια.
                  </p></div>
                <div className="exh_map_quest_result_green"><span>Δ</span><p>
                Εκείνο που έχει το μικρότερο οικολογικό αποτύπωμα. Νομίζω ότι είναι αυτό που φτιάχνεται από μηχανή. γιατί αν το μετρήσετε πιθανόν να χρειάζεται λιγότερη ενέργεια για να φτιαχτεί.
                  </p></div>
                  <div className="exh_map_quest_result_green"><span>Ε</span><p>
                  Αυτό που έχει το μικρότερο οικολογικό αποτύπωμα. Νομίζω ότι αυτό είναι το χειροποίητο. Η ενέργεια που βάζει ο άνθρωπος σε κάτι είναι βιώσιμη. Πολύ συχνά η ενέργεια που χρησιμοποιούν οι  μηχανές είναι δεν είναι βιώσιμη.
                  </p></div>
                  <div className="exh_map_quest_result_green"><span>Ζ</span><p>
                  Ό,τι διαρκεί περισσότερο. Οπότε το χειροποίητο.
                  </p></div>
                  <div className="exh_map_quest_result_green"><span>Η</span><p>
                  Tο χειροποίητο. Με την αγορά μου, εξασφαλίζω το προς το ζήν του τεχνίτη και εξασφαλίζω ότι δεν θα θα δώσω τα λεφτά μου σε ένα επενδυτή  που διψάει για χρήμα.
                  </p></div>
                  <div className="exh_map_quest_result_green"><span>Θ</span><p>
                  Δεν με νοιάζει. Έτσι κι αλλιώς είναι το ίδιο.
                  </p></div>
      </div>

    </React.Fragment>
    );          
}

export default MapQOne