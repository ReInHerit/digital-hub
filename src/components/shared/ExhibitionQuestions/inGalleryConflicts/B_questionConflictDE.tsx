import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionTwoConflictDE = () => {

    const [answerTwoConflictDE, setAnswerTwoConflictDE] = useState() 

    const currentCountryDE = "Austria"
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
        "Nein. Widerstand kann etwas sehr Gutes sein und wird manchmal sogar zur Pflicht. Oftmals muss man sogar das verteidigen, was einem wichtig ist. Dann habe ich nicht nur das Recht, sondern auch die Pflicht, mich zu wehren.",
        "Ich weiß nicht, ob es böse ist, wenn man sich wehrt. Aber ich für meinen Teil verabscheue jede Form der Gewalt. Deshalb würde ich mich im Zweifelsfall nicht wehren.",
        "Wer meint, es sei böse, sich beispielsweise für seine Freiheit einzusetzen, der setzt Unterdrücker und Opfer moralisch gleich. Das aber ist falsch. Ein Täter steht moralisch niemals auf derselben Stufe wie ein Opfer. Also ist es nicht böse, sich zu wehren.",
        "Wer sich wehrt, der erzeugt mit seiner Gewalt Gegengewalt. Das führt zu einer Gewaltspirale. Deshalb ist es vielleicht nicht unbedingt böse sich zu wehren, aber unklug.",
        "Stellen Sie sich vor, ihr Elternhaus wird plötzlich unrechtmäßig besetzt. Was sollte Sie daran hindern, sich dagegen zu wehren? Nichts. Oder?"
       ]
    const onOptionChange = e => {
        setAnswerTwoConflictDE(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/conflicts/inGalleryDE/3rdQuestionConflictDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Ist es böse, wenn man sich wehrt? 
</h1>

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
                <h1 style={{ color: "white" }}>Nächste Frage</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoConflictDE

