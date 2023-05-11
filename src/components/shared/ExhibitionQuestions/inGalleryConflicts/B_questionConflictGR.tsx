import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionTwoConflictGR = () => {

    const [answerTwoConflictDE, setAnswerTwoConflictDE] = useState() 

    const currentCountryDE = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoConflictDE)
        const resultB = await sheetB.addRow({country: currentCountryDE, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoConflict', JSON.stringify(answerTwoConflict));
 //     }, [answerTwoConflict]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoConflictDE = [
        "Όχι. Η αντεπίθεση μπορεί να είναι πολύ καλό πράγμα και πολλές φορές γίνεται καθήκον. Πολύ συχνά πρέπει να υπερασπιστείς όσα είναι σημαντικά για σένα. Σε αυτή την περίπτωση, όχι μόνο έχω το δικαίωμα αλλά και την υποχρέωση να υπερασπιστώ τον εαυτό μου.",
        "Δεν γνωρίζω αν είναι κακό να αντεπιτίθεσαι. Εγώ προσωπικά απεχθάνομαι κάθε μορφή βίας. Επομένως, αν βρισκόμουν σε δίλημμα, δεν θα υπερασπιζόμουν τον εαυτό μου.",
        "Οποιοσδήποτε πιστεύει πως είναι κακό να ορθώνει κανείς το ανάστημά του για την ελευθερία του, για παράδειγμα, εξισώνει τον καταπιεστή με το θύμα ηθικά. Αλλά αυτό είναι λάθος. Ο θύτης δεν βρίσκεται ποτέ στο ίδιο ηθικό επίπεδο με το θύμα. Επομένως δεν είναι κακό να αντεπιτίθεται κανείς.",
        "Οποιοσδήποτε αντιστέκεται δημιουργεί βία ως αντίδραση στη βία του. Αυτό σίγουρα οδηγεί σε μια αλυσίδα βίας. Επομένως, δεν είναι κακό να αντεπιτίθεται κανείς, αλλά δεν είναι σοφό, το λιγότερο.",
        "Φανταστείτε το σπίτι των γονιών σας να καταληφθεί παράνομα ξαφνικά. Τι θα σας εμπόδιζε από το να αντεπιτεθείτε; Τίποτα. Έχετε ερωτήσεις;"
    ]
    const onOptionChange = e => {
        setAnswerTwoConflictDE(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryGR/3rdQuestionConflictGR";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Είναι κακό να αντεπιτεθείς;</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoConflictDE.map((possAnswTwoConflictDE, index) => (
          <Form.Check
            type="radio" name="exh_questions"
            value={possAnswTwoConflictDE}
            label={possAnswTwoConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswTwoConflictDE === answerTwoConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
                <Button className="exh_submit_btn" 
                type="submit" disabled={!answerTwoConflictDE} onClick={handleSubmitB} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoConflictGR

