import { useEffect } from 'react';

export default function Pad({ letter, identifier, reproduce }) {
  const audio = new Audio(
    `https://s3.amazonaws.com/freecodecamp/drums/${identifier}.mp3`
  );
  audio.classList.add('clip');
  audio.id = letter;

  useEffect(() => {
    document.getElementById(identifier).append(audio);
  }, [audio]);

  return (
    <button
      id={identifier}
      className='drum-pad rounded'
      onClick={() => reproduce(letter)}
    >
      {letter}
    </button>
  );
}
