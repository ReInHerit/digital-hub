import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionThreeConflictGR = () => {

    const [answerThreeConflictDE, setAnswerThreeConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeConflictDE)
        const resultC = await sheetC.addRow({country: currentCountryDE, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeConflict', JSON.stringify(answerThreeConflict));
 //     }, [answerThreeConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeConflictDE = [ 
        "Ομολογουμένως, δεν υπάρχει κράτος που να είναι τέλειο ή χωρίς συγκρούσεις. Σε ένα δημοκρατικό καθεστώς ωστόσο πάντα υπάρχει τρόπος να επιλυθούν οι διαμάχες χωρίς βία. Ο καθένας μπορεί να έχει πολιτική εμπλοκή ή να κινηθεί νομικά.",
        "Κάθε κοινωνικό σύστημα χρειάζεται πολύ καιρό για να αντιδράσει στις κοινωνικές συγκρούσεις. Αυτοί που περιμένουν η χώρα τους να κάνει κάτι αποτελεσματικό για να καταπολεμήσει την κοινωνική ανισότητα, για παράδειγμα, καταλήγουν να περιμένουν πολύ.",
        "Δεν υπάρχει σύστημα, ακόμα και το καλύτερο, που να είναι απόλυτα δίκαιο. Αυτή είναι η φύση των συστημάτων. Πρέπει να το ανεχτούμε όλο αυτό.",
        "Η δομική βία είναι πάντοτε αφηρημένη βία. Γίνεται πραγματική βία μόνο μέσω των ανθρώπων που είναι μέρος του συστήματος και επωφελούνται από αυτό. Το πιο αποτελεσματικό μέσο πίεσης ενάντια στη δομική βία είναι επομένως η ενεργή αντίσταση σε αυτούς που την επιβάλλουν. ",
        "Ο μισογυνισμός ή ο ρατσισμός δεν οικοδομούνται μόνο στα κοινωνικά συστήματα, αλλά και στο μυαλό του πληθυσμού. Είναι επομένως λιγότερο σημαντικό το να αλλάξει κανείς το σύστημα από το να αλλάξει τη στάση των ατόμων."   
    ]
    const onOptionChange = e => {
        setAnswerThreeConflictDE(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryGR/1stQuestionConflictGR";
      };
 
return (
<React.Fragment>

<h1 className="mt-5">
Κάποιες φορές οι συγκρούσεις δεν προκαλούνται από τα άτομα διότι είναι εγγενείς στο κοινωνικό σύστημα μέσα στο οποίο ζούμε. Κάποιος θα μπορούσε να πει πως πρόκειται για «δομική βία». Πώς θα πρέπει να αντιμετωπίσουμε αυτή τη δομική βία;
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeConflictDE.map((possAnswThreeConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeConflictDE}
            label={possAnswThreeConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeConflictDE === answerThreeConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeConflictDE} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Ευχαριστούμε! Απολαύστε την έκθεση!</h1>
                    </Button>
            </div>        
        </Form>


</React.Fragment>
    )
  }

export default QuestionThreeConflictGR

