import React, {useRef, useState} from 'react'
import './Video.css'


import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'
function Video({ url, likes, shares, messages, channel, description, song }) {
    const[playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    
    const handleVideoPress = () =>
    {
        // if video is playing stop it...
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            // otherwise if its not  playing
            // play it 
            videoRef.current.play();
            setPlaying(true);
            
        }         
    };
      
    return (
        <div className ='video'>
            <video 
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef} 
                src={url}
            >
            </video>

           
            <VideoFooter channel={channel} description={description}song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            {/* videoSidebar */}
        </div>
    )
}
export default Video