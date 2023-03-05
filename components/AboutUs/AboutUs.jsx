import React from 'react';
import { FaAward, FaDharmachakra } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-3 lg:px-0">
      <div>
        <img src="/assets/about.png" alt="" />
      </div>
      <div className="space-y-9">
        <div className="space-y-7 px-7">
          <div className="flex items-center space-x-1">
            <p className="w-7 h-1 bg-orange-500"></p>
            <p className="text-orange-500 font-bold">About Us</p>
          </div>
          <h1 className="text-secondary text-3xl lg:text-5xl font-bold">
            We Are A Leader In The{' '}
            <span className="text-orange-500">Construction </span>
            Sector
          </h1>
          <p className="text-gray-500 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            explicabo voluptatibus quis dignissimos nam illum porro magnam rerum
            cupiditate facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        {/* -------- */}
        <div className="flex flex-col lg:flex-row space-y-4  px-5">
          <div className="flex items-center justify-center space-x-2">
            <span className="bg-orange-100 rounded-xl p-3 text-orange-500">
              <FaAward size={35} />
            </span>
            <h5 className="text-secondary font-bold text-lg">
              Certified & Award Winner
            </h5>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="bg-orange-100 rounded-xl p-3 text-orange-500">
              <FaDharmachakra size={35} />
            </span>
            <h5 className="text-secondary font-bold text-lg">
              Highly Expart & Qualified Staff
            </h5>
          </div>
        </div>
        {/* ---------- */}
        <div className="px-7 py-4 bg-gray-100 text-gray-600 mx-5 rounded-xl font-semibold border-l-2 border-orange-500">
          <p>
            Dramatically facilitate global bandwidth whereas backward-compatible
            communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
