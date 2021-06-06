import React from "react";
import { Link } from "react-router-dom";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex justify-center md:justify-end md:mt-5 md:mr-5">
        <button
          className="bg-yellow-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Change Location
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-4/5 md:w-1/5 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 px-8 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">Select Location</h3>
                </div>
                {/*body*/}
                <div className="relative px-8 py-2 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Bangalore"}>Bangalore</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/New Delhi"}>New Delhi</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Chandigarh"}>Chandigarh</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Jaipur"}>Jaipur</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Chennai"}>Chennai</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Hyderabad"}>Hyderabad</Link>
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <Link to={"/restaurants/Kolkata"}>Kolkata</Link>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
