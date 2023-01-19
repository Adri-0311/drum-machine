export default function Pad({ letter, identifier, reproducir }) {
  return (
    <button
      id={identifier}
      className="drum-pad rounded"
      onClick={() => reproducir(letter)}
    >
      <audio
        id={letter}
        className="clip"
        src={`https://s3.amazonaws.com/freecodecamp/drums/${identifier}.mp3`}
      ></audio>
      {letter}
    </button>
  );
}
