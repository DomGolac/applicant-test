import logo from './logo.svg';
import './App.css';

import React from 'react';
import Style from 'style-it';

function App() {
  const [donerCount, setDonerCount] = React.useState(42);
  const [shortAmount, setShortAmount] = React.useState(167);
  const [donationAmount, setDonationAmount] = React.useState(50);

  const donationBarWidth = (500 - shortAmount) * 100 / 500;
  const barWidth = donationBarWidth > 100 ? 100 : donationBarWidth;

  const changeDonationAmount = (event) => {
    setDonationAmount(event.target.value);
  };

  const submitDonation = () => {
    setDonerCount(donerCount + 1);
    setShortAmount(shortAmount - donationAmount);
    setDonationAmount(50);
  };

  return (
    <div className="App">
      <Style>
        {`
          .donation-bar::after {
            background-color: #ef5f3c;
            bottom: 0;
            content: "";
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: ${barWidth}%;
          }
        `}
      </Style>
      <section className="Container">
        <div className="donation-header">
          <p>
            <b>${shortAmount > 0 ? shortAmount : 0}</b> still needed for this project
          </p>
        </div>
        <div className="donation-bar"></div>
        <div className="donation-body">
          <p>
            <span className="orange">
              <b>Only 3 days left</b>
            </span> to fund this project.
          </p>
          <p>Join the <b>{donerCount}</b> other doners who have already supported this project. Every dollar helps.</p>
          <div className="donation-inputs">
            <input
              className="donation-input"
              type="number"
              placeholder="50"
              min="0"
              value={donationAmount}
              onChange={changeDonationAmount}>
            </input>
            <button
              className="donation-submit"
              onClick={() => submitDonation()}
            >Give Now</button>
          </div>
          <p className="blue">
            <i>Why give <span>${donationAmount}</span>?</i>
          </p>
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
