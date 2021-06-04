import { getRestaurants } from "../services/firebase";

export default function Dashboard() {
  async function suggestedRestaurants() {
    const city = "Chandigarh";
    const response = await getRestaurants(city);
    console.log(response);
  }
  suggestedRestaurants();
  return <div>Dashboard</div>;
}
