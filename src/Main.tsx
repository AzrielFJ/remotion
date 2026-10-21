import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import cues from './cues.json';
import {useFonts, Wipes, fr, lin} from './Kit';

import {Scene1Ambition} from './scenes/Scene1Ambition';
import {Scene2OperasiMawar} from './scenes/Scene2OperasiMawar';
import {Scene3CabinetFeast} from './scenes/Scene3CabinetFeast';
import {Scene4MBGDisillusion} from './scenes/Scene4MBGDisillusion';
import {Scene5TaxHammer} from './scenes/Scene5TaxHammer';
import {Scene6StockCrash} from './scenes/Scene6StockCrash';
import {Scene7FireLumber} from './scenes/Scene7FireLumber';
import {Scene8DebtFuelCrisis} from './scenes/Scene8DebtFuelCrisis';
import {Scene9Conclusion} from './scenes/Scene9Conclusion';

export const Main: React.FC = () => {
  useFonts();
  const frame = useCurrentFrame();

  const bs = cues.bounds.map(fr);
  const total = fr(cues.dur); // 1800 frames (60s @ 30fps)

  const scenes: React.FC[] = [
    Scene1Ambition,
    Scene2OperasiMawar,
    Scene3CabinetFeast,
    Scene4MBGDisillusion,
    Scene5TaxHammer,
    Scene6StockCrash,
    Scene7FireLumber,
    Scene8DebtFuelCrisis,
    Scene9Conclusion,
  ];

  const starts = [0, ...bs];
  const ends = [...bs, total];

  // Palet transisi wipe bergilir (Crimson, Obsidian, Oxidized Gold)
  const wipePalette = [
    ['#C8372D', '#090B0A'],
    ['#8B1E1E', '#141716'],
    ['#C9A227', '#C8372D'],
    ['#090B0A', '#C8372D'],
    ['#E2603C', '#090B0A'],
  ];

  return (
    <AbsoluteFill style={{background: '#090B0A'}}>
      {/* Audio Mix 60 Detik (Musik Minor Tense + SFX Prosedural) */}
      <Audio src={staticFile('mix.wav')} />

      {/* Rangkaian 9 Babak Berurutan */}
      {scenes.map((SceneComp, i) => (
        <Sequence
          key={i}
          from={starts[i]}
          durationInFrames={ends[i] - starts[i]}
        >
          <SceneComp />
        </Sequence>
      ))}

      {/* Multi-layered Wipes Transition */}
      <Wipes palette={wipePalette} />

      {/* Fade out hitam pekat di 18 frame terakhir */}
      <AbsoluteFill
        style={{
          background: '#050606',
          opacity: lin(frame, total - 18, total),
          pointerEvents: 'none',
          zIndex: 30,
        }}
      />
    </AbsoluteFill>
  );
};
