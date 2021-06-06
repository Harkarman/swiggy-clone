export default function ListItem({ restaurant }) {
  return (
    <div className="flex flex-wrap ">
      <div className="container items-center px-5 py-12 lg:px-20">
        <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
          <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
            <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
              <img
                src={restaurant.imgSrc}
                alt={restaurant.name}
                className="rounded-lg max-h-52"
              />
            </div>
            <div className="flex flex-col w-full text-gray-500 lg:ml-4">
              <h1 className="mt-4 mb-8 text-md font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
                {restaurant.name}
              </h1>
              <p className="mb-3 text-base leading-relaxed text-gray-500">
                {" "}
                {restaurant.address}{" "}
              </p>
              <small className="text-sm text-gray-600">{restaurant.city}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
