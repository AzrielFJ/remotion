import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {
  spr,
  lin,
  Cam,
  Particles,
  KineticWords,
  EditorialImage,
  SarcasticBanner,
  DossierTag,
  shake,
  squash,
  W,
} from '../Kit';

export const Scene3CabinetFeast: React.FC = () => {
  const frame = useCurrentFrame();

  const countProgress = lin(frame, 18, 80);
  const countVal = Math.round(interpolate(countProgress, [0, 1], [34, 109]));

  const stampFrame = frame - 115;
  const stampScale = spr(frame, 115, 8, 220);
  const sq = squash(Math.max(0, stampFrame));
  const shk = shake(stampFrame, 20);

  return (
    <Cam frame={frame} dur={210} depth={0.55}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #291616 0%, #090B0A 90%)',
          transform: `translate(${shk}px, ${shk * 0.4}px)`,
        }}
      >
        <Particles frame={frame} n={25} color="#C8372D" seed="cab3" />

        <div
          style={{
            position: 'absolute',
            top: 165,
            left: 60,
            width: W - 120,
            bottom: 165,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <DossierTag text="BABAK III · PESTA PORSI KEKUASAAN" color="#C8372D" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="KABINET TERGEMUK SEJARAH REFORMASI"
              frame={frame}
              delay={3}
              size={56}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_cabinet.jpg"
            frame={frame}
            tint="red"
            caption="48 KEMENTERIAN · 109 MENTERI, WAMEN & PEJABAT"
            height={520}
          >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div
                style={{
                  background: 'rgba(13, 15, 14, 0.94)',
                  border: '4px solid #C8372D',
                  borderRadius: 24,
                  padding: '24px 64px',
                  textAlign: 'center',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.9)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 135,
                    lineHeight: 1,
                    color: '#C8372D',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {countVal}
                </div>
                <div
                  style={{
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 26,
                    color: '#F4F1E9',
                    letterSpacing: 2,
                    marginTop: 6,
                  }}
                >
                  KURSI PEJABAT BAGI-BAGI KOALISI
                </div>
              </div>

              {frame >= 115 && (
                <div
                  style={{
                    position: 'absolute',
                    transform: `scale(${stampScale * sq.sx}, ${stampScale * sq.sy}) rotate(-10deg)`,
                    background: 'rgba(200, 55, 45, 0.97)',
                    border: '6px solid #F4F1E9',
                    borderRadius: 16,
                    padding: '14px 36px',
                    textAlign: 'center',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
                  }}
                >
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 44, color: '#F4F1E9'}}>
                    EFISIENSI PALSU!
                  </div>
                  <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 20, color: '#FFC93C'}}>
                    ANGGARAN BIROKRASI MEMBENGKAK TRILIUNAN
                  </div>
                </div>
              )}
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Rakyat disuruh ikat pinggang demi efisiensi, tapi koalisi dikasih 109 kursi menteri. Kalau bisa boros, kenapa harus hemat?"
            subfact="48 Kementerian & >100 Pejabat Negara memicu pembengkakan belanja rutin APBN"
            frame={frame}
            delay={24}
            accent="#C8372D"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
