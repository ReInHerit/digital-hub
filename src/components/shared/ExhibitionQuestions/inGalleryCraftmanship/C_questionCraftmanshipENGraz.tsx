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
        "No. In earlier times people used to think that the human mind will never be defeated by a machine. In chess for example. Nobody talks about that anymore. It will be the same with handcrafted products.",
        "Yes. A handcrafted product is always unique. But machine manufacturing never delivers unique items. It’s always one like the other.",
        "Yes. Because there are quality levels that are unattainable for machines. Example: the handmade mouthpiece of a saxophone. Simply no machine-made mouthpiece can match the sound quality of a handmade mouthpiece.",
        "I think the differences will be so small that no one will notice them anymore.",
        "Artisan products require spirit, and mechanical products require only energy. There is an insurmountable gulf between them.",
        "Perhaps machine-made products will never really be as good as handcrafted ones at the top. But in quantity, they are better."          
    ]
    const onOptionChange = e => {
        setAnswerThreeCraftmanship(e.target.value) 
    }
    
    const handleSubmitC = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "/exhibitions/craftmanship/inGalleryENGraz/1stQuestionCraftmanshipENGraz";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Are there products of craftsmanship that can never be made by a machine? What do you think?
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
                    <h1 style={{ color: "white" }}>Thanks and enjoy the exhibition!</h1>
                    </Button>
            </div>        
        </Form>

   
</React.Fragment>
    )
  }

export default QuestionThreeCraftmanship

