import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionOneConflictGR = () => {

 const [answerOneConflictDE, setAnswerOneConflictDE] = useState() 

 const currentCountryDE = "\"Greece\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneConflictDE)
        const resultA = await sheetA.addRow({country: currentCountryDE, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneConflict', JSON.stringify(answerOneConflict));
//      }, [answerOneConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneConflictDE = [
      "Όχι. Ένας τέτοιος κόσμος δεν είναι πιθανό να υπάρξει. Είτε μας αρέσει είτε όχι, στην πραγματικότητα, η βία είναι πάντα η λύση. Και θα είναι πάντα η λύση. Είναι τόσο απλό.",
      "Σε έναν κόσμο χωρίς όπλα, ο κάτοχος του όπλου είναι βασιλιάς. Τουλάχιστον αυτό ισχύει σύμφωνα με τη σύγχρονη εξελικτική βιολογία. Οποιοσδήποτε έχει την ευκαιρία να χρησιμοποιήσει βία, στο τέλος θα το κάνει.",
      "Όσοι λιμοκτονούν είναι πιο πιθανό να καταφύγουν στη βία. Διότι αν δεν έχεις τίποτα να χάσεις, η βία θα αποτελεί πάντα επιλογή. Ακριβώς επειδή δεν έχει μείνει σε κανέναν τίποτα να χάσει. Αντιστρόφως, αυτό, επίσης, σημαίνει ότι όσοι θέλουν έναν κόσμο χωρίς συγκρούσεις ίσως πρέπει να αποδεχτούν την αναδιανομή του πλούτου ή των πόρων.",
      "Η βία δεν είναι ποτέ η πρώτη μου επιλογή. Αλλά αν οι άλλοι κατέφευγαν στη βία, θα υπερασπιζόμουν τον εαυτό μου – με βία, αν ήταν απαραίτητο.",
      "Δεν βλέπω γιατί ένας κόσμος χωρίς βία δεν μπορεί να είναι εφικτός. Υπάρχει πάντα εναλλακτική στη βία. Για όσους έχουν συνειδητοποιήσει ότι η βία παράγει μόνο βία, η αποκήρυξή της είναι ο μόνος τρόπος βελτίωσης."
    ]
    const onOptionChange = e => {
        setAnswerOneConflictDE(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryGR/2ndQuestionConflictGR";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          «Η βία δεν είναι η λύση» – αυτό ισχυρίζονται πολλοί άνθρωποι όταν πρόκεται για τις συγκρούσεις. Κάνουν ευχές για έναν κόσμο στον οποίο οι διαφορές επιλύονται χωρίς βία. Τι πιστεύετε: μπορεί ένας τέτοιος κόσμος να γίνει πραγματικότητα ή θα παραμείνει όνειρο θερινής νυκτός; 
          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneConflictDE.map((possAnswOneConflictDE, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneConflictDE}
                label={possAnswOneConflictDE}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneConflictDE === answerOneConflictDE}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneConflictDE}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneConflictGR

