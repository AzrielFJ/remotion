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

export const Scene4MBGDisillusion: React.FC = () => {
  const frame = useCurrentFrame();
  const slashFrame = frame - 65;
  const slashSpring = spr(frame, 65, 9, 210);
  const shk = shake(slashFrame, 16);

  return (
    <Cam frame={frame} dur={210} depth={0.55}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 40%, #1C2620 0%, #090B0A 90%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={24} color="#C9A227" seed="mbg4" />

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
          <DossierTag text="BABAK IV · ILUSI MAKAN BERGIZI" color="#C9A227" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="JANJI SURGA DI BALIHO, DISKON DI PIRING"
              frame={frame}
              delay={3}
              size={54}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_mbg.jpg"
            frame={frame}
            tint="gold"
            caption="REALISASI ANGGARAN MBG RP 71 TRILIUN"
            height={520}
          >
            <div
              style={{
                background: 'rgba(13, 15, 14, 0.94)',
                border: '3px solid #C9A227',
                borderRadius: 22,
                padding: '30px 44px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 20,
                boxShadow: '0 24px 60px rgba(0,0,0,0.9)',
              }}
            >
              <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 28, color: '#8A968D'}}>
                ANGGARAN PER PORSI DISUNAT:
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: 28}}>
                <div style={{position: 'relative'}}>
                  <span style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 52, color: '#7D8981'}}>
                    Rp 15.000
                  </span>
                  {frame >= 65 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '48%',
                        left: -10,
                        right: -10,
                        height: 8,
                        background: '#C8372D',
                        transform: `rotate(-14deg) scaleX(${slashSpring})`,
                      }}
                    />
                  )}
                </div>

                <span style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 44, color: '#C8372D'}}>
                  ➔
                </span>

                <div
                  style={{
                    background: frame >= 65 ? '#C8372D' : '#242B27',
                    padding: '10px 26px',
                    borderRadius: 14,
                    transform: frame >= 65 ? `scale(${slashSpring})` : 'scale(1)',
                  }}
                >
                  <span style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 58, color: '#F4F1E9'}}>
                    Rp 10.000
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(200, 55, 45, 0.2)',
                  border: '1px solid #C8372D',
                  borderRadius: 10,
                  padding: '8px 20px',
                  fontFamily: 'Pop',
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#FFC93C',
                }}
              >
                ✂ POS PENDIDIKAN, RISET & INFRASTRUKTUR DIKORBANKAN
              </div>
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Gizi anak bangsa disunat jadi 10 ribu perak, sementara anggaran riset dan pendidikan dipangkas demi menambal janji kampanye."
            subfact="Pemangkasan anggaran kementerian/lembaga hingga ratusan triliun rupiah"
            frame={frame}
            delay={22}
            accent="#C9A227"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
