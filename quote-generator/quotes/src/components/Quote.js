import quotes from './quotesDatabase'
import './Quote.css'
import {useEffect, useState} from 'react';

const Quote = () => {
    console.log(quotes);
    const [quote, setQuote] = useState(quotes[0]);
    const [indx, setIndex] = useState(0);

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    const getRandomNumber = () => {
        return Math.floor(Math.random() * quotes.length)
    }

    const getRandomQuote = () => {
        let randomNum;
        do {
            randomNum = getRandomNumber();
        } while (randomNum === indx)

        setQuote(quotes[randomNum]); 
        setIndex(randomNum);
        console.log(quote.quote);
    }

    const randomColor = getRandomColor();

    return (
        <div style={{backgroundColor: randomColor}} className='container'>
            <div className='quote-block'>
                <h1 style={{color: randomColor}} className='quote'>"{quote.quote}"</h1>
                <h5 style={{color: randomColor}} className='author'>-{quote.author === '' ? 'Unknown' : quote.author}-</h5>
                <button style={{backgroundColor: randomColor}} onClick={getRandomQuote}>New quote</button>
            </div>
        </div>
    )
}

export default Quote;