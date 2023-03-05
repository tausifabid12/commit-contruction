import React from 'react';

const GetInTouch = () => {
  return (
    <section
      style={{ backgroundImage: "url('/assets/cta_bg_1.jpg')" }}
      className="py-20 lg: px-3 lg:px-24 mb-40"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-white ">
          Have Any Question For Project Plan In Your Mind?
        </h2>
        <button className="px-3 py-2 mt-5 lg:mt-0 bg-white text-orange-500 font-semibold">
          Get InTouch
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
