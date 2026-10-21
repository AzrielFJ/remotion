import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {
  spr,
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

export const Scene2OperasiMawar: React.FC = () => {
  const frame = useCurrentFrame();
  const stampFrame = frame - 52;
  const stampScale = spr(frame, 52, 8, 230);
  const sq = squash(Math.max(0, stampFrame));
  const shk = shake(stampFrame, 22);

  return (
    <Cam frame={frame} dur={150} depth={0.65}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 40%, #2A1010 0%, #070808 90%)',
          transform: `translate(${shk}px, ${shk * 0.4}px)`,
        }}
      >
        <Particles frame={frame} n={32} color="#C8372D" seed="mawar98" />

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
          <DossierTag text="BABAK II · DOSA SEJARAH 1998" color="#C8372D" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="DALANG OPERASI MAWAR & PENCULIKAN AKTIVIS"
              frame={frame}
              delay={3}
              size={54}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_mawar98.jpg"
            frame={frame}
            tint="red"
            caption="DOKUMEN DEWAN KEHORMATAN PERWIRA (DKP) · 1998"
            height={520}
          >
            <div
              style={{
                width: '88%',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                alignItems: 'center',
              }}
            >
              {/* Kartu Bukti Penculikan */}
              <div
                style={{
                  width: '100%',
                  background: 'rgba(12, 14, 13, 0.94)',
                  border: '2px solid #C8372D',
                  borderRadius: 16,
                  padding: '22px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 34, color: '#C8372D'}}>
                    TIM MAWAR (1997–1998)
                  </div>
                  <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 22, color: '#D5DDD8', marginTop: 4}}>
                    Operasi penculikan aktivis pro-demokrasi di bawah komando Danjen Kopassus
                  </div>
                </div>
                <div
                  style={{
                    background: '#C8372D',
                    padding: '12px 22px',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 44, color: '#F4F1E9', lineHeight: 1}}>
                    13
                  </div>
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 16, color: '#FFC93C'}}>
                    MASIH HILANG
                  </div>
                </div>
              </div>

              {/* Stempel Merah Berdarah */}
              {frame >= 52 && (
                <div
                  style={{
                    transform: `scale(${stampScale * sq.sx}, ${stampScale * sq.sy}) rotate(-8deg)`,
                    background: 'rgba(185, 28, 28, 0.97)',
                    border: '6px solid #F4F1E9',
                    borderRadius: 16,
                    padding: '14px 36px',
                    textAlign: 'center',
                    boxShadow: '0 25px 65px rgba(0,0,0,0.95)',
                  }}
                >
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 42, color: '#F4F1E9', letterSpacing: 2}}>
                    DIBERHENTIKAN DKP 1998
                  </div>
                  <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 20, color: '#FFC93C'}}>
                    SEJARAH KELAM YANG DICUCI DENGAN JOGET KAMPANYE
                  </div>
                </div>
              )}
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Dulu menculik aktivis yang memperjuangkan demokrasi; kini duduk nyaman di puncak demokrasi yang dulu ingin ia bungkam."
            subfact="Putusan DKP Agustus 1998 & Temuan Komnas HAM soal Penghilangan Paksa 1997/1998"
            frame={frame}
            delay={22}
            accent="#C8372D"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
