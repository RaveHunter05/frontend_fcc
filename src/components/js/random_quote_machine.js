import React, {useState} from 'react';
import './random.css'

function Machine(){
    const [numero,setNumero]=useState(1);
    const [exampleState, setExampleState] = useState([
        {
            1:"Confucius",
            2:"Rumi",
            3:"Johann Wolfgang von Goethe",
            4:"J.M. Barrie",
            5:"Chinese Proverb",
            6:"Lao Tzu",
            7:"Edith Wharton",
            8:"Ralph Waldo Emerson",
            9:"Lao Tzu",
            10:"Babe Ruth"
        },
        {
            1:"The past cannot be changed. The future is yet in your power.",
            2:"You were born with wings, why prefer to crawl through life?",
            3:"Knowing is not enough; we must apply. Wishing is not enough; we must do.",
            4:"We are all failures. At least the best of us are.",
            5:"All things are difficult before they are easy.",
            6:"An ant on the move does more than a dozing ox.",
            7:"There are two ways of spreading light: to be the candle or the mirror that reflects it.",
            8:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
            9:"A good traveler has no fixed plans and is not intent on arriving.",
            10:"Every strike brings me closer to the next home run."

        }
    ]);
    function random_number(){
        let random=Math.round(Math.random()*10);
        setNumero(random);
    };

    return(
        <div className="body"> 
            <div id="quote-box">
    <h2 id="text" className="frase">"{exampleState[1][numero]}"</h2>
                <p id="author" className="autor">-{exampleState[0][numero]}</p>
                <div className="footer">
                    <button 
                        id="new-quote"
                        onClick={random_number}   
                    >
                            New quote
                    </button>
                    <div className="twitter2">
                        <a id="tweet-quote" href="twitter.com/intent/tweet" className="twitter">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Machine;