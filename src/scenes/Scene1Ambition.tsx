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

export const Scene1Ambition: React.FC = () => {
  const frame = useCurrentFrame();
  const slamFrame = frame - 42;
  const crownScale = spr(frame, 42, 8, 220);
  const sq = squash(Math.max(0, slamFrame));
  const shk = shake(slamFrame, 20);

  const electionYears = [
    {yr: '2004', status: 'GAGAL KONVENSI'},
    {yr: '2009', status: 'KALAH CAWAPRES'},
    {yr: '2014', status: 'KALAH CAPRES'},
    {yr: '2019', status: 'KALAH CAPRES'},
    {yr: '2024', status: 'TAHTA RI-1'},
  ];

  return (
    <Cam frame={frame} dur={135} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #221A15 0%, #090B0A 88%)',
          transform: `translate(${shk}px, ${shk * 0.5}px)`,
        }}
      >
        <Particles frame={frame} n={28} color="#C9A227" seed="amb1" />

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
          <DossierTag text="BABAK I · OBSESI KEKUASAAN" color="#C9A227" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="25 TAHUN BERBURU SATU TAHTA"
              frame={frame}
              delay={3}
              size={60}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_ambition.jpg"
            frame={frame}
            tint="gold"
            caption="REKAM JEJAK AMBISI POLITIK (1998–2024)"
            height={520}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 22,
                width: '90%',
              }}
            >
              {/* Timeline 5 Pemilu */}
              <div style={{display: 'flex', gap: 10, width: '100%', justifyContent: 'center'}}>
                {electionYears.map((item, idx) => {
                  const p = spr(frame, 12 + idx * 5, 11, 190);
                  const isWin = idx === 4;
                  return (
                    <div
                      key={item.yr}
                      style={{
                        transform: `scale(${p})`,
                        background: isWin ? '#C8372D' : 'rgba(18,20,19,0.92)',
                        border: `2px solid ${isWin ? '#F4F1E9' : '#C9A227'}`,
                        borderRadius: 12,
                        padding: '12px 14px',
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'Pop',
                          fontWeight: 900,
                          fontSize: 30,
                          color: isWin ? '#F4F1E9' : '#C9A227',
                        }}
                      >
                        {item.yr}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Pop',
                          fontWeight: 600,
                          fontSize: 15,
                          color: '#D5DDD8',
                          marginTop: 4,
                        }}
                      >
                        {item.status}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stempel Mahkota Retak */}
              {frame >= 42 && (
                <div
                  style={{
                    transform: `scale(${crownScale * sq.sx}, ${crownScale * sq.sy}) rotate(-4deg)`,
                    background: 'rgba(200, 55, 45, 0.96)',
                    border: '5px solid #F4F1E9',
                    borderRadius: 16,
                    padding: '16px 38px',
                    textAlign: 'center',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.9)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 900,
                      fontSize: 44,
                      color: '#F4F1E9',
                      letterSpacing: 2,
                    }}
                  >
                    AKHIRNYA BERKUASA
                  </div>
                  <div
                    style={{
                      fontFamily: 'Pop',
                      fontWeight: 600,
                      fontSize: 22,
                      color: '#FFC93C',
                    }}
                  >
                    TAPI RAKYAT YANG MEMBAYAR MAHARNYA
                  </div>
                </div>
              )}
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Empat kali kalah tak masalah, asal di percobaan kelima semua kompromi dihalalkan."
            subfact="Dari Danjen Kopassus, Ketua Partai, Menhan, hingga Presiden ke-8 RI (2024)"
            frame={frame}
            delay={25}
            accent="#C9A227"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
