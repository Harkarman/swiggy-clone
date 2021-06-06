import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import firebase from "../lib/firebase";
import Header from "./Header";
import SelectLocation from "./SelectLocation";
import ListItem from "./ListItem";

export default function RestaurantList() {
  const city = useParams().city;
  // const [city, setCity] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  // eslint-disable-next-line no-unused-vars
  let location = useLocation();
  useEffect(() => {
    firebase
      .firestore()
      .collection("restaurants")
      .where("city", "==", city)
      // .limit(10)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRestaurants(data);
      });
  }, [city]);
  return (
    <div>
      <Header />
      <SelectLocation />
      <div className="flex-row">
        {restaurants.map((restaurant) => (
          <ListItem restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}
