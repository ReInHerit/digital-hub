import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionThreeCraftmanship = () => {

    const [answerThreeCraftmanship, setAnswerThreeCraftmanship] = useState() 

    const currentCountryCY = "\"Cyprus\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeCraftmanship)
        const resultC = await sheetC.addRow({country: currentCountryCY, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeCraftmanship', JSON.stringify(answerThreeCraftmanship));
 //     }, [answerThreeCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeCraftmanship = [ 
        "Όχι. Σε παλαιότερες εποχές οι άνθρωποι συνήθιζαν να πιστεύουν ότι το ανθρώπινο μυαλό δεν θα νικηθεί ποτέ από μια μηχανή. Στο σκάκι για παράδειγμα. Κανείς δεν μιλάει πια γι' αυτό. Το ίδιο θα συμβεί και με το τα χειροποίητα προϊόντα.",
        "Ναι. Ένα χειροποίητο προϊόν είναι πάντα μοναδικό. Αλλά η μηχανική κατασκευή δεν προσφέρει ποτέ μοναδικά προϊόντα. Είναι πάντα το ένα σαν το άλλο.",
        "Ναι. Επειδή υπάρχουν επίπεδα ποιότητας που είναι ανέφικτα για τις μηχανές. Παράδειγμα: το χειροποίητο επιστόμιο ενός σαξοφώνου. Απλά κανένα μηχανοποιημένο επιστόμιο δεν μπορεί να φτάσει ποιότητα ήχου ενός τέτοιου επιστόμιου.",
        "Νομίζω ότι οι διαφορές θα είναι τόσο μικρές που κανείς δεν θα τις παρατηρεί πια.",
        "Τα χειροποίητα προϊόντα απαιτούν πνεύμα, τα μηχανικά προϊόντα μόνο ενέργεια. Στο ενδιάμεσο υπάρχει ένα ανυπέρβλητο χάσμα.",
        "Ίσως τα μηχανικά προϊόντα να μην είναι πραγματικά ποτέ τόσο καλά όσο τα χειροποίητα. Αλλά σε ποσότητα είναι καλύτερα."
    ]
    const onOptionChange = e => {
        setAnswerThreeCraftmanship(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryCY/1stQuestionCraftmanshipCY";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Υπάρχουν προϊόντα χειροτεχνίας που δεν μπορούν ποτέ να κατασκευαστούν από μηχανή; Εσείς τι πιστεύετε;
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeCraftmanship.map((possAnswThreeCraftmanship, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeCraftmanship}
            label={possAnswThreeCraftmanship}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeCraftmanship === answerThreeCraftmanship }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeCraftmanship} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Ευχαριστώ και απολαύστε την έκθεση!</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeCraftmanship

