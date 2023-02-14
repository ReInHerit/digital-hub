import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionThreeConflictDE = () => {

    const [answerThreeConflictDE, setAnswerThreeConflictDE] = useState() 

    const currentCountryDE = "Austria"
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeConflictDE)
        const resultC = await sheetC.addRow({country: currentCountryDE, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeConflict', JSON.stringify(answerThreeConflict));
 //     }, [answerThreeConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeConflictDE = [ 
        "Zugegeben, kein Staat kann in jeder Hinsicht perfekt oder konfliktfrei sein. In einer Demokratie aber gibt es immer Wege, Konflikte ohne Gewalt zu lösen. Jede*r kann sich politisch engagieren oder den Rechtsweg einschlagen.",
        "Jedes gesellschaftliche System braucht viel zu lange, um auf gesellschaftliche Konflikte zu reagieren. Wer darauf wartet, dass das eigene Land etwas Wirksames gegen soziale Ungleichheit unternimmt, der wartet am Ende zu lange.",
        "Kein System, auch das beste, kann jemals vollkommen gerecht sein. Das liegt in der Natur der Systeme. Damit müssen wir uns abfinden.",
        "Strukturelle Gewalt ist immer abstrakt. Zur tatsächlichen Gewalt wird sie erst durch die Menschen, die Teil des Systems sind und davon profitieren. Der wirksamste Hebel gegen strukturelle Gewalt ist deshalb der aktive Widerstand gegen jene, die sie durchsetzen.",
        "Frauenfeindlichkeit oder Rassismus sind nicht nur eingebaut in gesellschaftliche Systeme, sondern findet in den Köpfen der Bevölkerung statt. Es kommt deshalb weniger darauf an, das System zu verändern, sondern die Haltung der Menschen."
        ]
    const onOptionChange = e => {
        setAnswerThreeConflictDE(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/conflicts/inGalleryDE/1stQuestionConflictDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Manchmal werden Konflikte nicht von Einzelpersonen verursacht, sondern weil sie eingebaut sind in das gesellschaftliche System, in dem wir leben. Man spricht dann von „struktureller Gewalt“. Wie sollen wir mit dieser strukturellen Gewalt umgehen?
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeConflictDE.map((possAnswThreeConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeConflictDE}
            label={possAnswThreeConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeConflictDE === answerThreeConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeConflictDE} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Danke & viel Vergnügen!</h1>
                    </Button>
            </div>        
        </Form>


</React.Fragment>
    )
  }

export default QuestionThreeConflictDE

