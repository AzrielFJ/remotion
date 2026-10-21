import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, W, H} from '../Kit';

export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const badgeSpring = spr(frame, 12, 10, 180);
  const qScale = spr(frame, 24, 8, 200);
  const ctaOpacity = lin(frame, 40, 70);

  return (
    <Cam frame={frame} dur={195} depth={0.5}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 45%, #242B27 0%, #101211 90%)',
        }}
      >
        <Particles frame={frame} n={25} color="#C9A227" seed="outro" />

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
          {/* Top Pill */}
          <div
            style={{
              transform: `scale(${badgeSpring})`,
              background: 'rgba(201, 162, 39, 0.15)',
              border: '2px solid #C9A227',
              borderRadius: 30,
              padding: '10px 30px',
              color: '#C9A227',
              fontFamily: 'Pop',
              fontWeight: 900,
              fontSize: 30,
              letterSpacing: 2,
            }}
          >
            REFLEKSI KEBIJAKAN PUBLIK
          </div>

          {/* Center Graphic: Tanda Tanya Emas & Pertanyaan Kritis */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 160,
                height: 160,
                borderRadius: 80,
                background: '#1F2421',
                border: '4px solid #C9A227',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `scale(${qScale})`,
                boxShadow: '0 20px 48px rgba(201, 162, 39, 0.3)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 100,
                  color: '#C9A227',
                }}
              >
                ?
              </span>
            </div>

            <KineticWords
              text="UJIAN AWAL ATAU TREN BURUK?"
              frame={frame}
              delay={15}
              size={58}
              color="#F4F1E9"
            />

            <div
              style={{
                opacity: ctaOpacity,
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 30,
                color: '#8A968D',
                textAlign: 'center',
                maxWidth: 700,
                lineHeight: 1.3,
              }}
            >
              Bagaimana pandanganmu soal arah kebijakan kabinet saat ini?
            </div>
          </div>

          {/* Bottom Card: CTA & Label Sumber Data Resmi */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              opacity: ctaOpacity,
            }}
          >
            <div
              style={{
                background: '#C8372D',
                padding: '16px 48px',
                borderRadius: 20,
                fontFamily: 'Pop',
                fontWeight: 900,
                fontSize: 34,
                color: '#F4F1E9',
                boxShadow: '0 12px 30px rgba(200, 55, 45, 0.4)',
              }}
            >
              TULIS DI KOLOM KOMENTAR
            </div>

            {/* Sumber Data Footer (Sesuai SOP Fase 2) */}
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 20,
                color: '#657269',
                letterSpacing: 1,
              }}
            >
              SUMBER DATA: KEMENKEU · BEI · BPS · KOMPAS · TEMPO · CNBC
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
