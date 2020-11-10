import React, { memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './index.css';
import { IVideoConfig } from './schema';
import logo from '@/assets/14-视频.png';
// import Audio from '@/assets/audio'
const VideoPlayer = memo((props: IVideoConfig & { isTpl: boolean }) => {
  const { poster, url, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} alt=""></img>
        </div>
      ) : (
        <div>
          <Player
            playsInline
            poster={poster[0].url}
            src={url || 'https://gossv.vcg.com/cmsUploadVideo/creative/1移轴/7月移轴.mp4'}
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      )}
    </>
  );
});

export default VideoPlayer;
