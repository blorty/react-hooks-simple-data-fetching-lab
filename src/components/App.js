// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [DogImage, setDogImage] = useState(null);

    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDogImage(data.message);
        });
    }, []);

    // if the data hasn't been loaded, show a loading indicator
    if (!DogImage) return <p>Loading...</p>;

    return (
    <div>
      <img src={DogImage}alt="A Random Dog" />;
    </div>
    )
}

export default App