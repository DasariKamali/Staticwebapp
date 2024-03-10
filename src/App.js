import React, {useState} from 'react';
import GoalList from './components/GoalList';
import Header from './components/Header';
import logo from './logo2.svg';
import './App.css';

const ShowGoals = () => {
  const [showGoals, setShowGoals] = React.useState(false);
  const onClick = () => setShowGoals(true);
  return(
    <div>
        <input type="submit" value="Goals" onClick={onClick}></input>
        {showGoals ? <Goals /> : null}
    </div>
  );
}

const Goals = () => (
  <div id="goals">
          <Header />
        <GoalList />
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <body>
        <p className='smaller'>
          Hello, My name is Doug Dexter and I am looking for my next opportunity as a web developer.
          <hr />
          I am currently learning full-stack development 
          using React and ASP.Net Core API.
          <hr />
          This website is written in React.
          <hr />
          <ShowGoals />
        </p>

  

        </body>
      </header>
    </div>
  );
}

export default App;
