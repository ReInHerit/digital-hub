import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionTwoIdentities = () => {

    const [answerTwoIdentities, setAnswerTwoIdentities] = useState() 

    const currentCountryGR = "\"Greece\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)


    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetB = doc.sheetsById[713196235];

        const valueB = JSON.stringify(answerTwoIdentities)
        const resultB = await sheetB.addRow({country: currentCountryGR, questionTwo: valueB});
        return resultB;

    } catch (e) {
        console.error("Error: ", e);
        }
    }

 //   useEffect(() => {
 //       localStorage.setItem('answerTwoIdentities', JSON.stringify(answerTwoIdentities));
 //     }, [answerTwoIdentities]);
    

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersTwoIdentities = [
       "Όχι. Δεν μπορώ να το φανταστώ αυτό. Οι ρόλοι των φύλων δεν αποτελούν εφεύρεση ενός ποιητή, αλλά συνδέονται με το βιολογικό φύλο. Όσο τα φύλα διαφέρουν βιολογικά, θα υπάρχουν και διαφορετικοί ρόλοι φύλων.", 
        "Δεν είμαι σίγουρος αν μπορώ να εκφέρω άποψη για κάτι τέτοιο. Είμαι ανοιχτός σε διαφορετικούς ρόλους φύλων. Αλλά το πρόβλημα με τους ρόλους φύλων δεν είναι η ύπαρξή τους. Το πρόβλημα είναι οι διακρίσεις που μπορεί να σχετίζονται με έναν τέτοιο ρόλο.",
        "Ναι. Εξάλλου, το κοινωνικό φύλο δεν είναι κάτι φυσικό παρά μόνο μια ανθρώπινη εφεύρεση. Αν θέλουμε να χτίσουμε μια κοινωνία χωρίς ρόλους φύλων, πρέπει απλά να σταματήσουμε να δίνουμε τόση προσοχή στο κοινωνικό φύλο. Γιατί να μην εφικτό κάτι τέτοιο;",
        "Μπορώ ακόμη και να φανταστώ μια κοινωνία χωρισμένη στα δυο. Στο ένα μέρος της κοινωνίας θα υπάρχουν ακόμη οι ρόλοι των φύλων. Στο άλλο μέρος της κοινωνίας, απλώς δεν θα υπάρχουν."
    ]
    const onOptionChange = e => {
        setAnswerTwoIdentities(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryGR/3rdQuestionIdentitiesGR";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Οι ρόλοι των φύλων υπήρχαν σε όλες τις εποχές και σε κάθε κοινωνία. Τι πιστεύετε: μια κοινωνία χωρίς τους ρόλους των φύλων θα είναι εφικτή στο μέλλον; 
</h1>

        <Form onSubmit={handleSubmitB} >
            {AnswersTwoIdentities.map((possAnswTwoIdentities, index) => (
          <Form.Check
            type="radio" name="exh_questions"
            value={possAnswTwoIdentities}
            label={possAnswTwoIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswTwoIdentities === answerTwoIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
                <Button className="exh_submit_btn" 
                type="submit" disabled={!answerTwoIdentities} onClick={handleSubmitB} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoIdentities

