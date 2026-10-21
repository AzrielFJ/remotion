import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, shake, W, H} from '../Kit';

export const Scene3MBG: React.FC = () => {
  const frame = useCurrentFrame();

  const traySpring = spr(frame, 10, 11, 160);
  const cutFrame = frame - 45;
  const cutSpring = spr(frame, 45, 9, 200);
  const shk = shake(cutFrame, 14);

  return (
    <Cam frame={frame} dur={135} depth={0.5}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 40%, #1F2823 0%, #121514 85%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={20} color="#C9A227" seed="mbg" />

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
              text="POLEMIK MAKAN BERGIZI"
              frame={frame}
              delay={2}
              size={58}
              color="#F4F1E9"
            />
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 30,
                color: '#C9A227',
                marginTop: 6,
              }}
            >
              Komitmen Rp 71 Triliun vs Kualitas Porsi
            </div>
          </div>

          {/* Center Graphic: Nampan Makan & Penurunan Nilai */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Food Tray Mockup Container */}
            <div
              style={{
                transform: `scale(${traySpring})`,
                width: 620,
                background: '#1C221F',
                border: '3px solid #6E8F63',
                borderRadius: 28,
                padding: '30px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              {/* Tray compartments */}
              <div style={{display: 'flex', gap: 16, width: '100%', marginBottom: 20}}>
                <div
                  style={{
                    flex: 2,
                    height: 120,
                    background: '#28322D',
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    color: '#6E8F63',
                    fontSize: 26,
                  }}
                >
                  NASI & PROTEIN
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 120,
                    background: '#28322D',
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    color: '#C9A227',
                    fontSize: 24,
                  }}
                >
                  SUSU
                </div>
              </div>

              {/* Price Tag Comparison */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 24,
                  width: '100%',
                }}
              >
                {/* Harga Awal Rp 15.000 Disilang */}
                <div style={{position: 'relative'}}>
                  <span
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 900,
                      fontSize: 48,
                      color: '#8A968D',
                    }}
                  >
                    Rp 15.000
                  </span>
                  {frame >= 45 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: -8,
                        right: -8,
                        height: 6,
                        background: '#C8372D',
                        transform: `rotate(-12deg) scaleX(${cutSpring})`,
                        borderRadius: 3,
                      }}
                    />
                  )}
                </div>

                <span
                  style={{
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 40,
                    color: '#C8372D',
                  }}
                >
                  ➔
                </span>

                {/* Harga Disunat */}
                <div
                  style={{
                    background: frame >= 45 ? '#C8372D' : '#28322D',
                    padding: '8px 20px',
                    borderRadius: 12,
                    transform: frame >= 45 ? `scale(${cutSpring})` : 'scale(1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 900,
                      fontSize: 52,
                      color: '#F4F1E9',
                    }}
                  >
                    Rp 10.000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card: Pemotongan Anggaran Pos Lain */}
          <div
            style={{
              width: '100%',
              background: 'rgba(28, 34, 31, 0.9)',
              borderRadius: 20,
              border: '2px solid rgba(200, 55, 45, 0.3)',
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
              ✂
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
                Anggaran Pos Lain Terancam Dipangkas
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#8A968D',
                }}
              >
                Efisiensi agresif menyasar pos riset, pendidikan & subsidi
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
