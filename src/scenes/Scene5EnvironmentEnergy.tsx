import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, shake, W, H} from '../Kit';

export const Scene5EnvironmentEnergy: React.FC = () => {
  const frame = useCurrentFrame();

  const flameSpring = spr(frame, 15, 10, 170);
  const pumpSpring = spr(frame, 45, 9, 190);
  const shk = shake(frame - 50, 14);

  return (
    <Cam frame={frame} dur={165} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #351F14 0%, #121514 85%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={30} color="#E2603C" seed="fire" />

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
              text="KARHUTLA & TEKANAN SUBSIDI BBM"
              frame={frame}
              delay={2}
              size={54}
              color="#F4F1E9"
            />
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 28,
                color: '#E2603C',
                marginTop: 6,
              }}
            >
              Ujian Berat Lingkungan & Beban Anggaran Energi
            </div>
          </div>

          {/* Center Graphic: Dual Split Box - Karhutla & BBM */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
            }}
          >
            {/* Box 1: Karhutla */}
            <div
              style={{
                flex: 1,
                background: '#1F1A17',
                border: '2px solid #E2603C',
                borderRadius: 24,
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: `scale(${flameSpring})`,
                boxShadow: '0 16px 40px rgba(226, 96, 60, 0.25)',
              }}
            >
              {/* Api SVG */}
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 15 C45 35, 20 45, 20 68 C20 85, 33 95, 50 95 C67 95, 80 85, 80 68 C80 45, 55 35, 50 15 Z"
                  fill="#E2603C"
                  opacity="0.9"
                />
                <path
                  d="M50 40 C46 52, 35 60, 35 74 C35 83, 42 88, 50 88 C58 88, 65 83, 65 74 C65 60, 54 52, 50 40 Z"
                  fill="#FFC93C"
                />
              </svg>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 32,
                  color: '#FFC93C',
                  marginTop: 12,
                }}
              >
                KARHUTLA
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 20,
                  color: '#8A968D',
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                Ancaman Asap & Isu Lumbung Pangan
              </div>
            </div>

            {/* Box 2: BBM */}
            <div
              style={{
                flex: 1,
                background: '#1F1A17',
                border: '2px solid #C8372D',
                borderRadius: 24,
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: `scale(${pumpSpring})`,
                boxShadow: '0 16px 40px rgba(200, 55, 45, 0.25)',
              }}
            >
              {/* Pompa Bensin SVG */}
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                <rect x="25" y="20" width="40" height="65" rx="8" fill="#C8372D" />
                <rect x="33" y="30" width="24" height="20" rx="4" fill="#141716" />
                <path
                  d="M65 40 L78 40 L78 65 L84 65 L84 55"
                  stroke="#F4F1E9"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 32,
                  color: '#C8372D',
                  marginTop: 12,
                }}
              >
                SUBSIDI BBM
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 20,
                  color: '#8A968D',
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                Beban Anggaran & Pembatasan Kuota
              </div>
            </div>
          </div>

          {/* Bottom Card: Krisis Bertumpuk */}
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
                background: '#E2603C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                color: '#fff',
              }}
            >
              ⚠
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
                Tantangan Nyata di Lapangan
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#8A968D',
                }}
              >
                Publik menanti solusi konkrit, bukan sekadar janji politik
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
