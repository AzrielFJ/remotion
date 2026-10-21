import React from 'react';
import {Composition} from 'remotion';
import {Main} from './Main';
import cues from './cues.json';

export const Root: React.FC = () => (
  <Composition
    id="Main"
    component={Main}
    durationInFrames={Math.round(cues.dur * 30)}
    fps={30}
    width={1080}
    height={1920}
  />
);
