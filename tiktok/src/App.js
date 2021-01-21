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
      <div className="app__videos">
        {Videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              VideoSidebar
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;


// <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@lubalin/video/6919191846782569734" data-video-id="6919191846782569734" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@lubalin" href="https://www.tiktok.com/@lubalin">@lubalin</a> <p>please help! 🍞 <a title="butter" target="_blank" href="https://www.tiktok.com/tag/butter">#butter</a> <a title="nextdoor" target="_blank" href="https://www.tiktok.com/tag/nextdoor">#nextdoor</a> <a title="sodramatic" target="_blank" href="https://www.tiktok.com/tag/sodramatic">#sodramatic</a> <a title="humor" target="_blank" href="https://www.tiktok.com/tag/humor">#humor</a> <a title="musician" target="_blank" href="https://www.tiktok.com/tag/musician">#musician</a> <a title="producer" target="_blank" href="https://www.tiktok.com/tag/producer">#producer</a> <a title="thsnks" target="_blank" href="https://www.tiktok.com/tag/thsnks">#thsnks</a></p> <a target="_blank" title="♬ original sound - Lubalin" href="https://www.tiktok.com/music/original-sound-6919191863190637318">♬ original sound - Lubalin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>



// {/* <video authorid="6734771760917496837" src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/d9da44ca894140a2b0efdffba852e471/?a=1988&amp;br=2328&amp;bt=1164&amp;cd=0%7C0%7C1&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;expire=1611276848&amp;l=202101211853180101902192114B003C6B&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;pl=0&amp;policy=2&amp;qs=0&amp;rc=MzxybDhxaXh4MzMzZDczM0ApNzhnNTYzaDwzN2dlaWU7aWdnNGBmay9rXy9gLS01MTZzczEuYjE0MDZiYS5eNl80YDQ6Yw%3D%3D&amp;signature=5deebad3db39c1ab712673d20233b8e4&amp;tk=tt_webid_v2&amp;vl=&amp;vr=" webkit-playsinline="true" showingvideoindex="-1" playsinline="" loop="" ratiowidth="calc(0.56 * (400px + (100vw - 768px) / 1152 * 100))" ratioheight="calc(400px + (100vw - 768px) / 1152 * 100)" musicinfomaxwidth="250.56" likes="" preload="metadata" class="jsx-3900254205 video-player" style="width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));"></video> */}



// https://v16m.tiktokcdn.com/00f8150467034acf33c0036f54dc624a/5f497764/video/tos/useast2a/tos-useast2a-pve-0068/5c92cd711b4c4d11a0f7560389ff3514/?a=1233&br=2200&bt=1100&cr=0&cs=0&dr=0&ds=3&er=&l=2020082815291201019018913720166B55&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzg8NjY0a2RodTMzPDczM0ApaTY8MzdnOWVlN2k4ZzVmOWdwcWdqLW5mNWNfLS0xMTZzc2AzNS0vMS41MDYwMWBhM2A6Yw%3D%3D&vl=&vr=" ref={videoRef} onClick={onVideoPress}></video> 
// JavaScript
