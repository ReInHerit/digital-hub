import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionOneConflictDE = () => {

 const [answerOneConflictDE, setAnswerOneConflictDE] = useState() 

 const currentCountryDE = "\"Austria\""
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
      "Nein. Eine solche Welt ist nicht möglich. Ob man will oder nicht: Gewalt ist immer eine Lösung. Sie wird auch immer eine Lösung bleiben. So einfach ist das.",
      "In einer Welt ohne Waffen ist der Revolver-Besitzer König. Das sagt jedenfalls die moderne Evolutionsbiologie. Wer die Möglichkeit hat, Gewalt einzusetzen wird das auch irgendwann tun.",
      "Wer hungert oder verhungert, der greift schneller zu Gewalt. Denn wer nichts zu verlieren hat, für den ist Gewalt immer eine Option. Gerade weil er nichts mehr zu verlieren hat. Umgekehrt heißt das auch: Wer sich eine Welt ohne Konflikte wünscht, muss möglicherweise auch die Umverteilung von Wohlstand oder Ressourcen in Kauf nehmen.",
      "Gewalt ist für mich niemals die erste Option. Wenn aber andere zu Gewalt greifen, würde ich mich verteidigen – notfalls auch mit Gewalt.",
      "Ich sehe nicht, warum eine Welt ohne Gewalt nicht möglich sein sollte. Es gibt immer eine Alternative zu Gewalt. Wer eingesehen hat, dass Gewalt immer nur Gegengewalt erzeugt, für den ist Gewaltverzicht der einzige Weg zur Besserung."
    ]
    const onOptionChange = e => {
        setAnswerOneConflictDE(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryDE/2ndQuestionConflictDE/#Question2ConflDE";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          „Gewalt ist keine Lösung“ – das sagen viele Menschen, wenn es um Konflikte geht. Sie wünschen sich eine Welt, in der Konflikte ohne Gewalt gelöst werden. Was meinen Sie: Kann eine solche Welt Wirklichkeit werden oder bleibt sie ein Wunschtraum?
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
                <h1 style={{ color: "white" }}>Nächste Frage</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneConflictDE

