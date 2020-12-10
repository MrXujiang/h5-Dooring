import React, { memo } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styles from './index.less';
import { IAudioConfig } from './schema';
import logo from '@/assets/music@2x.png';

const AudioPlayer = memo((props: IAudioConfig & { isTpl: boolean }) => {
  const { height, url, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} style={{ width: '100%' }} alt="h5-dooring音频播放组件"></img>
        </div>
      ) : (
        <div className={styles.audioWrap}>
          <ReactAudioPlayer
            src={url}
            autoPlay={false}
            controls
            style={{
              width: '100%',
              height: height + 'px',
            }}
          />
        </div>
      )}
    </>
  );
});

export default AudioPlayer;
