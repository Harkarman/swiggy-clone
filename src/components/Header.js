import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container items-center">
      <div
        className="
      text-gray-700
      transition
      duration-500
      ease-in-out
      transform
      bg-white
      border
      rounded-lg
    "
      >
        <div className="flex flex-col flex-wrap p-5 mx-auto items-center md:flex-row">
          <div className="justify-center focus:outline-none md:ml-auto md:mr-auto">
            <div className="inline-flex items-center">
              <img src="/images/logo.svg" alt="" className="w-8" />
              <h2
                className="
              block
              p-2
              text-xl
              font-medium
              tracking-tighter
              text-black
              transition
              duration-500
              ease-in-out
              transform
              cursor-pointer
              hover:text-gray-500
              lg:text-x
              lg:mr-8
            "
              >
                <Link to="/">Swiggy Clone</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
