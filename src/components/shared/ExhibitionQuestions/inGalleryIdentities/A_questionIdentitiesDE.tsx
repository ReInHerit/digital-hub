import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionOneIdentities = () => {

 const [answerOneIdentities, setAnswerOneIdentities] = useState() 

 const currentCountryGR = "\"Austria\""
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
      "Ja, ich stimme zu. Rechte sind immer an Rollen geknüpft. Wer keine Rolle annimmt, wird daher ohne Rechte außen vor gelassen, von der Staatsbürgerschaft bis zum Geschlecht.",
      "Jede*r, der*die so spricht, setzt stillschweigend voraus, dass man Rollen frei wählen kann. Allerdings werden Rollen nicht gewählt, sondern einem von der Gesellschaft auferlegt. Das betrifft auch die Freiheiten, die mit einer Rolle in Verbindung stehen. Welchen Nutzen hat die größte Freiheit, wenn es nicht jene Freiheit ist, die ich haben möchte? – Keinen.",
      "Das ist nicht die ganze Geschichte, denn die Freiheiten, die man nicht erhält, sind bei Weitem umfassender als die Freiheiten, die man bekommt. Wer also eine Rolle annimmt, für den schließt sich die Tür zu anderen und damit auch zu anderen Privilegien. Eine Rolle anzunehmen ist also immer ein Minusgeschäft.",
      "Ich bevorzuge es, über mein Leben nicht in Bezug auf soziale Rollen nachzudenken. Ich bin einfach ich und ich möchte auch einfach nur das sein. Eine Rolle anzunehmen bedeutet für mich immer „fake“ zu sein und mich verstellen zu müssen."
            ]
    const onOptionChange = e => {
        setAnswerOneIdentities(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryDE/2ndQuestionIdentitiesDE";
      };

      return (
        <React.Fragment>
          <h1 className="mt-5">
          „Rollen, so auch Geschlechterrollen, sind stets mit bestimmten Privilegien verbunden. Nur wer eine Rolle annimmt, kann auch die damit verbundenen Privilegien genießen. Daher vergrößert die Annahme jeglicher Rolle das Ausmaß der persönlichen Freiheit.“ – 
          <br /> Stimmen Sie dieser Aussage zu? 
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
                <h1 style={{ color: "white" }}>Nächste Frage</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneIdentities

