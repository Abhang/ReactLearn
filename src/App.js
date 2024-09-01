import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.abha.ng"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Abhang
        </a>
        <br></br>
        <span> Hello</span>
        <h4 className="abhang">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas voluptas maiores consectetur distinctio dicta numquam pariatur reiciendis, ea nostrum neque rem, aliquid hic minus, odit quod. Enim, laborum veniam!</h4>
      </header> */}
      <Navbar title="Abhang" />
      <div className="container">
        <TextForm heading = "Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
