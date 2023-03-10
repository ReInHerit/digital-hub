import React, {Component} from "react";
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import creds from '../questionsIdentities/cred/myjson.json'
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
                    "Answer_F": row.Ans3fFin
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
                id: 'resultsAnswerThreeIdentities',
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
                map.on('click', 'resultsAnswerThreeIdentities', function(e) {
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
                  <li>E: Συνολικά ` + e.features[0].properties.Answer_E + ` άνθρωποι</li>
                  <li>E: Συνολικά ` + e.features[0].properties.Answer_F + ` άνθρωποι</li>
                </ul>` 

               //add Popup to map
                  new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on('mouseenter', 'resultsAnswerThreeIdentities', function() {
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
        <h2>Ερώτηση 2:</h2>
            <h3>
            Υπάρχουν προϊόντα χειροτεχνίας που δεν μπορούν ποτέ να κατασκευαστούν από μηχανή; Εσείς τι πιστεύετε;
            </h3> 
            <div className="exh_map_quest_result_green"><span>Α</span><p>
            Όχι. Σε παλαιότερες εποχές οι άνθρωποι συνήθιζαν να πιστεύουν ότι το ανθρώπινο μυαλό δεν θα νικηθεί ποτέ από μια μηχανή. Στο σκάκι για παράδειγμα. Κανείς δεν μιλάει πια γι' αυτό. Το ίδιο θα συμβεί και με το τα χειροποίητα προϊόντα.
              </p></div>
            <div className="exh_map_quest_result_green"><span>Β</span><p>
            Ναι. Ένα χειροποίητο προϊόν είναι πάντα μοναδικό. Αλλά η μηχανική κατασκευή δεν προσφέρει ποτέ μοναδικά προϊόντα. Είναι πάντα το ένα σαν το άλλο.
              </p></div>
            <div className="exh_map_quest_result_green"><span>Γ</span><p>
            Ναι. Επειδή υπάρχουν επίπεδα ποιότητας που είναι ανέφικτα για τις μηχανές. Παράδειγμα: το χειροποίητο επιστόμιο ενός σαξοφώνου. Απλά κανένα μηχανοποιημένο επιστόμιο δεν μπορεί να φτάσει ποιότητα ήχου ενός τέτοιου επιστόμιου.
              </p></div>
            <div className="exh_map_quest_result_green"><span>Δ</span><p>
            Νομίζω ότι οι διαφορές θα είναι τόσο μικρές που κανείς δεν θα τις παρατηρεί πια.
              </p></div>
            <div className="exh_map_quest_result_green"><span>Ε</span><p>
            Τα χειροποίητα προϊόντα απαιτούν πνεύμα, τα μηχανικά προϊόντα μόνο ενέργεια. Στο ενδιάμεσο υπάρχει ένα ανυπέρβλητο χάσμα.
              </p></div>
              <div className="exh_map_quest_result_green"><span>Ζ</span><p>
              Ίσως τα μηχανικά προϊόντα να μην είναι πραγματικά ποτέ τόσο καλά όσο τα χειροποίητα. Αλλά σε ποσότητα είναι καλύτερα.
              </p></div>
          </div>

    </React.Fragment>
    );          
}

export default MapQThree
