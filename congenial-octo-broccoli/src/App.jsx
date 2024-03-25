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
    /*temp comment*/
  } else if (props.emotion == "happy") {
    return (
      <div>
        <img src = "https://i.redd.it/9sdxuf12hq881.jpg"></img>
        <DefaultMessage m = {props.emotion}/>
        <ol>
          <li>Picnic in the Park: Gather some friends or family, pack some delicious food and drinks, and spend a sunny day lounging in a beautiful park. Play some outdoor games like Frisbee or soccer to add to the fun.</li>
          <li><br></br>Movie Marathon: Invite friends over for a movie marathon featuring your favorite feel-good films. Stock up on popcorn, snacks, and comfy blankets for a cozy and entertaining evening.</li>
          <li><br></br>Creative Arts and Crafts: Spend the day getting creative with arts and crafts. Whether it's painting, pottery, or DIY projects, tapping into your artistic side can be incredibly uplifting.</li>
          <li><br></br>Recreation: Indulge in activities that bring you joy and relaxation. Whether it's pursuing your favorite hobbies like gardening, cooking, or painting, or engaging in recreational sports such as swimming, tennis, or golf, take some time to do what makes you happy. Recreation allows you to unwind, recharge, and enhance your mental and physical well-being. So, go ahead, embrace your interests, and make time for leisurely pursuits—it's a rewarding way to improve your overall quality of life.</li>
        </ol>
      </div>
    )
  } else if (props.emotion == "sad") {
    return (
      <div>
        <img src = "https://live.staticflickr.com/5202/5278937898_54365ee481_b.jpg"></img>
        <DefaultMessage m = {props.emotion}/>
        <ol>
          <li>Journaling: Take some time to reflect on your feelings by journaling. Write down your thoughts, emotions, and hopes for the future. Expressing yourself on paper can be cathartic and help you process your sadness.</li>
          <li><br></br>Nature Walk: Take a solitary walk in nature, whether it's through a nearby park, forest, or along a beach. Immersing yourself in the beauty of the outdoors can provide solace and peace of mind.</li>
          <li><br></br>Comfort Food Cooking: Spend some time in the kitchen cooking up your favorite comfort foods. The process of cooking can be therapeutic, and indulging in delicious meals can provide temporary relief from sadness.</li>
          <li><br></br>Cuddle with Pets: Spend quality time with your pets if you have any. Their unconditional love and companionship can be incredibly comforting during difficult times.</li>
          <li><br></br>Reach Out to Loved Ones: Connect with friends or family members who are understanding and supportive. Whether it's through a heartfelt conversation or simply spending time together, being around loved ones can provide comfort and emotional support.</li>
        </ol>
      </div>
    )
  } else if (props.emotion == "angry") {
    return (
      <div>
        <img src = "https://preview.redd.it/fswqeebj6r971.jpg?width=1080&crop=smart&auto=webp&s=08ded3e055815c382edbfb93b9be994b99639cf6"></img>
        <DefaultMessage m = {props.emotion}/>
        <ol>
          <li>Exercise: Channel your anger into a workout session. Whether it's hitting the gym, going for a run, or practicing yoga, physical activity can help release pent-up tension and frustration.</li>
          <li><br></br>Punching Bag Session: Release your anger by hitting a punching bag or pillow. Letting out physical energy in a controlled environment can help dissipate feelings of anger and aggression.</li>
          <li><br></br>Listen to Music: Put on some music that matches your mood and allow yourself to fully experience and express your emotions through song lyrics and melodies.</li>
          <li><br></br>Write a Letter (But Don't Send It): Write a letter expressing your anger, frustration, and grievances. Pour out your feelings onto paper, but refrain from sending it. This exercise can help you release built-up emotions and gain clarity on the situation without causing harm to others.</li>
        </ol>
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
    moodCounter(selfD.value);
  }
  return (
    <div id = "returner">
      <div class = "vertical-left-gray-box"></div>
      <div class = "vertical-right-gray-box"></div>
      <h1>
        Self Analysis
      </h1>
        <div style={{ display: isVisible ? 'block' : 'none' }}>
        {/* Your content here */}
        
        
        {/*Input stuff here lol. This is gonna be the section for self diagnoses*/}
        <div class = "custom-dropdown">
          <select name = "dropdown" id = "selfForm" default = "Select an emotion">
            <option value = "" selected disabled hidden>Select an Emotion</option>
            <option value = "happy">Happy</option>
            <option value = "sad">Sad</option>
            <option value = "angry">Angry</option>
            <option value = "surprised">Surprised</option>
          </select>
          <br></br>
        </div>
        <button onClick={getDiagnosis}>Clickity clackity you're about to get attackity</button>
      </div>
      <div style={{ display: !isVisible ? 'block' : 'none' }}>
        {/* Your content here */}
        <SelfDiagnosis emotion = {mood}></SelfDiagnosis>
      </div>
      <div class = "tooltip">
        <button onClick={toggleVisibility} style = {{display: !isVisible ? 'block' : 'none'}} class = "small-button">{isVisible ? 'Show' : 'Return to Selection'}</button>
        <br></br>
        <p class = "tooltiptext">If you're feeling a different way, feel free to hit this button to return to the selection page!</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src = "https://media.tenor.com/yRSnf6wABQ4AAAAi/pato-duck.gif"></img> 
    </div>
  );
}
export default App;