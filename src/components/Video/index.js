import { memo } from 'react'
import { Player, BigPlayButton } from 'video-react'
import './index.css'

const VideoPlayer = memo((props) => {
  const { 
    poster,
    url
  } = props
  return <div>
            <Player playsInline poster={poster[0].url} src={url || 'https://gossv.vcg.com/cmsUploadVideo/creative/1移轴/7月移轴.mp4'}>
              <BigPlayButton position="center" />
            </Player>
         </div>
})

export default VideoPlayer