import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const Team = () => {
  const swiper = useSwiper();
  return (
    <section
      className="py-20"
      style={{ backgroundImage: "url('/assets/team_bg.png')" }}
    >
      {/* <p className="flex items-center justify-center border border-red-300 text-orange-500 font-bold text-center">
        <p className="w-7 h-1 bg-orange-500"></p>Our Team
      </p> */}
      <p className=" text-orange-500 text-sm font-bold text-center">
        TEAM MEMBERS
      </p>
      <h3 className="text-4xl font-bold text-center text-secondary">
        Our Professional Team
      </h3>

      <div className=" mt-28">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <button onClick={() => swiper?.slideNext()}>
            Slide to the next slide
          </button>{' '} */}
          <SwiperSlide>
            <div>
              <div className="">
                {' '}
                <img
                  src="/assets/team-1.jpg"
                  className="w-48 h-48 rounded-full border-8 border-white shadow-lg ring-1 ring-gray-100 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold text-secondary ">
                  John Legend
                </h4>
                <p className="text-orange-500 font-semibold">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div>
              <div className="">
                {' '}
                <img
                  src="/assets/team-2.jpg"
                  className="w-48 h-48 rounded-full border-8 border-white shadow-lg ring-1 ring-gray-100 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold text-secondary ">
                  John Legend
                </h4>
                <p className="text-orange-500 font-semibold">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div>
              <div className="">
                {' '}
                <img
                  src="/assets/team-5.jpg"
                  className="w-48 h-48 rounded-full border-8 border-white shadow-lg ring-1 ring-gray-100 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold text-secondary ">
                  John Legend
                </h4>
                <p className="text-orange-500 font-semibold">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div>
              <div className="">
                {' '}
                <img
                  src="/assets/team-4.jpg"
                  className="w-48 h-48 rounded-full border-8 border-white shadow-lg ring-1 ring-gray-100 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold text-secondary ">
                  John Legend
                </h4>
                <p className="text-orange-500 font-semibold">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div>
              <div className="">
                {' '}
                <img
                  src="/assets/team-3.jpg"
                  className="w-48 h-48 rounded-full border-8 border-white shadow-lg ring-1 ring-gray-100 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold text-secondary ">
                  John Legend
                </h4>
                <p className="text-orange-500 font-semibold">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
