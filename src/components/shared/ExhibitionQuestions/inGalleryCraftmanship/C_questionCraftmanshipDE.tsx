import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionThreeCraftmanship = () => {

    const [answerThreeCraftmanship, setAnswerThreeCraftmanship] = useState() 

    const currentCountryCY = "\"Austria\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetC = doc.sheetsById[1939633244];

        const valueC = JSON.stringify(answerThreeCraftmanship)
        const resultC = await sheetC.addRow({country: currentCountryCY, questionThree: valueC});
        return resultC;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
  
 //   useEffect(() => {
 //       localStorage.setItem('answerThreeCraftmanship', JSON.stringify(answerThreeCraftmanship));
 //     }, [answerThreeCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerThree"
    const AnswersThreeCraftmanship = [ 
    "Nein. Früher dachten die Menschen, dass das menschliche Gehirn nie von Maschinen übertroffen werden kann. Zum Beispiel im Schachspiel. Davon spricht keiner mehr. Mit handgefertigten Waren wird es dasselbe sein.",
    "Ja. Ein handgefertigtes Produkt ist immer einzigartig, während maschinelle Herstellung niemals einzigartige Produkte erzeugt. Eines ist gleich wie das andere.",
    "Ja, weil manche Qualitätsstufen nicht von Maschinen erreicht werden können. Ein Beispiel: Das handgefertigte Mundstück eines Saxophons. Ein maschinell hergestelltes Mundstück kann nie die Klangqualität eines handgefertigten erreichen.",
    "Ich glaube, dass die Unterschiede so gering sind, dass niemand sie bemerken wird.",
    "Kunsthandwerk braucht Geist und Hingabe, mechanisch erzeugte Produkte brauchen lediglich Energie. Zwischen beiden besteht eine unüberwindbare Kluft.",
    "Womöglich werden maschinengefertigte Produkte nie so gut sein wie handgefertigte. Aber gemessen an der Menge sind sie besser."      
    ]
    const onOptionChange = e => {
        setAnswerThreeCraftmanship(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryDE/1stQuestionCraftmanshipDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Gibt es handwerkliche Produkte, die niemals von einer Maschine hergestellt werden können? Was meinen Sie?
</h1>

        <Form onSubmit={handleSubmitC} >
            {AnswersThreeCraftmanship.map((possAnswThreeCraftmanship, index) => (
          <Form.Check
            type="radio"
            value={possAnswThreeCraftmanship}
            label={possAnswThreeCraftmanship}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswThreeCraftmanship === answerThreeCraftmanship }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
            <div className="exh_submit_button">
                    <div className="exh_arrow_container">
                    <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
            </div>
                    <Button className="exh_submit_btn" 
                    type="submit" disabled={!answerThreeCraftmanship} onClick={handleSubmitC} >
                    <h1 style={{ color: "white" }}>Danke & viel Vergnügen!</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeCraftmanship

