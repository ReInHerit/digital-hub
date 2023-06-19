import React, {useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "../questionsCraftmanship/cred/myjson.json"

const QuestionOneCraftmanship = () => {

 const [answerOneCraftmanship, setAnswerOneCraftmanship] = useState() 

 const currentCountryCY = "\"Austria\""
 const doc = new GoogleSpreadsheet(creds.sheet_id)

 const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetA = doc.sheetsById[538400691];

        const valueA = JSON.stringify(answerOneCraftmanship)
        const resultA = await sheetA.addRow({country: currentCountryCY, questionOne: valueA});
        return resultA;

    } catch (e) {
        console.error("Error: ", e);
        }
    }
    
//    useEffect(() => {
//        localStorage.setItem('answerOneCraftmanship', JSON.stringify(answerOneCraftmanship));
//      }, [answerOneCraftmanship]);

// these set the answer, once clicked, within the Form - the recorded value is stored as "answerOne"
    const AnswersOneCraftmanship = [
      "Das Günstigste.",
      "Das Beste, also das handgefertigte Möbelstück. Eine maschinelle Herstellung ist nie von so hoher Qualität wie Handwerkskunst.",
      "Das maschinengefertigte Möbelstück. Maschinen arbeiten präziser als Personen.",
      "Jenes mit dem geringsten ökologischen Fußabdruck. Das dürfte das Maschinengefertigte sein, denn wenn man die einzelnen dafür nötigen Einheiten betrachtet, braucht es vermutlich weniger Energie in der Herstellung.",
      "Jenes mit dem geringsten ökologischen Fußabdruck. Das dürfte das Handgefertigte sein. Die von einer Person aufgewendete Energie ist nachhaltig. Von Maschinen verbrauchte Energie ist oft nicht nachhaltig.",
      "Jenes, das länger hält. Das Handgefertigte.",
      "Das Handgefertigte. Mit meinem Kauf sorge ich dafür, dass der Handwerker seinen Lebensunterhalt bestreiten kann und unterstützte keinen geldgierigen Investor.",
      "Das ist mir egal. Sie sind ohnehin gleich."
    ]
    const onOptionChange = e => {
        setAnswerOneCraftmanship(e.target.value) 
    }

    const handleSubmitA = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryDE/3rdQuestionCraftmanshipDE/";
      };


      return (
        <React.Fragment>
          <h1 className="mt-5">
          Wenn Sie sich zwischen einem handgefertigten und dem gleichen, aber maschinell hergestellten Möbelstück entscheiden müssten, welches würden Sie wählen?          </h1>
          <Form onSubmit={handleSubmitA}>
            {AnswersOneCraftmanship.map((possAnswOneCraftmanship, index) => (
              <Form.Check
                type="radio"
                name="exh_questions"
                value={possAnswOneCraftmanship}
                label={possAnswOneCraftmanship}
                id={`answer-${index}`}
                key={`answer-${index}`}
                checked={possAnswOneCraftmanship === answerOneCraftmanship}
                onChange={onOptionChange}
              ></Form.Check>
            ))}
            <div className="exh_submit_button">
                <div className="exh_arrow_container">
                    <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
                </div>
                <Button className="exh_submit_btn" type="submit" disabled={!answerOneCraftmanship}  onClick={handleSubmitA} >
                <h1 style={{ color: "white" }}>Nächste Frage</h1>
                </Button>
            </div>  
        </Form>
</React.Fragment>
    )
  }

export default QuestionOneCraftmanship

