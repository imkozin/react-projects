import './App.css';
import Card from './components/Card';
import data from './components/superheroes.json';
import { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedHeroes, setClickedHeroes] = useState([]);

  useEffect(() => {
    setHeroes(data.superheroes);
  }, []);

  const shuffleHeroes = () => {
    const shuffledHeroes = [...heroes];
    for (let i = shuffledHeroes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledHeroes[i], shuffledHeroes[j]] = [shuffledHeroes[j], shuffledHeroes[i]];
    }
    setHeroes(shuffledHeroes);
  };

  const handleClick = (e, heroId) => {
    e.preventDefault();
    const isClicked = clickedHeroes.includes(heroId); 
    if (isClicked) {
      setScore(0);
      setClickedHeroes([]); 
      shuffleHeroes();
    } else {
      setClickedHeroes((currentClickedHeroes) => [...currentClickedHeroes, heroId]); 
      setScore((currentScore) => {
        const newScore = currentScore + 1;
        if (newScore > topScore) {
          setTopScore(newScore);
        }
        return newScore;
      });
      shuffleHeroes();
    }
  };

  return (
    <div>
      <div className='nav'>
        <h2 className='f2 tl'>Superheroes Memory Game</h2>
        <p className='score tr f5'>Score: {score} Top Score: {topScore}</p>
        <h3>Get points by clicking on image but don't click on any more than once!</h3>
      </div>
      <div className='container'>
        <div className='card'>
          {heroes.map(hero => (
            <Card key={hero.id} name={hero.name} job={hero.occupation} image={hero.image} onClick={(e) => handleClick(e, hero.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
