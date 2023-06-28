import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionOneCraftmanship = () => {

 const [answerOneCraftmanship, setAnswerOneCraftmanship] = useState() 

 const currentCountryCY = "\"Greece\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneCraftmanship)
        const resultA = await sheetA.addRow({country: currentCountryCY, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneCraftmanship', JSON.stringify(answerOneCraftmanship));
//      }, [answerOneCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneCraftmanship = [
      "Το φθηνότερο.",
      "Το καλύτερο, δηλαδή το χειροποίητο έπιπλο. Η μηχανική παραγωγή δεν φτάνει ποτέ την ποιότητα της χειροτεχνίας.",
      "Το έπιπλο που κατασκευάστηκε από μηχανή. Σε σύγκριση με τους ανθρώπους, οι μηχανές εργάζονται με μεγαλύτερη ακρίβεια.",
      "Εκείνο που έχει το μικρότερο οικολογικό αποτύπωμα. Νομίζω ότι είναι αυτό που φτιάχνεται από μηχανή. γιατί αν το μετρήσετε πιθανόν να χρειάζεται λιγότερη ενέργεια για να φτιαχτεί.",
      "Αυτό που έχει το μικρότερο οικολογικό αποτύπωμα. Νομίζω ότι αυτό είναι το χειροποίητο. Η ενέργεια που βάζει ο άνθρωπος σε κάτι είναι βιώσιμη. Πολύ συχνά η ενέργεια που χρησιμοποιούν οι  μηχανές είναι δεν είναι βιώσιμη.",
      "Ό,τι διαρκεί περισσότερο. Οπότε το χειροποίητο.",
      "Tο χειροποίητο. Με την αγορά μου, εξασφαλίζω το προς το ζήν του τεχνίτη και εξασφαλίζω ότι δεν θα θα δώσω τα λεφτά μου σε ένα επενδυτή  που διψάει για χρήμα.",
      "Δεν με νοιάζει. Έτσι κι αλλιώς είναι το ίδιο."
    ]
    const onOptionChange = e => {
        setAnswerOneCraftmanship(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryCY/3rdQuestionCraftmanshipCY";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          Αν είχατε τη δυνατότητα να επιλέξετε ανάμεσα σε ένα χειροποίητο έπιπλο και το ίδιο έπιπλο που κατασκευάζεται από μηχανή, ποιο θα επιλέγατε;
          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneCraftmanship.map((possAnswOneCraftmanship, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneCraftmanship}
                label={possAnswOneCraftmanship}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneCraftmanship === answerOneCraftmanship}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneCraftmanship}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Επόμενη ερώτηση</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneCraftmanship

