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
  DrawPath,
  shake,
  W,
} from '../Kit';

export const Scene6StockCrash: React.FC = () => {
  const frame = useCurrentFrame();
  const shk = shake(frame - 75, 18);
  const badgePop = spr(frame, 80, 9, 210);

  return (
    <Cam frame={frame} dur={225} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #2D0F0F 0%, #080909 92%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={28} color="#C8372D" seed="ihsg6" />

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
          <DossierTag text="BABAK VI · KEPERCAYAAN PASAR RUNTUH" color="#C8372D" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="IHSG BERDARAH & INVESTOR ASING KABUR"
              frame={frame}
              delay={3}
              size={54}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_ihsg.jpg"
            frame={frame}
            tint="red"
            caption="BURSA EFEK INDONESIA · CAPITAL OUTFLOW TRILIUNAN"
            height={520}
          >
            <div
              style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <svg width="780" height="280" viewBox="0 0 780 280" fill="none">
                <DrawPath
                  d="M 20 35 L 140 55 L 220 42 L 340 120 L 450 110 L 580 215 L 750 265"
                  frame={frame}
                  a={15}
                  b={95}
                  color="#FF3B30"
                  width={12}
                  len={1400}
                />
              </svg>

              {frame >= 80 && (
                <div
                  style={{
                    transform: `scale(${badgePop})`,
                    background: 'rgba(15, 17, 16, 0.96)',
                    border: '4px solid #C8372D',
                    borderRadius: 16,
                    padding: '14px 32px',
                    textAlign: 'center',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
                  }}
                >
                  <div style={{fontFamily: 'Pop', fontWeight: 900, fontSize: 38, color: '#C8372D'}}>
                    ▼ ZONA MERAH · ANJLOK TAJAM
                  </div>
                  <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 20, color: '#F4F1E9'}}>
                    PASAR CEMAS ATAS DISIPLIN FISKAL & KEPASTIAN HUKUM
                  </div>
                </div>
              )}
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Bursa saham terjun bebas dan modal asing kabur triliunan, tapi pejabatnya masih santai bilang: 'Fundamental kita paling kuat di dunia.'"
            subfact="Aksi jual bersih (net sell) asing & pelemahan nilai tukar Rupiah"
            frame={frame}
            delay={22}
            accent="#C8372D"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
