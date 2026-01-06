export default async function PinList() {
  const response = await fetch("http://localhost:3000/api/pin", {
    cache: "no-cache",
  });
  const pins = await response.json();
  console.log(pins);

  return (
    <ul className="flex">
      {pins.map((pin) => (
        <li key={pin.id} className="border p-1 rounded m-1">
          <h2>{pins.title}</h2>
          <p>{pin.description}</p>
          <p>{pin.type}</p>
          <p>{pin.content}</p>
        </li>
      ))}
    </ul>
  );
}
