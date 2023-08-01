import './App.css';
import Card from './components/Card';
import data from './components/superheroes.json';
import { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState(data.superheroes);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleHeroes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setHeroes((prevList) => shuffleHeroes(prevList)); // Shuffle the heroesList after the click event has been processed
  }, [currentScore, highScore]);

  const handleClick = (heroId) => {
    const heroIndex = heroes.findIndex((hero) => hero.id = heroId);
    const updatedHeroes = [...heroes];
    if (heroIndex !== -1) {
      if (!heroes[heroIndex].clicked) {
        // The hero is not clicked before
        updatedHeroes[heroIndex].clicked = true;
        setCurrentScore((prevScore) => prevScore + 1);
      } else {
        // The hero is already clicked, reset the game
        setHeroes((prevList) => prevList.map((hero) => ({ ...hero, clicked: false })));
        setCurrentScore(0);
      }
    }
  };
  console.log(heroes);

  return (
    <div>
      <div className='nav'>
        <h2 className='f2 tl'>Superheroes Memory Game</h2>
        <p className='score tr f5'>Score: {currentScore} Top Score: {highScore}</p>
        <h3>Get points by clicking on image but don't click on any more than once!</h3>
      </div>
      <div className='container'>
        <div className='card'>
          {heroes.map(hero => (
            <Card key={hero.id} name={hero.name} job={hero.occupation} image={hero.image} onClick={() => handleClick(hero.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
