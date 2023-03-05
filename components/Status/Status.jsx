import React from 'react';
import { FaHornbill } from 'react-icons/fa';

const Status = () => {
  const data = [
    {
      id: 1,
      title: 'Complete Projects ',
      value: '25K+',
      icon: <FaHornbill size={32} />,
    },
    {
      id: 2,
      title: 'Experience Team',
      value: '12K+',
      icon: <FaHornbill size={32} />,
    },
    {
      id: 3,
      title: 'Winning Awards ',
      value: '80+',
      icon: <FaHornbill size={32} />,
    },
    {
      id: 4,
      title: 'Active  Clients',
      value: '2K+',
      icon: <FaHornbill size={32} />,
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-32 px-3 lg:px-0">
      <div className="space-y-9">
        <div className="flex items-center space-x-1">
          <p className="w-7 h-1 bg-orange-500"></p>
          <p className="text-orange-500 font-bold">Our Services</p>
        </div>
        <h1 className="text-4xl font-bold text-secondary">
          We Are Building The Dream OF Our Customers
        </h1>
        <p className="text-gray-500 font-semibold">
          Globally engineer ubiquitous ROI whereas visionary web-readiness.
          Objectively matrix optimal e-markets vis-a-vis empowered leadership
          skills. Professionally leadership skills aggregate fully tested.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {data.map((d) => (
            <div
              key={d?.id}
              className="flex items-center justify-between shadow-lg ring-1 ring-gray-200 px-8 h-32 rounded-lg"
            >
              <div className="h-full pb-6">
                <p className="bg-orange-500 flex items-center justify-center  rounded-b-full text-white w-20 h-full">
                  <FaHornbill size={38} />
                </p>
              </div>
              <div>
                <h5 className="text-4xl font-bold text-orange-500">
                  {d.value}
                </h5>
                <p className="text-gray-500 font-semibold">{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ---------- */}

      <div className="pl-5">
        <img
          src="/assets/status.jpg"
          className="w-full h-full rounded-xl"
          alt=""
        />
      </div>
    </section>
  );
};

export default Status;
