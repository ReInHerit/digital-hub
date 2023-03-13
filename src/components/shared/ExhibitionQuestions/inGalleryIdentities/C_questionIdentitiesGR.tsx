import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionThreeIdentities = () => {

    const [answerThreeIdentities, setAnswerThreeIdentities] = useState() 

    const currentCountryGR = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeIdentities)
        const resultC = await sheetC.addRow({country: currentCountryGR, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeIdentities', JSON.stringify(answerThreeIdentities));
 //     }, [answerThreeIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeIdentities = [ 
        "Οι ρόλοι των φύλων έχουν τις ρίζες τους στη βιολογική ποικιλομορφία του ανθρώπου. Αν όλοι οι άνθρωποι είχαν βιολογικά το ίδιο φύλο, δε θα υπήρχαν ρόλοι.",
        "Οι ρόλοι έχουν πάντα να κάνουν με τον καταμερισμό της δύναμης. Οι ισχυροί αποκαλούνται «άρχοντες» και οι κατώτεροί τους «υπηρέτες». Το ίδιο ισχύει και με τα κοινωνικά φύλα.",
        "Δεν έχει σημασία από που προκύπτουν οι ρόλοι των φύλων. Αυτό που έχει σημασία είναι πώς να τους υπερβεί κανείς όταν είναι άδικοι. Το μόνο που χρειάζεται είναι καλή θέληση.",
        "Στο παρελθόν, οι ρόλοι των φύλων θεωρούνταν απόρροια της φύσης κάθε ανθρώπου. Σήμερα γνωρίζουμε περισσότερα. Για παράδειγμα, οι άνθρωποι έχουν μάθει να ξεχωρίζουν το «κοινωνικό» από το «βιολογικό» φύλο.  Από ιστορικής πλευράς επομένως, οι ρόλοι των φύλων δεν είναι τίποτα παραπάνω από ανθρωπολογικά λάθη.",
        "Ως «σωβινισμός» ορίζεται η πεποίθηση στην ανωτερότητα της ομάδας στην οποία ανήκουμε. Ας πάρουμε ως παραδείγματα το χρώμα του δέρματος, τη θρησκεία και το κοινωνικό φύλο. Οι κλασικοί ρόλοι των φύλων είναι μόνο οι εκδηλώσεις αυτού του σωβινισμού."
    ]
    const onOptionChange = e => {
        setAnswerThreeIdentities(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryGR/1stQuestionIdentitiesGR";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Από που προέρχονται οι ρόλοι των φύλων;
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeIdentities.map((possAnswThreeIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeIdentities}
            label={possAnswThreeIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeIdentities === answerThreeIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeIdentities} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Ευχαριστούμε! Απολαύστε την έκθεση!</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeIdentities

