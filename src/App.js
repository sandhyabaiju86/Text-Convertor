import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
function App() {
  return (
    <>
      <Navbar  title="Versatile" aboutText="About Versa"/>
      <div className="container">
      <TextForm heading = "Enter the text for analysing"/>
      </div>
        {/* <div className="container">
          <About />
        </div> */}

    </>
    
  );
}

export default App;
