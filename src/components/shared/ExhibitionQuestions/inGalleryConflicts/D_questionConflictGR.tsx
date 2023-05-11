import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionFourConflictGR = () => {

    const [answerFourConflictDE, setAnswerFourConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourConflictDE)
        const resultD = await sheetD.addRow({country: currentCountryDE, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourConflict', JSON.stringify(answerFourConflict));
//      }, [answerFourConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourConflictDE = [
        "Γενικά, ναι. Πολύ συχνά κάποιος προτιμά να έχει δίκιο παρά να κατανοήσει τον άλλο. Το τέλος του δογματισμού είναι συχνά το τέλος μιας διαμάχης.",
        "Όχι. Διότι κάθε κατανόηση, αργά ή γρήγορα τελειώνει. Για παράδειγμα, δεν καταλαβαίνω γιατί οι άλλοι δεν καταλαβαίνουν ότι η κλιματική αλλαγή απειλεί την ανθρωπότητα. Εδώ τελειώνει η δική μου κατανόηση.",
        "Αυτή η άποψη είναι λάθος. Αρκετά συχνά κατανοώ τη στάση του ατόμου και επομένως το καταλαβαίνω. Ωστόσο, η διαμάχη δεν επιλύεται με τον τρόπο αυτό. Διότι πολλές φορές δε συμμερίζομαι αυτή τη στάση και ούτε πρόκειται να το κάνω.",
        "Δεν έχει να κάνει με το να καταλαβαίνεις το άλλο άτομο, αλλά με το να τα πας καλά μαζί του. Στην περίπτωση της διαμάχης επομένως, ψάχνω για λύσεις με τις οποίες θα συμφωνήσουν και οι δύο πλευρές. Τα αποτελέσματα είναι πιο σημαντικά από την αμοιβαία κατανόηση.",
        "Ναι. Διότι το να καταλαβαίνεις τον άλλο ανοίγει νέες προοπτικές και τρόπους επίλυσης της διαμάχης.",
        "Όχι. Δεν έχει να κάνει με την κατανόηση αλλά με τα συμφέροντα. Δεν πρέπει να τα κατανοήσεις, απλώς υπάρχουν εκεί."
    ]
    const onOptionChange = e => {
        setAnswerFourConflictDE(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryGR/ConflictExhibitionMapGR";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Πολλοί άνθρωποι πιστεύουν πως οι συγκρούσεις προκύπτουν κυρίως επειδή οι άνθρωποι δεν κατανοούν ο ένας τον άλλο. Συμφωνείτε;
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourConflictDE.map((possAnswFourConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourConflictDE}
            label={possAnswFourConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourConflictDE === answerFourConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourConflictDE} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Υποβολή και εμφάνιση αποτελέσματος</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourConflictGR

