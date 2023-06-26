import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamPhotoClicker = () => {
  const webcamRef = useRef(null);
  const [photoData, setPhotoData] = useState(null);

  const capturePhoto = useCallback(() => {
    const photo = webcamRef.current.getScreenshot();
    setPhotoData(photo);
  }, []);

  return (
    <div className='mx-4 text-center flex flex-col items-center'>
    <div className='flex'>
        <div className='w-[90%]'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={700}
        height={700}
      />
      </div>
      <div>
      {photoData && <img src={photoData} alt="Captured" className='w-25'/>}
      </div>
      </div>
      <div>
      <button className='m-3 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm' onClick={capturePhoto}>Capture Photo</button>
      </div>
    </div>
  );
};

export default WebcamPhotoClicker;