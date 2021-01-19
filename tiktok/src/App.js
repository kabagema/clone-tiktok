import React, { useState, useEffect } from "react";
import Video from "./Video";
import "./App.css";
import stock from "./Hway.mp4";
import woman from "./Liberwoman.mp4";
import axios from "./axios";
function App() {
  const [Videos, SetVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      SetVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <h1>Lets build tiktok</h1>

      <div className="app__videos">
        {Videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              // VideoSidebar
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
        {/* <Video
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
          url={woman}
          channel="@hereIsJulien"
          description="Lady Liberty"
          song="Lady Liberty - Barbra Streisand"
          VideoSidebar
          likes={13}
          shares={88}
          messages={7}
        /> */}
      </div>
    </div>
  );
}

export default App;
