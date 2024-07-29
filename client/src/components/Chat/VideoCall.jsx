// VideoCall.jsx
import React from 'react';
import QRCode from 'qrcode.react';

const VideoCall = ({ videoCallLink }) => {
  return (
    <div>
      <h2>Join the Video Call</h2>
      <a href={videoCallLink} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-primary">Join Call</button>
      </a>
      <div className="mt-4">
        <QRCode value={videoCallLink} size={256} />
        <p>Scan this QR code to join the call</p>
      </div>
    </div>
  );
};

export default VideoCall;
