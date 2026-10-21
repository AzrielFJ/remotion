import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, shake, squash, W, H} from '../Kit';

export const Scene2CabinetAPBN: React.FC = () => {
  const frame = useCurrentFrame();

  // Hitungan pejabat 34 -> 109 pejabat
  const countProgress = lin(frame, 15, 65);
  const countVal = Math.round(interpolate(countProgress, [0, 1], [34, 109]));

  // Stempel "KABINET JUMBO"
  const stampFrame = frame - 68;
  const stampScale = spr(frame, 68, 8, 220);
  const shk = shake(stampFrame, 18);
  const sq = squash(Math.max(0, stampFrame));

  return (
    <Cam frame={frame} dur={135} depth={0.5}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #2B1D1D 0%, #141716 85%)',
          transform: `translate(${shk}px, ${shk * 0.4}px)`,
        }}
      >
        <Particles frame={frame} n={20} color="#C8372D" seed="cab" />

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
          {/* Top Headline */}
          <div style={{width: '100%', textAlign: 'center'}}>
            <KineticWords
              text="KABINET TERGEMUK REFORMASI"
              frame={frame}
              delay={3}
              size={58}
              color="#F4F1E9"
            />
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 32,
                color: '#C9A227',
                marginTop: 8,
              }}
            >
              48 Kementerian · Ratusan Kursi Birokrasi
            </div>
          </div>

          {/* Center Graphic: Digital Counter & Grid Jabatan */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Box Counter */}
            <div
              style={{
                background: '#1F2421',
                border: '3px solid #C8372D',
                borderRadius: 24,
                padding: '24px 60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
              }}
            >
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 130,
                  lineHeight: 1,
                  color: countVal > 100 ? '#C8372D' : '#F4F1E9',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {countVal}
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 28,
                  color: '#8A968D',
                  letterSpacing: 2,
                  marginTop: 6,
                }}
              >
                MENTERI, WAMEN & PEJABAT
              </div>
            </div>

            {/* Stempel GEMUK menimpa */}
            {frame >= 68 && (
              <div
                style={{
                  position: 'absolute',
                  top: '25%',
                  transform: `scale(${stampScale * sq.sx}, ${stampScale * sq.sy}) rotate(-14deg)`,
                  border: '8px solid #C8372D',
                  borderRadius: 16,
                  padding: '12px 36px',
                  background: 'rgba(200, 55, 45, 0.95)',
                  color: '#F4F1E9',
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 54,
                  letterSpacing: 4,
                  boxShadow: '0 20px 48px rgba(0,0,0,0.8)',
                }}
              >
                BEBAN APBN!
              </div>
            )}
          </div>

          {/* Bottom Card: Fakta Anggaran */}
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
                width: 60,
                height: 60,
                borderRadius: 30,
                background: '#C8372D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                color: '#fff',
                fontFamily: 'Pop',
                fontWeight: 900,
              }}
            >
              !
            </div>
            <div style={{flex: 1}}>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 32,
                  color: '#F4F1E9',
                }}
              >
                Kontradiksi Efisiensi
              </div>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 600,
                  fontSize: 24,
                  color: '#8A968D',
                }}
              >
                Belanja operasional melonjak di tengah defisit fiskal negara
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
