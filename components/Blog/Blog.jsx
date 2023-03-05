import React from 'react';

const Blog = () => {
  return (
    <section className="bg-white  text-secondary">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="/assets/blog.jpg"
              alt=""
            />

            <div>
              <p className="mt-6 text-sm text-orange-500 uppercase">
                Want to know
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 ">
                Construction Site Security Guide Line
              </h1>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-orange-500 font-semibold capitalize">
                Design instument
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                The Great Depression Building Design
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-orange-500 font-semibold capitalize">
                UI Resource
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Construction Site Security Information
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-orange-500 font-semibold capitalize">
                Premium Collection
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                The Great Depression Building Design
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-orange-500 font-semibold capitalize">
                Premium kits
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Building Design get on Blox's collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
