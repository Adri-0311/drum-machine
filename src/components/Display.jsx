export default function Display({ soundName }) {
  return (
    <p
      id="display"
      className="text-center d-flex justify-content-center align-items-center"
    >
      {soundName}
    </p>
  );
}
