import React from "react";

function Gif(props) {
  const { id } = props;

  const handleClick = () => {
    props.setSelectedGifIdFunction(id);
  };

  const src = `https://media2.giphy.com/media/${id}/200.gif`;
  return (
    <img src={src} alt="" className="gif" key={id} onClick={handleClick} />
  );
}

export default Gif;
