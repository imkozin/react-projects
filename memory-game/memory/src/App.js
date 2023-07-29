import './App.css';
import Card from './components/Card';
import data from './components/superheroes.json';
import { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState([]);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    setHeroes(data.superheroes);
  }, []);

  const shuffleHeroes = () => {
    for (let i = heroes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [heroes[i], heroes[j]] = [heroes[j], heroes[i]];
    }
    setHeroes([...heroes]);
  };

  const checkClick = (hero) => {
    const isClicked = click.some((clickedHero) => clickedHero.id === hero.id);
    console.log('isClicked:', isClicked);
    if (isClicked) {
      setScore(0);
      setTopScore((currentTopScore) => {
        if (score > currentTopScore) {
          return score;
        }
        return currentTopScore;
      });
      setClick([]);
      console.log('Click array reset:', click);
      return true;
    } else {
      setClick((current) => [...current, hero]);
      console.log('Updated Click array:', [...click, hero]);
      return false;
    }
  };

  const handleClick = (e, hero) => {
    e.preventDefault();
    console.log('Clicked Hero:', hero);
    if (!checkClick(hero)) {
      setScore(currentScore => {
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
            <Card key={hero.id} name={hero.name} job={hero.occupation} image={hero.image} onClick={(e) => handleClick(e, hero)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
