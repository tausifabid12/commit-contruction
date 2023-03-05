import React from 'react';

const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-0">
      <div className="w-full h-full flex items-center justify-center">
        <div className="space-y-7">
          <div className="flex items-center space-x-1">
            <p className="w-7 h-1 bg-orange-500"></p>
            <p className="text-orange-500 font-bold">Our Services</p>
          </div>
          <h1 className="text-secondary text-3xl lg:text-5xl font-bold">
            We're providing the best customer
            <span className="text-orange-500"> service</span>
          </h1>
          <p className="text-gray-500 font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            explicabo voluptatibus quis dignissimos nam illum porro magnam rerum
            cupiditate facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <button className="px-8 py-3 bg-secondary mt-5 text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* --------- */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-14">
        <div className="space-y-7 ">
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-orange-500 shadow-lg">
            <p className="text-orange-500 text-sm font-bold">Explore Service</p>
            <h5 className="text-secondary font-bold text-2xl">
              Petroleum & Gas Refinery
            </h5>
            <button className="text-secondary font-bold">read more</button>
          </div>
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-orange-500 shadow-lg">
            <p className="text-orange-500 text-sm font-bold">Explore Service</p>
            <h5 className="text-secondary font-bold text-2xl">
              Design and Build
            </h5>
            <button className="text-secondary font-bold">read more</button>
          </div>
        </div>
        <div className="space-y-7 pt-8">
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-orange-500 shadow-lg">
            <p className="text-orange-500 text-sm font-bold">Explore Service</p>
            <h5 className="text-secondary font-bold text-2xl">
              Construction Manager
            </h5>
            <button className="text-secondary font-bold">read more</button>
          </div>
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-orange-500 shadow-lg">
            <p className="text-orange-500 text-sm font-bold">Explore Service</p>
            <h5 className="text-secondary font-bold text-2xl">
              On Time & On Budget
            </h5>
            <button className="text-secondary font-bold">read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
