import React,{useState} from "react";
import Formsuccess from "./Formsuccess";
import Form from "./Form";

const Table = () => {
    const [fromIsSubmitted, setFromIsSubmitted] = useState(false);

    const  submitForm = () => {
        setFromIsSubmitted(true);
    };
    return(
        
        <div>
         {!fromIsSubmitted ? ( <Form submitForm={submitForm}/> ):(<Formsuccess/>)}
        </div>
    )
}
export default Table;