import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('dark');
  const [textColor, settextColor] = useState('light')
  const [btntext, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warining')
  }
  
  const toggleMode = ()=>{
    removeBodyClasses();
    //document.body.classList.add('bg-'+ cls)
    if (mode==='dark') {
      setMode ('light');
      settextColor('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enables", "success")
      document.title =" TextUtils | Dark Mode";
    }
    else{
      setMode('dark');
      settextColor('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("Light mode has been enables", "success")
      document.title =" TextUtils | Light Mode";
    }
  }
  return (
    <>
      <Navbar  title="TextUtils" mode={mode} textColor={textColor} toggleMode ={toggleMode} btntext={btntext}  />
      <Alert  alert={alert}/>
      <div className="container">
      <TextForm showAlert = {showAlert} heading = "Enter the text for analysing" textColor={textColor}/>
      </div>
        {/* <div className="container">
          <About />
        </div> */}

    </>
    
  );
}

export default App;
