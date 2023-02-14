import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsConflict/cred/myjson.json"

const QuestionFourConflictDE = () => {

    const [answerFourConflictDE, setAnswerFourConflictDE] = useState() 

    const currentCountryDE = "\"Austria\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourConflictDE)
        const resultD = await sheetD.addRow({country: currentCountryDE, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourConflict', JSON.stringify(answerFourConflict));
//      }, [answerFourConflict]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourConflictDE = [
        "Im Prinzip ja. Oft will man lieber recht haben, als den anderen zu verstehen. Das Ende der Rechthaberei ist oft auch das Ende eines Konfliktes.",
        "Nein. Denn jedes Verstehen hat einmal ein Ende. Ich zum Beispiel kann nicht verstehen, wenn andere nicht verstehen, dass der Klimawandel die Menschheit bedroht. Da hört mein Verständnis auf.",
        "Diese Ansicht ist falsch. Ganz oft kann ich zwar die Haltung eines Menschen nachvollziehen und damit auch verstehen. Der Konflikt ist damit aber noch nicht gelöst. Denn oft teile ich einfach seine Haltung nicht und werde es auch nicht tun.",
        "Es kommt nicht darauf an, den anderen zu verstehen, sondern mit ihm auszukommen. Im Falle eines Konfliktes suche ich deshalb nach Lösungen, denen beide Parteien zustimmen können. Ergebnisse sind wichtiger als gegenseitiges Verständnis.",
        "Ja. Denn den anderen zu verstehen, eröffnet neue Sichtweisen und Wege, den Konflikt zu lösen.",
        "Nein. Es geht nicht um Verständnis, sondern um Interessen. Man muss sie nicht verstehen, sie sind einfach da."
    ]
    const onOptionChange = e => {
        setAnswerFourConflictDE(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/conflicts/inGalleryDE/ConflictExhibitionMapDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Viele Menschen meinen, Konflikte entstehen vor allem dadurch, dass man einander nicht versteht. Sind Sie auch dieser Ansicht?
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourConflictDE.map((possAnswFourConflictDE, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourConflictDE}
            label={possAnswFourConflictDE}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourConflictDE === answerFourConflictDE }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourConflictDE} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Einreichen & Ergebnisse anzeigen</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourConflictDE

