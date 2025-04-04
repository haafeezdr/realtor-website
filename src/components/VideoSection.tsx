import React from 'react';

const VideoSection = () => {
  return (
    <section className="w-full relative bg-black">
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <h2 className="text-white text-3xl font-semibold">Watch Our Story</h2>
      </div>
      
      <div className="relative w-full h-[70vh]">
        <video 
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
