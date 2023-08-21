import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsIdentities/cred/myjson.json"

const QuestionTwoIdentities = () => {

    const [answerTwoIdentities, setAnswerTwoIdentities] = useState() 

    const currentCountryGR = "\"Austria\""
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
        "Nein. Ich kann mir das nicht vorstellen. Eine Geschlechterrolle ist ja nicht die Erfindung eines Dichters, sondern an das biologische Geschlecht geknüpft. Solange die Geschlechter biologisch unterschiedlich sind, solange wird es auch unterschiedliche Geschlechterrollen geben.",
        "Ich bin mir nicht sicher, ob ich das überhaupt begrüßen würde. Ich weiß unterschiedliche Geschlechterrollen sehr wohl zu schätzen. Das Problem mit Geschlechterrollen ist nicht ihre Existenz, sondern die Diskriminierung, die mit einer solchen Rolle einhergehen kann.",
        "Ja. Schlussendlich ist das Geschlecht nichts Natürliches, sondern bloß eine Erfindung der Menschheit. Wenn man eine Gesellschaft ohne Geschlechterrollen schaffen möchte, muss man einfach aufhören, dem Geschlecht zu viel Aufmerksamkeit zu schenken. Warum sollte das nicht möglich sein?",
        "Ich kann mir sogar eine zweigeteilte Gesellschaft vorstellen. In einem Teil der Gesellschaft wird es noch Geschlechterrollen geben. Für den anderen Teil sind sie von keiner Bedeutung mehr."
         ]
    const onOptionChange = e => {
        setAnswerTwoIdentities(e.target.value) 
    }

    const handleSubmitB = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/identities/inGalleryDE/3rdQuestionIdentitiesDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Geschlechterrollen gab es zu jeder Zeit und in allen Gesellschaften. Was meinen Sie: Ist in der Zukunft eine Gesellschaft ohne Geschlechterrollen möglich?
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
                <h1 style={{ color: "white" }}>Nächste Frage</h1>
                </Button>
            </div> 
        </Form>

</React.Fragment>
    )
  }
  
export default QuestionTwoIdentities

