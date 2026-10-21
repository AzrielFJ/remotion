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
  W,
} from '../Kit';

export const Scene7FireLumber: React.FC = () => {
  const frame = useCurrentFrame();
  const cardLeft = spr(frame, 20, 10, 180);
  const cardRight = spr(frame, 45, 10, 180);
  const shk = shake(frame - 80, 16);

  return (
    <Cam frame={frame} dur={225} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #36190E 0%, #090A0A 92%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={36} color="#E2603C" seed="fire7" />

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
          <DossierTag text="BABAK VII · BENCANA EKOLOGI & PANGAN" color="#E2603C" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="FOOD ESTATE MANGKRAK & ASAP KARHUTLA"
              frame={frame}
              delay={3}
              size={54}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_karhutla.jpg"
            frame={frame}
            tint="red"
            caption="DEFORESTASI LUMBUNG PANGAN & ANCAMAN HUTAN ADAT"
            height={520}
          >
            <div style={{display: 'flex', gap: 22, width: '90%'}}>
              <div
                style={{
                  flex: 1,
                  transform: `scale(${cardLeft})`,
                  background: 'rgba(14, 16, 15, 0.94)',
                  border: '3px solid #E2603C',
                  borderRadius: 18,
                  padding: '22px',
                  textAlign: 'center',
                }}
              >
                <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 34, color: '#E2603C'}}>
                  SINGKONG GAGAL
                </div>
                <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 20, color: '#D5DDD8', marginTop: 8}}>
                  Ribuan hektare hutan Kalteng dibuka, tanah asam, panen nihil
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  transform: `scale(${cardRight})`,
                  background: 'rgba(14, 16, 15, 0.94)',
                  border: '3px solid #C8372D',
                  borderRadius: 18,
                  padding: '22px',
                  textAlign: 'center',
                }}
              >
                <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 34, color: '#FFC93C'}}>
                  BARA KARHUTLA
                </div>
                <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 20, color: '#D5DDD8', marginTop: 8}}>
                  Ekspansi jutaan hektare di Merauke mengancam hutan & masyarakat adat
                </div>
              </div>
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Janjinya swasembada pangan kelas dunia, hasilnya hutan gundul, kebun singkong mangkrak, dan rakyat menghirup kabut asap."
            subfact="Evaluasi WALHI & Komnas HAM atas proyek strategis Food Estate Kalimantan & Papua"
            frame={frame}
            delay={22}
            accent="#E2603C"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
