import { useState, useEffect } from 'react';
import Pad from './components/Pad.jsx';
import Display from './components/Display.jsx';
import './App.css';

export default function App() {
  const keysSong = [
    { letra: 'Q', sample: 'Heater-1' },
    { letra: 'W', sample: 'Heater-2' },
    { letra: 'E', sample: 'Heater-3' },
    { letra: 'A', sample: 'Heater-4_1' },
    { letra: 'S', sample: 'Heater-6' },
    { letra: 'D', sample: 'Dsc_Oh' },
    { letra: 'Z', sample: 'Kick_n_Hat' },
    { letra: 'X', sample: 'RP4_KICK_1' },
    { letra: 'C', sample: 'Cev_H2' },
  ];

  const [display, setDisplay] = useState('Power On');

  useEffect(() => {
    window.addEventListener('keydown', (e) => triggerPad(e));
  }, []);

  const playSample = (pad) => {
    document.getElementById(pad).play();
    setDisplay(extractSampleName(pad));
  };

  const extractSampleName = (letra) => {
    return keysSong.find((element) => element.letra === letra).sample;
  };

  const triggerPad = (e) => {
    console.log('Key presed:', e.key.toUpperCase());
    switch (e.key.toUpperCase()) {
      case 'Q':
        playSample('Q');
        setDisplay(extractSampleName('Q'));
        break;
      case 'W':
        playSample('W');
        setDisplay(extractSampleName('W'));
        break;
      case 'E':
        playSample('E');
        setDisplay(extractSampleName('E'));
        break;
      case 'A':
        playSample('A');
        setDisplay(extractSampleName('A'));
        break;
      case 'S':
        playSample('S');
        setDisplay(extractSampleName('S'));
        break;
      case 'D':
        playSample('D');
        setDisplay(extractSampleName('D'));
        break;
      case 'Z':
        playSample('Z');
        setDisplay(extractSampleName('Z'));
        break;
      case 'X':
        playSample('X');
        setDisplay(extractSampleName('X'));
        break;
      case 'C':
        playSample('C');
        setDisplay(extractSampleName('C'));
        break;
    }
  };

  return (
    <div
      id='drum-machine'
      className='container d-flex flex-wrap flex-column flex-sm-row justify-content-around align-items-stretch gap-3 p-3'
    >
      <h1 className='text-center'>DRUM MACHINE</h1>
      <div className='w-100'></div>
      <div className='align-self-center d-flex flex-column order-sm-1'>
        <div className='display-wrapper d-flex flex-row justify-content-around align-items-center rounded p-2 w-100'>
          <Display soundName={display} />
        </div>
      </div>
      <div className='buttons-wrapper order-sm-0 p-4'>
        {keysSong.map((item, index) => {
          return (
            <Pad
              key={index}
              letter={item.letra}
              identifier={item.sample}
              reproduce={playSample}
            />
          );
        })}
      </div>
    </div>
  );
}
