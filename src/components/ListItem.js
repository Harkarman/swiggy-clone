export default function ListItem({ restaurant }) {
  return (
    <div className="flex flex-wrap ">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p>{restaurant.city}</p>
    </div>
  );
}
