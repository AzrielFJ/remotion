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

export const Scene5TaxHammer: React.FC = () => {
  const frame = useCurrentFrame();
  const slamFrame = frame - 30;
  const hammerSpring = spr(frame, 30, 7, 240);
  const sq = squash(Math.max(0, slamFrame));
  const shk = shake(slamFrame, 24);

  return (
    <Cam frame={frame} dur={225} depth={0.65}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #331010 0%, #080909 92%)',
          transform: `translate(${shk}px, ${shk * 0.5}px)`,
        }}
      >
        <Particles frame={frame} n={30} color="#C8372D" seed="tax5" />

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
          <DossierTag text="BABAK V · CEKIKAN FISKAL RAKYAT" color="#C8372D" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="PALU GODAM PPN 12% MENGHANTAM DAYA BELI"
              frame={frame}
              delay={3}
              size={54}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_tax.jpg"
            frame={frame}
            tint="red"
            caption="KEBIJAKAN PAJAK KONSUMSI DI TENGAH GELOMBANG PHK"
            height={520}
          >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
              <div
                style={{
                  transform: `scale(${hammerSpring * sq.sx}, ${hammerSpring * sq.sy}) rotate(-6deg)`,
                  background: 'rgba(195, 32, 28, 0.98)',
                  border: '7px solid #F4F1E9',
                  borderRadius: 22,
                  padding: '22px 54px',
                  textAlign: 'center',
                  boxShadow: '0 30px 75px rgba(0,0,0,0.95)',
                }}
              >
                <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 96, color: '#F4F1E9', lineHeight: 1}}>
                  PPN 12%
                </div>
                <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 24, color: '#FFC93C', letterSpacing: 2, marginTop: 6}}>
                  PAJAK NAIK · KELAS MENENGAH TUMBANG
                </div>
              </div>
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Dikasih janji makan gratis di depan, tapi dompet rakyat diperas pajak 12% dari belakang. Subsidi silang dari rakyat, untuk birokrat."
            subfact="Deflasi beruntun & penyusutan jumlah kelas menengah Indonesia sebesar 9,5 juta jiwa"
            frame={frame}
            delay={22}
            accent="#C8372D"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
