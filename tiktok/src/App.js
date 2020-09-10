import React from "react";
import Video from "./Video";
import "./App.css";
import stock from "./Hway.mp4";
function App() {
  return (
    <div className="app">
      <h1>Lets build tiktok</h1>

      <div className="app__videos">
        <Video
          url={stock}
          channel="@hereIsJulien"
          description="highway"
          song="99 problems - JayZ"
          VideoSidebar
          likes={123}
          shares={456}
          messages={789}
        />
        <Video
          url={stock}
          channel="@hereIsJulien"
          description="highway"
          song="99 problems - JayZ"
          VideoSidebar
          likes={13}
          shares={88}
          messages={7}
        />
      </div>
    </div>
  );
}

export default App;
