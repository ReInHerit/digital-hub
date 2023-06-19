import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionFourCraftmanship = () => {

    const [answerFourCraftmanship, setAnswerFourCraftmanship] = useState() 

    const currentCountryCY = "\"Austria\""
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourCraftmanship)
        const resultD = await sheetD.addRow({country: currentCountryCY, questionFour: valueD});
        return resultD;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
 
//    useEffect(() => {
//        localStorage.setItem('answerFourCraftmanship', JSON.stringify(answerFourCraftmanship));
//      }, [answerFourCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersFourCraftmanship = [
    "Ich weiß nicht, ob Wissen verloren geht. Es gibt ja noch Bücher oder das Internet, wo Wissen gespeichert und aufbewahrt wird. Aber das Können geht verloren, das stimmt.",
    "Das stimmt, aber das ist gut so. Manchmal wird mangelhaftes Wissen einfach durch besseres ersetzt. Wen interessiert es, wie ein Dieselmotor funktioniert, wenn es Autos mit besseren Motoren gibt, zum Beispiel Elektroautos?",
    "Es geht noch viel mehr verloren, etwa der angemessene und ganzheitliche Umgang mit der Natur und ihren Erzeugnissen. Wer Käse mit der Milch seiner eigenen Kühe herstellt, ist auf eine ganz andere Weise in die Natur eingebunden als der Konsument im Supermarkt, der eher einen chemischen Prozess oder einen 3D-Drucker in der Käseerzeugung vermutet.",
    "Vor allem gehen bedeutungsvolle Zusammenhänge verloren. Handarbeit bedeutet auch, die eigene Anstrengung bei der Produkterzeugung als sinnvoll zu erleben. Das Bedienen einer Maschine gibt keine solche Sinnhaftigkeit."
    ]
    const onOptionChange = e => {
        setAnswerFourCraftmanship(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryDE/CraftmanshipExhibitionMapDE";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Manche sagen, dass mit der traditionellen Handwerkskunst auch unersetzbares Wissen und Können verloren gehen. Stimmt das?
</h1>

        <Form onSubmit={handleSubmitD} >
            {AnswersFourCraftmanship.map((possAnswFourCraftmanship, index) => (
          <Form.Check
            type="radio"
            value={possAnswFourCraftmanship}
            label={possAnswFourCraftmanship}
            id={`answer-${index}`}
            key={`answer-${index}`}
            checked={possAnswFourCraftmanship === answerFourCraftmanship }
            onChange={onOptionChange}
            ></Form.Check>
        ))}
           <div className="exh_submit_button">
                <div className="exh_arrow_container">
            <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourCraftmanship} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Einreichen</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourCraftmanship

