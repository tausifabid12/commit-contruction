import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-full pt-14 lg:pt-0">
      <div className="w-full lg:w-[45%] h-full  flex  items-center  justify-center px-8">
        <div>
          <h1 className="text-secondary text-3xl lg:text-5xl font-bold">
            Committed To <span className="text-orange-500">Superior</span>{' '}
            Quality And Results
          </h1>
          <p className="text-gray-500 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            soluta consequatur modi repudiandae, eaque aliquam, nulla impedit
            error ut dolorem voluptate ea dolores ab
          </p>
          <button className="px-8 py-3 bg-orange-500 mt-5 text-white font-semibold">
            Join Now
          </button>
        </div>
      </div>
      <div className="w-[55%] py-24 pl-16 hidden lg:block">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          className="w-full h-full rounded-tl-[200px]"
        />
      </div>
    </section>
  );
};

export default Hero;
