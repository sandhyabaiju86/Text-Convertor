import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case" ,"success");
    }


    const handleLoClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case" ,"success");
    }


    const handleCaClick = () => {
        
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Capitalized the first letter." ,"success");
    }
    const handleInClick = () => {
        
        let newText = '';
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];

        }
        setText(newText);
        props.showAlert("Inversed the given text." ,"success");
    }
    const handleDowClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("downloaded the text you entered." ,"success");



    }
    const handleCpyClick = () => {
        
        let newText = document.getElementById("myBox"); /* Get the text field */
        newText.select();   /* Select the text field */
       /* Copy the text inside the text field */
        navigator.clipboard.writeText(newText.value);
        // setText(newText);
        //alert("Copied the text: " + newText.value)/* Alert the copied text */
        props.showAlert("Copied the text you entered","success");
    }

    const handleReClick = () => {
        
        let newText = "";
        setText(newText);
    }





    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-3' style={{color: props.textColor==='light'?'black':'white'}}>

                <h1>{props.heading}</h1>
                <div className="form-group my-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode === 'dark'? 'white': 'grey',color: props.textColor==='light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={handleCaClick}>Capitalize</button>
                <button className="btn btn-success mx-1" onClick={handleInClick}>Inverse Text</button>
                <button className="btn btn-success mx-1" onClick={handleDowClick}>Download Text</button>
                <button className="btn btn-success mx-1" onClick={handleCpyClick}>Copy To Clipboard</button>
                <button className="btn btn-success mx-1" onClick={handleReClick}>Reset</button>
            </div>
            <div className="container my-5" style={{color: props.textColor==='light'?'black':'white'}}>
                <h2>Text Summery</h2>
                <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>{.008 * text.split(" ").length} Minutes to read. </p>
                <h2>Preview</h2>
                <p>{text.length>0 ?text:"Enter something in the text box above to preview here"}</p>
            </div>
        </>

    );
}
