import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cardsdata from "./CardData";
import Trust from "./Trust";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Addcard } from "../action/Action";
import Skelton from "./Skelton";

const Home = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const [copydata, setcopyData] = useState([]);

  const changeData = (e) => {
    let getchangeData = e.toLowerCase();

    if (getchangeData == "") {
      setcopyData(data);
    } else {
      let storeData = copydata.filter((ele) => {
        return ele.rname.toLowerCase().match(getchangeData);
      });
      setcopyData(storeData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setcopyData(Cardsdata);
    }, 3000);
  }, []);

  const cardSubmit = (e) => {
    dispatch(Addcard(e));
  };
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ggg"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <Link to="/product">
                <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  Get started
                </a>
              </Link>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="container ml-6 mt-10">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) => changeData(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Products...."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </>
      <div className="container flex flex-row flex-wrap ml-6">
        {copydata.length ? (
          <div className="container flex flex-row flex-wrap ml-6">
            {copydata.map((item) => {
              return (
                // <div class="container px-5 py-24 mx-auto">
                <div key={item.id} class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100 p-6 rounded-lg">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={item.imgdata}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.address}
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.rname}
                    </h2>
                    <p class="leading-relaxed text-base">${item.price}</p>
                    <p class="leading-relaxed text-base">
                      <p className="flex flex-row">
                        {" "}
                        <FcRating className="mt-1 mr-2" />
                        {item.rating}
                      </p>
                    </p>
                    <button
                      onClick={() => cardSubmit(item)}
                      className="inline-flex items-center justify-center h-10 px-2 mr-6 mt-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                // </div>
              );
            })}
          </div>
        ) : (
          <>
          <div className="flex flex-row  flex-wrap">
            {data.map((item) => {
              return(
              <div className=" flex flex-col m-8 rounded shadow-md w-60 sm:w-50 animate-pulse h-50">
                <div className="h-48 rounded-t bg-slate-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-slate-300">
                  <div className="w-full h-6 rounded bg-slate-300"></div>
                  <div className="w-full h-6 rounded bg-slate-300"></div>
                  <div className="w-3/4 h-6 rounded bg-slate-300"></div>
                </div>
              </div>
              )
            })}
            </div>
          </>
        )}
      </div>
      <Trust />
    </>
  );
};

export default Home;
