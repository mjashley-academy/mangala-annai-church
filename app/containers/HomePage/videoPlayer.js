import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import VideoContainer from './videoContainer';
import './VideoPlayer.css';
/**
 *
 * Reference URL: https://www.npmjs.com/package/react-player
 */
export default function videoPlayer() {
  return (
    <Fragment>
    <VideoContainer/>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=SEYJDNJQ4KA"
        con="true"
        width="500px"
        height="350px"
       className='VideoPlayer'
      />
  </Fragment>
  );
}
