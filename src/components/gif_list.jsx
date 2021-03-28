import React from "react";
import Gif from "./gif";

function GifList(props) {
  const renderList = () => {
    return props.gifs.map(
      gifId => <Gif id={gifId} key={gifId} setSelectedGifIdFunction={props.setSelectedGifIdFunction} />
    );
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
}

export default GifList;
