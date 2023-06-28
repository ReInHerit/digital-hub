import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionFourCraftmanship = () => {

    const [answerFourCraftmanship, setAnswerFourCraftmanship] = useState() 

    const currentCountryCY = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourCraftmanship)
        const resultD = await sheetD.addRow({country: currentCountryCY, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourCraftmanship', JSON.stringify(answerFourCraftmanship));
//      }, [answerFourCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourCraftmanship = [
        "Δεν ξέρω αν η γνώση θα χαθεί. Εξάλλου, υπάρχουν ακόμη βιβλία ή το Διαδίκτυο όπου η γνώση αποθηκεύεται και διατηρείται. Αλλά οι δεξιότητες χάνονται, αυτό είναι αλήθεια.",
        "Αυτό είναι αλήθεια, αλλά είναι καλό πράγμα. Μερικές φορές οι χειρότερες γνώσεις απλά αντικαθίστανται με καλύτερες. Ποιος νοιάζεται για το πώς λειτουργεί ένας κινητήρας ντίζελ, όταν υπάρχουν αυτοκίνητα με καλύτερους κινητήρες, όπως τα ηλεκτρικά αυτοκίνητα;",
        "Χάνονται πολύ περισσότερα, δηλαδή η επαρκής και ολιστική αντιμετώπιση της φύσης και των προϊόντων της. Ο καθένας που παράγει τυρί από το γάλα των δικών του αγελάδων είναι ενταγμένος στην φύση με εντελώς διαφορετικό τρόπο από τον πελάτη στο σούπερ μάρκετ, ο οποίος τείνει να να υποψιάζεται μια χημική διαδικασία πίσω από την παραγωγή του τυριού.",
        "Πάνω απ' όλα, χάνονται τα συμφραζόμενα του νοήματος. Το να κάνει κανείς χειρωνακτική εργασία σημαίνει επίσης ότι βιώνει την εμπειρία του, τη δική του δραστηριότητα στην κατασκευή προϊόντων ως ουσιαστική. Ο χειρισμός μιας μηχανής δεν παρέχει ένα τέτοιο νόημα."
    ]
    const onOptionChange = e => {
        setAnswerFourCraftmanship(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryCY/CraftmanshipExhibitionMapCY";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Ορισμένοι λένε ότι όταν οι παραδοσιακές τέχνες εκλείψουν, θα χαθούν επίσης πολλές αναντικατάστατες γνώσεις και δεξιότητες. Είναι σωστό αυτό;
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourCraftmanship.map((possAnswFourCraftmanship, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourCraftmanship}
            label={possAnswFourCraftmanship}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourCraftmanship === answerFourCraftmanship }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourCraftmanship} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Υποβολή και εμφάνιση αποτελέσματος</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourCraftmanship

