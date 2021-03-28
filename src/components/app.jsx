import React, { useState } from "react";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

const GIPHY_API_KEY = "pn4hVI8k4BmJWPVSJGw3BUjIUc6oJ8TN";

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [selectedGifId, setSelectedGifId] = useState("yFb5bKTItbB4dZ9xfd");

  const handleInput = (e) => {
    const query = e.target.value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    fetch(url).then(response => response.json()).then((data) => {
      setGifs(data.data.map(gif => gif.id));
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar getGifsFunction={handleInput} />
        <Gif id={selectedGifId} />
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} setSelectedGifIdFunction={setSelectedGifId} />
      </div>
    </div>
  );
}
