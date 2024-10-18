import React, { useState } from 'react';
import axios from 'axios'; 
import './App.css'
import girl from './girl.jpeg';
function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer]=useState("")

  async function generateAnswer() {
    console.log("loading...")
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBHSy6r81MvG_15nVla7ZlMn-TVmuSthg4",
        method: "post", 
        data: {
          "contents": [
            {
              "parts": [
                { "text": question }
              ]
            }
          ]
        }
      });
      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']); 
  }

  return (
    <div className="container">
      <p>Chat with me!</p>
      <h3>I am Avanti and I am here to help you with all your problems!</h3>
      <img src={girl} alt="Logo" style={{ width: '290px', display: 'block', margin: '0 auto' }} />      <textarea className="textarea" value={question} onChange={(e)=>setquestion(e.target.value)}rows="5" cols="30"></textarea>
      <button onClick={generateAnswer}>Generate answer</button> 
      <pre className="answer">{answer}</pre>
    </div>
  );
}

export default App;