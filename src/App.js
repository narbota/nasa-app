import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import { CircularProgress } from '@mui/material';

function App() {
  // const [readMore, setReadMore] = useState(false);
  const [imageOfTheDay, setImageOfTheDay] = useState({});
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
      <h1 className="nasa-header">Picture of the day</h1>
      {imageOfTheDay ? (
        <Card sx={{ maxWidth: 700, objectFit: 'center' }}>
          <CardMedia
            component="img"
            alt="nasa image of the day"
            height="340"
            image={imageOfTheDay.hdurl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {imageOfTheDay.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {imageOfTheDay.explanation}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default App;
