import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Removecard, Addcard, Removeqnty } from "../action/Action";
import { ReactComponent as Empty } from "../image/empty.svg";

const CardDetails = () => {
  const cardInfo = useSelector((state) => state.cardReducers.card);

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const removeCard = (id) => {
    dispatch(Removecard(id));
  };

  const cardSubmit = (data) => {
    dispatch(Addcard(data));
  };

  const removeQanty = (e) => {
    dispatch(Removeqnty(e));
  };

  const total = () => {
    let price = 0;
    cardInfo.map((item) => {
      price = price + item.price * item.qnty;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      {cardInfo.length ? (
        <div>
          {cardInfo.map((item) => {
            return (
              <section
                key={item.id}
                className="text-gray-600 body-font overflow-hidden"
              >
                {/* {cardInfo.map((item) => {
        return ( */}
                <div className="container px-5 py-24 mx-auto">
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                      alt="ecommerce"
                      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                      src={item.imgdata}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        {item.address}
                      </h2>
                      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {item.rname}
                      </h1>
                      <div className="flex mb-4">
                        <span className="flex items-center">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <span className="text-gray-600 ml-3"> {item.rating}</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                          <a className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a className="text-gray-500">
                            <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                      <p className="leading-relaxed">
                        {item.somedata}
                        {/* Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    indxgo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean shorts keytar
                    banjo tattooed umami cardigan. */}
                      </p>
                      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                          <span className="mr-3">Color</span>
                          <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div className="flex ml-6 items-center">
                          {/* <span className="mr-3">Quantity: */}

                          <div className="custom-number-input h-10 w-32" />
                          <label
                            htmlFor="custom-input-number"
                            className="w-full text-gray-700 text-sm font-semibold"
                          >
                            Quantity:
                          </label>
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              onClick={
                                item.qnty <= 1
                                  ? () => removeCard(item.id)
                                  : () => removeQanty(item)
                              }
                              data-action="decrement"
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
                            >
                              <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            {/* <input
                              type="number"
                              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                              name="custom-input-number"
                              readOnly
                            >{item.qnty}</input> */}
                            <span className="w-10 pl-4 outline-none focus:outline-none text-center  bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none">
                              {item.qnty}
                            </span>
                            <button
                              onClick={() => cardSubmit(item)}
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
                            >
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>

                          {/* </span> */}
                          <div className="relative">
                            {/* <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select> */}
                            {/* <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                class="w-4 h-4"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          ${item.price}
                        </span>
                        <button
                          onClick={() => removeCard(item.id)}
                          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                          Remove Item
                        </button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
          {/* <div className="flex justify-center">
            <h1>Total:{price}</h1>
          </div> */}




<div>
      <div className="mt-4">
        <div className="py-4 rounded-md shadow">
          <h3 className="text-xl font-bold text-blue-600">Order Summary</h3>
          <div className="flex justify-between px-4">
            <span className="font-bold">Subtotal</span>
            <span className="font-bold">${price}</span>
          </div>
          <div className="flex justify-between px-4">
            <span className="font-bold">Discount</span>
            <span className="font-bold text-red-600">- $5.00</span>
          </div>
          <div className="flex justify-between px-4">
            <span className="font-bold">Sales Tax</span>
            <span className="font-bold">$2.25</span>
          </div>
          <div
            className="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              "
          >
            <span className="text-xl font-bold">Total</span>
            <span className="text-2xl font-bold">{price-5 +2.25}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button
          className="
              w-full
              py-2
              text-center text-white
              bg-blue-500
              rounded-md
              shadow
              hover:bg-blue-600
            "
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
        </div>
      ) : (
        <div>
          <h1 className="flex justify-center">Your Card is Empty</h1>
          <Empty className="h-80 ml-20" />
        </div>
      )}
     
    </>
  );
};

export default CardDetails;
