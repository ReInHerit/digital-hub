import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionThreeIdentities = () => {

    const [answerThreeIdentities, setAnswerThreeIdentities] = useState() 

    const currentCountryGR = "\"Austria\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeIdentities)
        const resultC = await sheetC.addRow({country: currentCountryGR, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeIdentities', JSON.stringify(answerThreeIdentities));
 //     }, [answerThreeIdentities]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeIdentities = [ 
    "Geschlechterrollen sind in der menschlichen biologischen Vielfalt verwurzelt. Wenn alle Menschen biologisch das gleiche Geschlecht hätten, würden die Rollen nicht existieren.",
    "Rollen handeln immer von Machtverhältnissen. Die Mächtigen nennt man „Herren“ und die Untergebenen „Diener“. Mit den Geschlechtern ist es gleich.",
    "Woher Geschlechterrollen stammen, spielt keine Rolle. Was zählt ist, dass sie überwunden werden, wenn sie ungerecht sind. Alles, was es braucht, ist guter Wille.",
    "In der Vergangenheit wurden Geschlechterrollen als natürlich angesehen. Heutzutage wissen wir es besser. Zum Beispiel haben die Menschen gelernt, zwischen dem „biologischen“ und dem „sozialen“ Geschlecht zu unterscheiden. Aus historischer Sicht sind Geschlechterrollen also nichts weiter als ein anthropologischer Irrtum.",
    "Den Glauben an die Überlegenheit der eigenen Gruppe bezeichnet man als „Chauvinismus“. Beispiele dafür gibt es genügend, wie Hautfarbe, Religion oder eben das Geschlecht. Die typischen Geschlechterrollen machen diesen Chauvinismus lediglich sichtbar."
    ]
    const onOptionChange = e => {
        setAnswerThreeIdentities(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryDE/1stQuestionIdentitiesDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Woher stammen Geschlechterrollen? 
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeIdentities.map((possAnswThreeIdentities, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeIdentities}
            label={possAnswThreeIdentities}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeIdentities === answerThreeIdentities }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeIdentities} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Danke & viel Vergnügen!</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeIdentities

