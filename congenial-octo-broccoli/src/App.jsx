import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

function DefaultMessage (props) {
  return (
    <div>
      <h3>Thanks for your input!<br></br>If you're feeling {props.m}, here's some activities we suggest:</h3>
    </div>
  )
}
function SelfDiagnosis (props) {
  if (props.emotion == "") {
    return (
      <div>
        <DefaultMessage m = {props.emotion}/>
        <p>???</p>
      </div>
    )
  } else if (props.emotion == "happy") {
    return (
      <div>
        <DefaultMessage m = {props.emotion}/>
        <ol>
          <li>Picnic in the Park: Gather some friends or family, pack some delicious food and drinks, and spend a sunny day lounging in a beautiful park. Play some outdoor games like Frisbee or soccer to add to the fun.</li>
          <li>Movie Marathon: Invite friends over for a movie marathon featuring your favorite feel-good films. Stock up on popcorn, snacks, and comfy blankets for a cozy and entertaining evening.</li>
          <li>Creative Arts and Crafts: Spend the day getting creative with arts and crafts. Whether it's painting, pottery, or DIY projects, tapping into your artistic side can be incredibly uplifting.</li>
          <li>Recreation: Indulge in activities that bring you joy and relaxation. Whether it's pursuing your favorite hobbies like gardening, cooking, or painting, or engaging in recreational sports such as swimming, tennis, or golf, take some time to do what makes you happy. Recreation allows you to unwind, recharge, and enhance your mental and physical well-being. So, go ahead, embrace your interests, and make time for leisurely pursuits—it's a rewarding way to improve your overall quality of life.</li>
        </ol>
      </div>
    )
  } else if (props.emotion == "sad") {
    return (
      <div>
        <DefaultMessage m = {props.emotion}/>
        <p>D:</p>
      </div>
    )
  } else if (props.emotion == "angry") {
    return (
      <div>
        <DefaultMessage m = {props.emotion}/>
        <p>angery</p>
      </div>
    )
  } else if (props.emotion == "surprised") {
    return (
      <div>
        <p>:O</p>
      </div>
    )
  }
  return (
    <div>
      <p>{props.emotion}</p>
      <p>tester</p>
    </div>
  )
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
  const [mood, moodCounter] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  function getDiagnosis () {
    var selfD = document.getElementById("selfForm");
    if (selfD.value == "") {
      return;
    }
    toggleVisibility();
    alert(selfD.value);
    moodCounter(selfD.value);
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
            <option value = "" selected disabled hidden>Select an Emotion</option>
            <option value = "happy">Happy</option>
            <option value = "sad">Sad</option>
            <option value = "angry">Angry</option>
            <option value = "surprised">Surprised</option>
          </select>
          <button onClick={getDiagnosis}>Clickity clackity you're about to get attackity</button>
        </div>
      </div>
      <div style={{ display: !isVisible ? 'block' : 'none' }}>
        {/* Your content here */}
        <SelfDiagnosis emotion = {mood}></SelfDiagnosis>
        <p>ooga booga</p>
      </div>
      <button onClick={toggleVisibility} style = {{display: !isVisible ? 'block' : 'none'}}>{isVisible ? 'Show' : 'Hide'}</button>
    </div>
  );

}
export default App;