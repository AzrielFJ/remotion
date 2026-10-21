import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  staticFile,
  Easing,
  delayRender,
  continueRender,
  random,
} from 'remotion';
import cues from './cues.json';

export const FPS = 30;
export const W = 1080;
export const H = 1920;
export const fr = (s: number) => Math.round(s * FPS);

const clampO = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const spr = (frame: number, delay = 0, damping = 11, stiffness = 170) =>
  spring({
    frame: Math.max(0, frame - delay),
    fps: FPS,
    config: {damping, stiffness, mass: 0.7},
  });

export const lin = (
  frame: number,
  a: number,
  b: number,
  from = 0,
  to = 1,
  easing = Easing.inOut(Easing.cubic)
) => interpolate(frame, [a, b], [from, to], {...clampO, easing});

// Load local Poppins font
export const useFonts = () => {
  const [h] = React.useState(() => delayRender('fonts'));
  React.useEffect(() => {
    Promise.all([
      new FontFace('Pop', `url(${staticFile('pop-900.woff2')})`, {weight: '900'}).load(),
      new FontFace('Pop', `url(${staticFile('pop-600.woff2')})`, {weight: '600'}).load(),
    ])
      .then((fs) => {
        fs.forEach((x) => (document as any).fonts.add(x));
        continueRender(h);
      })
      .catch((e) => {
        console.error(e);
        continueRender(h);
      });
  }, [h]);
};

// Kinetic text: mask reveal per kata + overshoot bounce
export const KineticWords: React.FC<{
  text: string;
  frame: number;
  delay?: number;
  size: number;
  color: string;
  stagger?: number;
  align?: 'center' | 'left';
}> = ({text, frame, delay = 0, size, color, stagger = 3, align = 'center'}) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      gap: `${size * 0.2}px`,
      fontFamily: 'Pop',
      fontWeight: 900,
      fontSize: size,
      lineHeight: 1.08,
      color,
      textAlign: align,
      textShadow: '0 6px 24px rgba(0,0,0,0.85)',
    }}
  >
    {text.split(' ').map((w, i) => {
      const p = spr(frame, delay + i * stagger, 10, 195);
      return (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            paddingBottom: size * 0.08,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: `translateY(${(1 - p) * 115}%) rotate(${(1 - p) * 5}deg)`,
            }}
          >
            {w}
          </span>
        </span>
      );
    })}
  </div>
);

// Editorial Image Frame: menyatukan gambar ke estetika Dark Political Thriller
export const EditorialImage: React.FC<{
  src: string;
  frame: number;
  width?: number;
  height?: number;
  tint?: 'red' | 'gold' | 'crimson';
  caption?: string;
  children?: React.ReactNode;
}> = ({src, frame, width = 920, height = 460, tint = 'red', caption, children}) => {
  const enter = spr(frame, 6, 12, 160);
  const slowZoom = 1 + frame * 0.0007;
  const borderCol = tint === 'gold' ? '#C9A227' : '#C8372D';

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        border: `3px solid ${borderCol}`,
        background: '#0D0F0E',
        transform: `scale(${0.92 + 0.08 * enter})`,
        boxShadow: '0 28px 70px rgba(0,0,0,0.9)',
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${slowZoom})`,
          filter: 'contrast(135%) brightness(82%)',
        }}
      />
      {/* Dark Noir Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            tint === 'gold'
              ? 'radial-gradient(circle at 50% 45%, rgba(201,162,39,0.12) 0%, rgba(10,12,11,0.88) 92%)'
              : 'radial-gradient(circle at 50% 45%, rgba(200,55,45,0.18) 0%, rgba(10,12,11,0.9) 92%)',
        }}
      />
      {/* Corner Dossier Brackets */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: 18,
          padding: '4px 14px',
          background: 'rgba(13,15,14,0.85)',
          border: `1px solid ${borderCol}`,
          borderRadius: 6,
          fontFamily: 'Pop',
          fontWeight: 900,
          fontSize: 18,
          color: borderCol,
          letterSpacing: 2,
        }}
      >
        {caption || 'ARSIP INVESTIGASI'}
      </div>
      {/* Foreground Graphic Overlay inside Image Frame */}
      <AbsoluteFill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </AbsoluteFill>
    </div>
  );
};

// Sarcastic Quote / Satire Box di bawah adegan
export const SarcasticBanner: React.FC<{
  quote: string;
  subfact: string;
  frame: number;
  delay?: number;
  accent?: string;
}> = ({quote, subfact, frame, delay = 22, accent = '#C8372D'}) => {
  const s = spr(frame, delay, 11, 180);
  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, rgba(22,25,24,0.96) 0%, rgba(14,16,15,0.98) 100%)',
        borderLeft: `10px solid ${accent}`,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px 20px 20px 8px',
        padding: '22px 28px',
        transform: `translateY(${(1 - s) * 35}px)`,
        opacity: s,
        boxShadow: '0 18px 45px rgba(0,0,0,0.75)',
      }}
    >
      <div
        style={{
          fontFamily: 'Pop',
          fontWeight: 900,
          fontSize: 31,
          color: '#F4F1E9',
          lineHeight: 1.22,
          fontStyle: 'italic',
        }}
      >
        “{quote}”
      </div>
      <div
        style={{
          fontFamily: 'Pop',
          fontWeight: 600,
          fontSize: 22,
          color: '#9BA89F',
          marginTop: 8,
          letterSpacing: 0.5,
        }}
      >
        ▸ DATA: {subfact}
      </div>
    </div>
  );
};

// Top Dossier Chapter Header
export const DossierTag: React.FC<{text: string; color?: string; frame: number}> = ({
  text,
  color = '#C8372D',
  frame,
}) => {
  const op = lin(frame, 0, 14);
  return (
    <div
      style={{
        opacity: op,
        background: 'rgba(15, 17, 16, 0.9)',
        border: `2px solid ${color}`,
        borderRadius: 30,
        padding: '8px 28px',
        color,
        fontFamily: 'Pop',
        fontWeight: 900,
        fontSize: 26,
        letterSpacing: 3,
        boxShadow: `0 0 24px ${color}33`,
      }}
    >
      {text}
    </div>
  );
};

// Camera slow push-in + subtle drift
export const Cam: React.FC<{
  frame: number;
  dur: number;
  depth?: number;
  children: React.ReactNode;
}> = ({frame, dur, depth = 0.5, children}) => {
  const t = lin(frame, 0, dur, 0, 1, Easing.linear);
  return (
    <AbsoluteFill
      style={{
        transform: `scale(${1 + 0.055 * depth * t}) translate(${-32 * depth * t}px, ${-14 * depth * t}px) rotate(${
          0.5 * depth * (t - 0.5)
        }deg)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// Ambient floating particles (deterministic)
export const Particles: React.FC<{
  frame: number;
  n: number;
  color: string;
  seed?: string;
}> = ({frame, n, color, seed = 'p'}) => (
  <svg width={W} height={H} style={{position: 'absolute', pointerEvents: 'none'}}>
    {Array.from({length: n}).map((_, i) => {
      const x = random(`${seed}x${i}`) * W;
      const sp = 0.45 + random(`${seed}s${i}`) * 1.1;
      const r = 2.5 + random(`${seed}r${i}`) * 6;
      const y = H - ((frame * sp * 2 + random(`${seed}y${i}`) * H) % H);
      return (
        <circle
          key={i}
          cx={x + Math.sin(frame * 0.04 + i) * 14}
          cy={y}
          r={r}
          fill={color}
          opacity={0.18 + 0.35 * random(`${seed}o${i}`)}
        />
      );
    })}
  </svg>
);

// SVG Path drawing component
export const DrawPath: React.FC<{
  d: string;
  frame: number;
  a: number;
  b: number;
  color: string;
  width?: number;
  len?: number;
}> = ({d, frame, a, b, color, width = 8, len = 2000}) => (
  <path
    d={d}
    stroke={color}
    strokeWidth={width}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={len}
    strokeDashoffset={len * (1 - lin(frame, a, b))}
  />
);

export const squash = (f: number) => {
  const k = Math.max(0, 1 - f / 12) * Math.cos(f * 0.85);
  return {sx: 1 + 0.25 * k, sy: 1 - 0.25 * k};
};

export const shake = (f: number, amp = 18) =>
  f >= 0 && f < 14 ? ((Math.sin(f * 2.4) * (14 - f)) / 14) * amp : 0;

// Multi-layered Wipes transition between scenes
export const Wipes: React.FC<{palette: string[][]}> = ({palette}) => {
  const frame = useCurrentFrame();
  return (
    <>
      {cues.bounds.map((bt: number, i: number) => {
        const b = fr(bt);
        const panel = (lag: number, color: string, z: number) => {
          const f = frame - lag;
          if (f < b - 9 || f > b + 9) return null;
          const y =
            f < b
              ? interpolate(f, [b - 9, b], [H, 0], {
                  ...clampO,
                  easing: Easing.out(Easing.cubic),
                })
              : interpolate(f, [b, b + 9], [0, -H], {
                  ...clampO,
                  easing: Easing.in(Easing.cubic),
                });
          return (
            <div
              key={`${i}-${z}`}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: W,
                height: H,
                background: color,
                transform: `translateY(${y}px)`,
                zIndex: z,
              }}
            />
          );
        };
        const c = palette[i % palette.length];
        return (
          <React.Fragment key={i}>
            {panel(3, c[1], 15)}
            {panel(0, c[0], 16)}
          </React.Fragment>
        );
      })}
    </>
  );
};
