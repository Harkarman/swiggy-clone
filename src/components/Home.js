import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const cities = [
    "Bangalore",
    "New Delhi",
    "Chandigarh",
    "Jaipur",
    "Chennai",
    "Hyderabad",
    "Kolkata",
  ];
  return (
    <div>
      <Header />

      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 lg:py-20">
          <div className="flex flex-col w-full mb-12 text-center">
            <h2 className="mb-4 text-md font-bold tracking-widest text-black uppercase title-font">
              {" "}
              SELECT YOUR LOCATION{" "}
            </h2>
          </div>
          <div className="flex flex-col flex-wrap justify-between items-center md:flex-row">
            {cities.map((city) => (
              <Link to={`/restaurants/${city}`} key={city}>
                <h3 className="text-sm font-semibold tracking-widest text-black uppercase title-font">
                  {city}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
