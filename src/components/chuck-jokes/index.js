import React, { useState, useEffect }  from 'react'

const ChuckJokes = () => {
    const [joke, setJoke] = useState();
     
    const fetchJoke = async () => {
        let response = await fetch('https://api.chucknorris.io/jokes/random')
        let res = await response.json()
        setJoke(res.value)
    }

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="chuckJokes">
            <h1>{joke}</h1>
            <button onClick={fetchJoke}>Click me</button>
        </div>
    )  
}

export default ChuckJokes