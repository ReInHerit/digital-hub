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
                  [4]: Ans1a,	[5]: Ans1b,	[6]: 	Ans1c,	[7]: 	Ans1d,	
                  [8]: Ans1aFin,	[9]: Ans1bFin,	[10]: Ans1cFin,	[11]: Ans1dFin
                }) => 
                ({
                  exact_match,	longitude, latitude, Country,
                  Ans1a,	Ans1b,	Ans1c,	Ans1d,		
                  Ans1aFin,	Ans1bFin,	Ans1cFin,	Ans1dFin
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
              center: [23.742, 37.975],
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
            <h3> «Οι ρόλοι, συμπεριλαμβανομένων των ρόλων των φύλων, πάντα συνδέονται με τα προνόμια. Μόνο όσοι αναλαμβάνουν έναν ρόλο μπορούν να απολαύσουν τα προνόμια που σχετίζονται με αυτόν. Επομένως, η ανάληψη ενός ρόλου αυξάνει τον χώρο της προσωπικής ελευθερίας». – Συμφωνείτε με αυτή την άποψη; </h3> 
                <div className="exh_map_quest_result_red"><span>Α</span><p>
                Ναι, συμφωνώ. Τα δικαιώματα είναι πάντα συνδεδεμένα με τους ρόλους. Όποιος δεν αναλαμβάνει κάποιο ρόλο, κατά συνέπεια αποκλείεται χωρίς καθόλου δικαιώματα. Όλο αυτό ξεκινά με την ιθαγένεια και τελειώνει με το φύλο.
                </p></div>
                <div className="exh_map_quest_result_red"><span>Β</span><p>
                Οποιοσδήποτε μιλά με αυτό τον τρόπο, υποθέτει σιωπηρά ότι κάποιος μπορεί να επιλέγει ελεύθερα τον ρόλο του. Ωστόσο, οι ρόλοι δεν επιλέγονται, επιβάλλονται από την κοινωνία. Αυτό ισχύει και για την ελευθερία που σχετίζεται με έναν ρόλο. Σε τι χρησιμεύει άλλωστε η πιο μεγάλη ελευθερία, αν δεν είναι η ελευθερία που εγώ θέλω; - Σε τίποτα.
                  </p></div>
                <div className="exh_map_quest_result_red"><span>Γ</span><p>
                Αυτή είναι η μία μόνο πλευρά του νομίσματος. Γιατί ακόμη πιο σπουδαίες από τις ελευθερίες που κερδίζει κάποιος, είναι εκείνες που δεν κερδίζει. Επομένως, όποιος αναλαμβάνει έναν ρόλο, κλείνει την πόρτα σε άλλους και επομένως σε άλλα προνόμια. Συνεπώς, η ανάληψη ενός ρόλου είναι πάντα φορτισμένη αρνητικά.
                  </p></div>
                <div className="exh_map_quest_result_red"><span>Δ</span><p>
                Δεν μου αρέσει να σκέφτομαι τη ζωή μου με όρους κοινωνικών ρόλων. Είμαι απλά ο εαυτός μου και θέλω απλά να είμαι αυτό. Για μένα, η ανάληψη ενός ρόλου συνεπάγεται το να είσαι ψεύτικος και να προσποιείσαι.
                  </p></div>
      </div>

    </React.Fragment>
    );          
}

export default MapQOne