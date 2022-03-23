import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="Container">
        <div className="donation-header">
          <p><b>$167</b> still needed for this project</p>
        </div>
        <div className="donation-bar"></div>
        <div className="donation-body">
          <p><span className="orange"><b>Only 3 days left</b></span> to fund this project.</p>
          <p>Join the <b>42</b> other doners who have already supported this project. Every dollar helps.</p>
          <div className="donation-inputs">
            <input className="donation-input" type="number"></input>
            <button className="donation-submit">Give Now</button>
          </div>
          <p className="blue"><i>Why give <span>$50</span>?</i></p>
        </div>
        <div className="donation-buttons">
          <button><b>Save for later</b></button>
          <button><b>Tell your friends</b></button>
        </div>
      </section>
    </div>
  );
}

export default App;
