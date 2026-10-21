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
  W,
} from '../Kit';

export const Scene8DebtFuelCrisis: React.FC = () => {
  const frame = useCurrentFrame();

  const debtProg = lin(frame, 15, 75);
  const debtVal = Math.round(interpolate(debtProg, [0, 1], [200, 800]));
  const bbmPop = spr(frame, 85, 9, 210);
  const shk = shake(frame - 85, 18);

  return (
    <Cam frame={frame} dur={210} depth={0.6}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 35%, #2B1810 0%, #080909 92%)',
          transform: `translate(${shk}px, 0)`,
        }}
      >
        <Particles frame={frame} n={26} color="#C9A227" seed="debt8" />

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
          <DossierTag text="BABAK VIII · BOM WAKTU FISKAL & ENERGI" color="#C9A227" frame={frame} />

          <div style={{width: '100%'}}>
            <KineticWords
              text="UTANG JATUH TEMPO RP 800 T & CEKIKAN BBM"
              frame={frame}
              delay={3}
              size={52}
              color="#F4F1E9"
            />
          </div>

          <EditorialImage
            src="assets/asset_debt_bbm.jpg"
            frame={frame}
            tint="gold"
            caption="BEBAN BUNGA UTANG APBN & PEMBATASAN SUBSIDI BBM"
            height={520}
          >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
              <div
                style={{
                  background: 'rgba(13, 15, 14, 0.95)',
                  border: '4px solid #C9A227',
                  borderRadius: 20,
                  padding: '20px 48px',
                  textAlign: 'center',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.9)',
                }}
              >
                <div style={{fontFamily: 'Pop', fontWeight: 600, fontSize: 22, color: '#9BA89F'}}>
                  BEBAN UTANG JATUH TEMPO SETAHUN:
                </div>
                <div
                  style={{
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 88,
                    color: '#FFC93C',
                    lineHeight: 1.05,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  Rp {debtVal} T
                </div>
              </div>

              {frame >= 85 && (
                <div
                  style={{
                    transform: `scale(${bbmPop})`,
                    background: '#C8372D',
                    border: '3px solid #F4F1E9',
                    borderRadius: 14,
                    padding: '12px 32px',
                    fontFamily: 'Pop',
                    fontWeight: 900,
                    fontSize: 30,
                    color: '#F4F1E9',
                  }}
                >
                  ⛽ SUBSIDI BBM DIPERkETAT · KUALITAS DISOROT
                </div>
              )}
            </div>
          </EditorialImage>

          <SarcasticBanner
            quote="Kas negara terkuras bayar utang 800 triliun dan gaji 109 pejabat, lalu solusinya: cabut subsidi BBM rakyat kecil."
            subfact="Kemenkeu: Utang jatuh tempo 2025 mencapai Rp 800,33 Triliun"
            frame={frame}
            delay={22}
            accent="#C9A227"
          />
        </div>
      </AbsoluteFill>
    </Cam>
  );
};
