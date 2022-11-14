import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const url ='http://localhost:8080/fizz-buzz?number='+name;
      fetch(url)
        .then(function(response) {
          return response.text();
        }).then(function(data) {
          console.log(data); // this will be a string
          setMessage(data)
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
<div className ="center">
<h1>The Fizz Buzz Game</h1>

    <div className="App">


      <form onSubmit={handleSubmit}>
      <table>
      <tr>
      <h2>Enter any number</h2>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </td>
       <td>
        <button type="submit">Play</button>
        </td>
        </tr>
        <div>
        <tr>
        <h2> The result is </h2>
<td></td>
        <td>
        {message ? <p>{message}</p> : null}

        </td>
        </tr>

        </div>
        </table>
      </form>
    </div>
</div>
  );
}

export default App;
