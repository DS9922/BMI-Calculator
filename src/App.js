import React, {useState} from 'react';
import './index.css'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / ((height * height) / 10000))
      setBmi(bmi.toFixed(2))

      // Logic for message

      if (bmi < 18.00) {
        setMessage('Underweight')
      } else if (bmi >= 18.00 && bmi < 24.00) {
        setMessage('Healthy Weight')
      } else if (bmi >= 25.00 && bmi < 29.00) {
        setMessage('Overweight')
      } else if (bmi >= 30.00 && bmi < 39) {
        setMessage('Obese Weight')
      } else {
        setMessage('Extremely Obese Weight');
      }
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <p className='center h2'>BMI Calculator</p>
        <form onSubmit={calcBmi}>
          <div className='center'>
            <label>Height in cm:</label><br/>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div className='center'>
            <label>Weight in kg:</label><br/>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div className='center'>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
        <div className='center'>
          <h3>BMI = <mark>{bmi}</mark></h3>
          <p><mark>{message}</mark></p>
        </div>
      </div>
    </div>
  );
}

export default App;
