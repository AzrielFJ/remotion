import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {
  spr,
  lin,
  Cam,
  Particles,
  KineticWords,
  DossierTag,
  shake,
  squash,
  W,
} from '../Kit';

export const Scene9Conclusion: React.FC = () => {
  const frame = useCurrentFrame();

  const verdictFrame = frame - 85;
  const verdictScale = spr(frame, 85, 8, 220);
  const sq = squash(Math.max(0, verdictFrame));
  const shk = shake(verdictFrame, 22);

  const pillars = [
    'JEJAK KELAM TIM MAWAR 1998',
    '109 PEJABAT PEMBOROS APBN',
    'DISKON GIZI & SUNAT PENDIDIKAN',
    'CEKIKAN PPN 12% & IHSG MERAH',
    'KARHUTLA, BBM & UTANG RP 800 T',
  ];

  return (
    <Cam frame={frame} dur={210} depth={0.5}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 40%, #2B0D0D 0%, #050606 94%)',
          transform: `translate(${shk}px, ${shk * 0.4}px)`,
        }}
      >
        <Particles frame={frame} n={34} color="#C8372D" seed="end9" />

        <div
          style={{
            position: 'absolute',
            top: 165,
            left: 60,
            width: W - 120,
            bottom: 155,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <DossierTag text="EPILOG · KESIMPULAN AKHIR" color="#C8372D" frame={frame} />

          {/* Rangkuman Dosa & Krisis */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {pillars.map((pText, i) => {
              const pSpr = spr(frame, 8 + i * 6, 11, 185);
              return (
                <div
                  key={i}
                  style={{
                    transform: `translateX(${(1 - pSpr) * -60}px)`,
                    opacity: pSpr,
                    background: 'rgba(18, 20, 19, 0.92)',
                    borderLeft: '8px solid #C8372D',
                    borderRadius: '6px 14px 14px 6px',
                    padding: '14px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 900,
                      fontSize: 27,
                      color: '#D5DDD8',
                      letterSpacing: 1,
                    }}
                  >
                    0{i + 1}. {pText}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 900,
                      fontSize: 24,
                      color: '#C8372D',
                    }}
                  >
                    [TERCATAT]
                  </span>
                </div>
              );
            })}
          </div>

          {/* Pertanyaan Kesimpulan Filosofis & Tajam */}
          <div
            style={{
              width: '100%',
              background: 'linear-gradient(180deg, rgba(24,14,14,0.96) 0%, rgba(12,10,10,0.99) 100%)',
              border: '3px solid #C9A227',
              borderRadius: 24,
              padding: '32px 34px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
              boxShadow: '0 28px 75px rgba(0,0,0,0.95)',
            }}
          >
            <div
              style={{
                fontFamily: 'Pop',
                fontWeight: 600,
                fontSize: 28,
                color: '#C9A227',
                textAlign: 'center',
                lineHeight: 1.35,
              }}
            >
              Ketika aktivis dulu dibungkam, anggaran kini dihamburkan, dan rakyat diperas pajak demi menopang tahta...
            </div>

            <div style={{width: '100%'}}>
              <KineticWords
                text="KETIKA 25 TAHUN AMBISI AKHIRNYA TERBAYAR LUNAS:"
                frame={frame}
                delay={45}
                size={40}
                color="#F4F1E9"
              />
            </div>

            {frame >= 85 && (
              <div
                style={{
                  transform: `scale(${verdictScale * sq.sx}, ${verdictScale * sq.sy})`,
                  background: '#C8372D',
                  border: '4px solid #F4F1E9',
                  borderRadius: 16,
                  padding: '18px 28px',
                  textAlign: 'center',
                  width: '100%',
                  boxShadow: '0 20px 55px rgba(200,55,45,0.5)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 38,
                    color: '#F4F1E9',
                    lineHeight: 1.2,
                  }}
                >
                  APAKAH INI SEBUAH KEPEMIMPINAN, ATAU PENAKLUKAN ATAS RAKYATNYA SENDIRI?
                </div>
              </div>
            )}
          </div>

          {/* Footer Sumber Jurnalistik Resmi */}
          <div
            style={{
              opacity: lin(frame, 30, 60),
              fontFamily: 'Pop',
              fontWeight: 600,
              fontSize: 19,
              color: '#657269',
              letterSpacing: 1.2,
              textAlign: 'center',
            }}
          >
            SUMBER ARSIP & DATA: DKP 1998 · KOMNAS HAM · KEMENKEU · BEI · BPS · WALHI · TEMPO · KOMPAS
          </div>
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
