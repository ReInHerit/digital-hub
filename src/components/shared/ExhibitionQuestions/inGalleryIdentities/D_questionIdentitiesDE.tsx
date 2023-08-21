import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionFourIdentities = () => {

    const [answerFourIdentities, setAnswerFourIdentities] = useState() 

    const currentCountryGR = "\"Austria\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourIdentities)
        const resultD = await sheetD.addRow({country: currentCountryGR, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourIdentities', JSON.stringify(answerFourIdentities));
//      }, [answerFourIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourIdentities = [
        "Für mich ist es sehr wichtig zu wissen, welchem sozialen Geschlecht ich angehöre. Ich bin ein Teil dieses Geschlechts und kann es nicht wie meinen Internetanbieter wechseln.",
        "Meiner Meinung nach wird der Debatte um Identität zu viel Aufmerksamkeit geschenkt. Es ist nicht wichtig, ob ich eine Identität von jeglicher Art habe. Das Einzige, was zählt, ist meine eigene Zufriedenheit.",
        "Für mich spielt die Frage nach der Identität keine Rolle. Ich weiß nicht einmal, wer ich bin. Und wenn ich es wüsste, was hätte ich davon?",
        "Ich lehne die Frage nach meiner Identität ab. Das setzt ja die Annahme voraus, dass da etwas in mir wäre, das sich nie verändern würde – meine Natur, auch mein sexuelles Sein. Aber das trifft auf mich nicht zu. Für mich kommt die Suche nach meiner Identität der Suche nach einem Gespenst gleich.",
        "Die Welt, in der wir leben, wird noch immer von Geschlechterrollen beherrscht. Daher interessiere ich mich auch für diese Thematik. Allerdings hoffe ich, dass die Zuordnung zu einem Geschlecht für zukünftige Generationen keine Rolle mehr spielen wird."
    ]
    const onOptionChange = e => {
        setAnswerFourIdentities(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryDE/IdentitiesExhibitionMapDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
„Identität“ bedeutet, die Antwort auf die Frage zu kennen, wer man eigentlich ist. Daher bedeutet „Geschlechtsidentität“, die Antwort auf die Frage zu kennen, welchem sozialen Geschlecht man angehört. Wie wichtig ist für Sie die Antwort auf diese Frage?
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourIdentities.map((possAnswFourIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourIdentities}
            label={possAnswFourIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourIdentities === answerFourIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourIdentities} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Einreichen</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourIdentities

