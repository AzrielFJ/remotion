import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {spr, lin, Cam, Particles, KineticWords, shake, squash, W, H} from '../Kit';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();

  // Animasi kamera & elemen
  const slam = spr(frame, 18, 9, 210); // Frame 18 ~ 0.6s
  const sealScale = spr(frame, 32, 10, 180); // Frame 32 ~ 1.0s
  const sq = squash(Math.max(0, frame - 36));
  const shk = shake(frame - 36, 18);

  const subBadgeOpacity = lin(frame, 10, 24);

  return (
    <Cam frame={frame} dur={120} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 40%, #242B27 0%, #121514 85%)',
          transform: `translate(${shk}px, ${shk * 0.5}px)`,
        }}
      >
        <Particles frame={frame} n={25} color="#C9A227" seed="hook" />

        {/* Safe Zone Container */}
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
          {/* Top Badge */}
          <div
            style={{
              opacity: subBadgeOpacity,
              transform: `translateY(${(1 - subBadgeOpacity) * -20}px)`,
              background: 'rgba(201, 162, 39, 0.15)',
              border: '2px solid #C9A227',
              borderRadius: 30,
              padding: '10px 28px',
              color: '#C9A227',
              fontFamily: 'Pop',
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: 2,
            }}
          >
            CATATAN AWAL KEPEMIMPINAN
          </div>

          {/* Center Graphic: Bintang Militer ke Lambang Garuda / Mahkota */}
          <div
            style={{
              position: 'relative',
              width: 440,
              height: 440,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Lingkaran Ring Luar */}
            <svg
              width="440"
              height="440"
              style={{
                position: 'absolute',
                transform: `rotate(${frame * 0.6}deg)`,
              }}
            >
              <circle
                cx="220"
                cy="220"
                r="190"
                stroke="#C8372D"
                strokeWidth="4"
                strokeDasharray="20 12"
                fill="none"
                opacity="0.6"
              />
              <circle
                cx="220"
                cy="220"
                r="210"
                stroke="#C9A227"
                strokeWidth="2"
                strokeDasharray="10 25"
                fill="none"
                opacity="0.4"
              />
            </svg>

            {/* Emblem Garuda / Bintang */}
            <div
              style={{
                transform: `scale(${sealScale * sq.sx}, ${sealScale * sq.sy})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
                {/* Garuda Crest Silhouette */}
                <path
                  d="M50 10 L62 38 L92 38 L68 56 L76 86 L50 68 L24 86 L32 56 L8 38 L38 38 Z"
                  fill="#C9A227"
                  stroke="#F4F1E9"
                  strokeWidth="2"
                />
                <circle cx="50" cy="46" r="14" fill="#C8372D" />
                <path
                  d="M44 46 L48 50 L56 42"
                  stroke="#F4F1E9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 28,
                  color: '#C9A227',
                  marginTop: 10,
                  letterSpacing: 4,
                }}
              >
                ★ RI-1 ★
              </div>
            </div>
          </div>

          {/* Kinetic Headline & Subtext */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <KineticWords
              text="25 TAHUN AMBISI KEKUASAAN"
              frame={frame}
              delay={4}
              size={64}
              color="#F4F1E9"
            />

            <div
              style={{
                background: '#C8372D',
                padding: '12px 32px',
                borderRadius: 16,
                transform: `scale(${slam})`,
                boxShadow: '0 12px 32px rgba(200, 55, 45, 0.4)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 42,
                  color: '#F4F1E9',
                  letterSpacing: 1,
                }}
              >
                KINI DIHADANG BADAI
              </span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
