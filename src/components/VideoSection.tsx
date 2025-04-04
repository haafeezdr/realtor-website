import React from 'react';

const VideoSection = () => {
  return (
    <section className="w-full relative bg-black">
      
      <div className="relative w-full h-[90vh]">
        <video 
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/content1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
