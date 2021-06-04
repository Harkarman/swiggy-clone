import { firebase } from "../lib/firebase";

export async function getRestaurants(city) {
  const result = await firebase
    .firestore()
    .collection("restaurants")
    .where("city", "==", city)
    .limit(10)
    .get();
  // console.log("result", result);
  return result.docs.map((restaurant) => ({
    ...restaurant.data(),
    docId: restaurant.id,
  }));
}
