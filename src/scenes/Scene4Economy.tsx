import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, shake, squash, DrawPath, W, H} from '../Kit';

export const Scene4Economy: React.FC = () => {
  const frame = useCurrentFrame();

  const stampFrame = frame - 18;
  const stampSpring = spr(frame, 18, 8, 230);
  const shk = shake(stampFrame, 20);
  const sq = squash(Math.max(0, stampFrame));

  // Chart drop line animation
  const chartProgress = lin(frame, 40, 100);

  return (
    <Cam frame={frame} dur={150} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 30%, #301616 0%, #121514 85%)',
          transform: `translate(${shk}px, ${shk * 0.4}px)`,
        }}
      >
        <Particles frame={frame} n={25} color="#C8372D" seed="eco" />

        <div
          style={{
            position: 'absolute',
            top: 180,
            left: 60,
            width: W - 120,
            bottom: 180,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Header */}
          <div style={{width: '100%', textAlign: 'center'}}>
            <KineticWords
              text="BADAI EKONOMI & PASAR MODAL"
              frame={frame}
              delay={2}
              size={56}
              color="#F4F1E9"
            />
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 30,
                color: '#C8372D',
                marginTop: 6,
              }}
            >
              Daya Beli Tertekan · Investor Khawatir
            </div>
          </div>

          {/* Center Graphic: PPN 12% Stamp + IHSG Red Trend Line */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 480,
              background: '#1A1E1C',
              border: '2px solid rgba(200, 55, 45, 0.4)',
              borderRadius: 24,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 30px',
              boxShadow: '0 20px 48px rgba(0,0,0,0.6)',
            }}
          >
            {/* Chart Header */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <span style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 32, color: '#F4F1E9'}}>
                  IHSG INDEX
                </span>
                <span style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 24, color: '#C8372D', marginLeft: 12}}>
                  ▼ ANJLOK KE ZONA MERAH
                </span>
              </div>
              <div
                style={{
                  background: 'rgba(200, 55, 45, 0.2)',
                  border: '1px solid #C8372D',
                  borderRadius: 12,
                  padding: '4px 14px',
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#C8372D',
                }}
              >
                BEARISH
              </div>
            </div>

            {/* SVG Terjun IHSG */}
            <svg width="100%" height="240" viewBox="0 0 800 240" fill="none">
              {/* Grid garis halus */}
              <line x1="0" y1="60" x2="800" y2="60" stroke="#2A302D" strokeDasharray="6 6" />
              <line x1="0" y1="120" x2="800" y2="120" stroke="#2A302D" strokeDasharray="6 6" />
              <line x1="0" y1="180" x2="800" y2="180" stroke="#2A302D" strokeDasharray="6 6" />

              {/* Kurva IHSG anjlok */}
              <DrawPath
                d="M 20 50 Q 200 40, 320 90 T 520 180 T 780 230"
                frame={frame}
                a={35}
                b={110}
                color="#C8372D"
                width={10}
                len={1200}
              />
            </svg>

            {/* Stempel Raksasa PPN 12% */}
            {frame >= 18 && (
              <div
                style={{
                  position: 'absolute',
                  top: '28%',
                  left: '18%',
                  transform: `scale(${stampSpring * sq.sx}, ${stampSpring * sq.sy}) rotate(-10deg)`,
                  border: '8px solid #C8372D',
                  borderRadius: 20,
                  padding: '16px 40px',
                  background: 'rgba(200, 55, 45, 0.95)',
                  color: '#F4F1E9',
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 60,
                  textAlign: 'center',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
                }}
              >
                PPN 12%
                <div style={{fontSize: 24, fontWeight: 600, letterSpacing: 2}}>
                  BEBAN KONSUMSI RAKYAT
                </div>
              </div>
            )}
          </div>

          {/* Bottom Card: Kritik Kebijakan Pajak */}
          <div
            style={{
              width: '100%',
              background: 'rgba(28, 34, 31, 0.9)',
              borderRadius: 20,
              border: '2px solid rgba(255,255,255,0.1)',
              padding: '20px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                background: '#C8372D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                color: '#fff',
              }}
            >
              %
            </div>
            <div style={{flex: 1}}>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 30,
                  color: '#F4F1E9',
                }}
              >
                Pajak Naik di Kala Ekonomi Lesu
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#8A968D',
                }}
              >
                Pelemahan kelas menengah & gelombang kritik publik
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
