import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageOfTheDay, setImageOfTheDay] = useState(null);
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async function () {
    const response = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=bM30TTANz9awnER7GdlFv3cRyxitGwGKtAKb0Itg'
    );
    const imageOfTheDay = await response.json();
    console.log(imageOfTheDay);
    setImageOfTheDay(imageOfTheDay);
  };

  return (
    <div className="App">
      <h1>Picture of the day</h1>
      <h2>{imageOfTheDay.title}</h2>
      <p>{imageOfTheDay.explanation}</p>
      <img src={imageOfTheDay.hdurl} alt="" />
    </div>
  );
}

export default App;
