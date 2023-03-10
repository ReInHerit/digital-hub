import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionOneIdentities = () => {

 const [answerOneIdentities, setAnswerOneIdentities] = useState() 

 const currentCountryGR = "\"Greece\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneIdentities)
        const resultA = await sheetA.addRow({country: currentCountryGR, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneIdentities', JSON.stringify(answerOneIdentities));
//      }, [answerOneIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneIdentities = [
      "Ναι, συμφωνώ. Τα δικαιώματα είναι πάντα συνδεδεμένα με τους ρόλους. Όποιος δεν αναλαμβάνει κάποιο ρόλο, κατά συνέπεια αποκλείεται χωρίς καθόλου δικαιώματα. Όλο αυτό ξεκινά με την ιθαγένεια και τελειώνει με το φύλο.",
      "Οποιοσδήποτε μιλά με αυτό τον τρόπο, υποθέτει σιωπηρά ότι κάποιος μπορεί να επιλέγει ελεύθερα τον ρόλο του. Ωστόσο, οι ρόλοι δεν επιλέγονται, επιβάλλονται από την κοινωνία. Αυτό ισχύει και για την ελευθερία που σχετίζεται με έναν ρόλο. Σε τι χρησιμεύει άλλωστε η πιο μεγάλη ελευθερία, αν δεν είναι η ελευθερία που εγώ θέλω; - Σε τίποτα.",
      "Αυτή είναι η μία μόνο πλευρά του νομίσματος. Γιατί ακόμη πιο σπουδαίες από τις ελευθερίες που κερδίζει κάποιος, είναι εκείνες που δεν κερδίζει. Επομένως, όποιος αναλαμβάνει έναν ρόλο, κλείνει την πόρτα σε άλλους και επομένως σε άλλα προνόμια. Συνεπώς, η ανάληψη ενός ρόλου είναι πάντα φορτισμένη αρνητικά.",
      "Δεν μου αρέσει να σκέφτομαι τη ζωή μου με όρους κοινωνικών ρόλων. Είμαι απλά ο εαυτός μου και θέλω απλά να είμαι αυτό. Για μένα, η ανάληψη ενός ρόλου συνεπάγεται το να είσαι ψεύτικος και να προσποιείσαι." 
    ]
    const onOptionChange = e => {
        setAnswerOneIdentities(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryGR/2ndQuestionIdentitiesGR";
      };

      return (
        <React.Fragment>
          <h1 className="mt-5">
          «Οι ρόλοι, συμπεριλαμβανομένων των ρόλων των φύλων, πάντα συνδέονται με τα προνόμια. Μόνο όσοι αναλαμβάνουν έναν ρόλο μπορούν να απολαύσουν τα προνόμια που σχετίζονται με αυτόν. Επομένως, η ανάληψη ενός ρόλου αυξάνει τον χώρο της προσωπικής ελευθερίας». – 
          <br /> Συμφωνείτε με αυτή την άποψη; 
          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneIdentities.map((possAnswOneIdentities, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneIdentities}
                label={possAnswOneIdentities}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneIdentities === answerOneIdentities}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneIdentities}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneIdentities

