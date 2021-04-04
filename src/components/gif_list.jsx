import React from "react";
import Gif from "./gif";

function GifList({ gifs, setSelectedGifIdFunction }) {
  const renderList = () => {
    return gifs.map(
      gifId => <Gif id={gifId} key={gifId} setSelectedGifIdFunction={setSelectedGifIdFunction} />
    );
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
}

export default GifList;
