import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';


function SelfDiagnosis () {
  
}



function NameTag(props) {
  return <div>
    <h1>Written by {props.name}</h1>
    <p>Thanks so much for writing this :D</p>
  </div>
}

function ListOfAuthors(props) {
  return <div>
    {props.authors.map((name) => <NameTag name={name} />)}
  </div>
}

function MyCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count+1);
  }
  function reset() {
    setCount(0);
  }
  return <div>
    <p>Total is {count}</p>
    <button onClick = {increment}>Increase value!</button>
    <button onClick = {reset}>Reset value</button>
  </div>
}

function InputBox () {
  const inputBox = useRef(null);
  function doSearch() {
    var query = inputBox.current.value;
    alert("Searching for " + query);
  }
  return <div>
    <input ref = {inputBox} placeholder='Search Bar' />
    <button onClick = {doSearch}>Search</button>
  </div>
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  function getDiagnosis () {
    var selfD = document.getElementById("selfForm");
    toggleVisibility();
    alert(selfD.value);
  }
  return (
    <div>
        <div style={{ display: isVisible ? 'block' : 'none' }}>
        {/* Your content here */}
        
        
        <NameTag name = "Bob Ross"/>
        <MyCounter />
        <InputBox />
        {/*Input stuff here lol. This is gonna be the section for self diagnoses*/}
        <div>
          <select name = "dropdown" id = "selfForm" default = "Select an emotion">
            <option value = "nada" selected disabled hidden>Select an Emotion</option>
            <option value = "happy">Happy</option>
            <option value = "sad">Sad</option>
            <option value = "angry">Angry</option>
            <option value = "surprised">Surprised</option>
          </select>
          <button onClick={getDiagnosis}>Clickity clackity you're about to get attackity</button>
        </div>
        
        <SelfDiagnosis />
      </div>
      <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );

}
export default App;