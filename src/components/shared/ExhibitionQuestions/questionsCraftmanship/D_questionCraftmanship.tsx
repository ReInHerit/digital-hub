import React, {useState, useEffect} from "react"
import { Button, Form } from "react-bootstrap"
import {GoogleSpreadsheet} from "google-spreadsheet"
import creds from "./cred/myjson.json"

const QuestionFourCraftmanship = () => {

    const [answerFourCraftmanship, setAnswerFourCraftmanship] = useState() 

    const currentCountryD = typeof window !== 'undefined' ? localStorage.getItem('countryCraftmanship') : null
    const doc = new GoogleSpreadsheet(creds.sheet_id)

    const appendSpreadsheet = async () => {
    try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        const sheetD = doc.sheetsById[678756205];

        const valueD = JSON.stringify(answerFourCraftmanship)
        const resultD = await sheetD.addRow({country: currentCountryD, questionFour: valueD});
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
        "I do not know if knowledge will get lost. After all, there are still books or the Internet in which knowledge is stored and preserved. But the skills are lost, that is true.",
        "That is true, but it is a good thing. Sometimes worse knowledge is simply replaced with better. Who cares how a diesel engine works when there are cars with better engines, such as electric cars?",
        "Much more is lost, namely the adequate and holistic treatment of nature and its products. Everyone who produces cheese from the milk of their own cows is integrated into nature in a completely different way than the customer in the supermarket, who tends to suspect a chemical process or a 3D printer behind the cheese.",
        "Above all, contexts of meaning are lost. Doing manual work also means experiencing one’s own activity in the manufacture of products as meaningful. Operating a machine does not provide such a meaning."
    ]
    const onOptionChange = e => {
        setAnswerFourCraftmanship(e.target.value) 
    }

    const handleSubmitD = async (e) => {
        e.preventDefault();
        await appendSpreadsheet();
        window.location.href = "exhibitions/craftmanship/CraftmanshipExhibitionMap";
      };

return (
<React.Fragment>

<h1 className="mt-5">
Some say that when traditional crafts die out, much irreplaceable knowledge and skill would also be lost. Is that correct?
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
            <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
            </div>
            <Button className="exh_submit_btn" 
            type="submit" disabled={!answerFourCraftmanship} onClick={handleSubmitD} >
             <h1 style={{ color: "white" }}>Submit & Show Result</h1>
            </Button>
         </div>        
         </Form>

   
</React.Fragment>
    )
  }

export default QuestionFourCraftmanship

