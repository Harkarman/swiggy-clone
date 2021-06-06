import { useState, useEffect } from "react";
import firebase from "../lib/firebase";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

export default function RestaurantList() {
  const [city, setCity] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
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
      <div>
        <button
          type="button"
          onClick={() => {
            setCity("Bangalore");
          }}
        >
          Bangalore
        </button>
        <button
          type="button"
          onClick={() => {
            setCity("New Delhi");
          }}
        >
          New Delhi
        </button>
        <button
          type="button"
          onClick={() => {
            setCity("Chennai");
          }}
        >
          Chennai
        </button>
        <button
          type="button"
          onClick={() => {
            setCity("Kolkata");
          }}
        >
          Kolkata
        </button>
        <button
          type="button"
          onClick={() => {
            setCity("Chandigarh");
          }}
        >
          Chandigarh
        </button>
        <button
          type="button"
          onClick={() => {
            setCity("Jaipur");
          }}
        >
          Jaipur
        </button>
      </div>
      {restaurants.map((restaurant) => (
        <ListItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
}
