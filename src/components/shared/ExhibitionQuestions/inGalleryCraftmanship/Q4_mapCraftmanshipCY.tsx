import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
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
                id: 'resultsAnswerFourIdentities',
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
                map.on('click', 'resultsAnswerFourIdentities', function(e) {
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
              </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerFourIdentities', function() {
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
        <h2>Ερώτηση 3:</h2>
            <h3>
            Ορισμένοι λένε ότι όταν οι παραδοσιακές τέχνες εκλείψουν, θα χαθούν επίσης πολλές αναντικατάστατες γνώσεις και δεξιότητες. Είναι σωστό αυτό;
            </h3> 
            <div className="exh_map_quest_result_green"><span>Α</span><p>
            Δεν ξέρω αν η γνώση θα χαθεί. Εξάλλου, υπάρχουν ακόμη βιβλία ή το Διαδίκτυο όπου η γνώση αποθηκεύεται και διατηρείται. Αλλά οι δεξιότητες χάνονται, αυτό είναι αλήθεια.
            </p></div>
            <div className="exh_map_quest_result_green"><span>Β</span><p>
            Αυτό είναι αλήθεια, αλλά είναι καλό πράγμα. Μερικές φορές οι χειρότερες γνώσεις απλά αντικαθίστανται με καλύτερες. Ποιος νοιάζεται για το πώς λειτουργεί ένας κινητήρας ντίζελ, όταν υπάρχουν αυτοκίνητα με καλύτερους κινητήρες, όπως τα ηλεκτρικά αυτοκίνητα;
              </p></div>
            <div className="exh_map_quest_result_green"><span>Γ</span><p>
            Χάνονται πολύ περισσότερα, δηλαδή η επαρκής και ολιστική αντιμετώπιση της φύσης και των προϊόντων της. Ο καθένας που παράγει τυρί από το γάλα των δικών του αγελάδων είναι ενταγμένος στην φύση με εντελώς διαφορετικό τρόπο από τον πελάτη στο σούπερ μάρκετ, ο οποίος τείνει να να υποψιάζεται μια χημική διαδικασία πίσω από την παραγωγή του τυριού.
              </p></div>
            <div className="exh_map_quest_result_green"><span>Δ</span><p>
            Πάνω απ' όλα, χάνονται τα συμφραζόμενα του νοήματος. Το να κάνει κανείς χειρωνακτική εργασία σημαίνει επίσης ότι βιώνει την εμπειρία του, τη δική του δραστηριότητα στην κατασκευή προϊόντων ως ουσιαστική. Ο χειρισμός μιας μηχανής δεν παρέχει ένα τέτοιο νόημα.
              </p></div>
          </div>

    </React.Fragment>

    );          
}

export default MapQFour
