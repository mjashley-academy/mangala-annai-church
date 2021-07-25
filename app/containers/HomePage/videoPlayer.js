import React from 'react';
import ReactPlayer from 'react-player';
import VideoContainer, { VideoRightPanel } from './videoContainer';

/**
 *
 * Reference URL: https://www.npmjs.com/package/react-player
 */
export default function videoPlayer() {
  return (
    <VideoContainer>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=SEYJDNJQ4KA"
        playing="true"
        width="950px"
        height="500px"
      />
      <VideoRightPanel>dfgdfg dfg useDebugV</VideoRightPanel>
    </VideoContainer>
  );
}
