import React, { Component } from "react";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // Todo: fetch list of gis with giphy api
  // const gifs = search();

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id="yFb5bKTItbB4dZ9xfd"/>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
