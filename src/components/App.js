import React, { useEffect, useState } from "react";

function App() {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(d => {setImage(d.message)
        setLoaded(true)
        })        
    },[])

    return(
        <div>
        {loaded ? <img src={image} alt='A Random Dog'></img> : <p>Loading...</p>}
        </div>
    )   
}

export default App;