import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionFourIdentities = () => {

    const [answerFourIdentities, setAnswerFourIdentities] = useState() 

    const currentCountryGR = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourIdentities)
        const resultD = await sheetD.addRow({country: currentCountryGR, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourIdentities', JSON.stringify(answerFourIdentities));
//      }, [answerFourIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourIdentities = [
        "Είναι πολύ σημαντικό για μένα να γνωρίζω σε ποιο κοινωνικό φύλο ανήκω. Είμαι μέρος του κοινωνικού μου φύλου και δεν μπορώ να το αλλάξω όπως αλλάζω πάροχο ίντερνετ.",
        "Κατά τη γνώμη μου, δίνεται υπερβολικά μεγάλη προσοχή στο θέμα της ταυτότητας. Δεν έχει σημασία αν έχω μια ταυτότητα οποιουδήποτε είδους. Το μόνο πράγμα που έχει σημασία είναι η δική μου ευτυχία.", 
        "Για μένα, η ερώτηση της ταυτότητας δεν έχει ενδιαφέρον. Δεν γνωρίζω καν ποιος είμαι. Ακόμη και να γνώριζα, τι όφελος θα μπορούσα να έχω από αυτό;",
        "Αρνούμαι να απαντήσω στην ερώτηση της ταυτότητάς μου. Προϋποθέτει πως υπάρχει μέσα μου κάτι που παραμένει πάντα ίδιο – η φύση μου, συμπεριλαμβανομένης της φύσης μου ως σεξουαλικού όντος. Αλλά αυτό δεν ισχύει για εμένα. Για εμένα, το να κυνηγώ την ταυτότητά μου, είναι σαν να κυνηγώ ένα φάντασμα.",
        "Στον κόσμο στον οποίο ζούμε κυριαρχούν ακόμη οι ρόλοι των φύλων. Αυτό είναι ο λόγος για τον οποίο με ενδιαφέρουν. Ωστόσο, ελπίζω ότι για τις επόμενες γενιές δεν θα μετράει σε ποιο κοινωνικό φύλο ανήκει κανείς."
    ]
    const onOptionChange = e => {
        setAnswerFourIdentities(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryGR/IdentitiesExhibitionMapGR";
      };

return (
<React.Fragment>

<h1 className="mt-5">
«Ταυτότητα» σημαίνει: το να έχω την απάντηση στην ερώτηση «ποιος είμαι πραγματικά». «Ταυτότητα Φύλου» επομένως σημαίνει: το να έχω την απάντηση στην ερώτηση «σε ποιο κοινωνικό φύλο ανήκω στην πραγματικότητα». Πόσο σημαντική είναι η απάντηση σε αυτή την ερώτηση για σένα;
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourIdentities.map((possAnswFourIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourIdentities}
            label={possAnswFourIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourIdentities === answerFourIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourIdentities} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Υποβολή και εμφάνιση αποτελέσματος</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourIdentities

