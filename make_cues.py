# make_cues.py - Single source of timing (60.0 Detik @ 120 BPM = 120 beats, 9 Babak)
import json

# 8 Batas antar 9 adegan (detik) - kelipatan beat 0.5s
B = [4.5, 9.5, 16.5, 23.5, 31.0, 38.5, 46.0, 53.0]

ev = dict(
    # Scene 1: Ambisi 25 Tahun (0.0 - 4.5)
    title_amb=0.0,
    crown_slam=1.5,
    years_tick=2.8,
    # Scene 2: Operasi Mawar 1998 (4.5 - 9.5)
    dossier_in=4.9,
    stamp_mawar=6.4,
    shatter_98=8.0,
    # Scene 3: Kabinet 109 Pejabat (9.5 - 16.5)
    cab_in=10.0,
    cab_ticks=11.2,
    stamp_boros=13.5,
    # Scene 4: Ilusi MBG Rp 10rb (16.5 - 23.5)
    tray_slide=17.0,
    slash_price=19.0,
    cut_research=21.2,
    # Scene 5: Palu Pajak PPN 12% (23.5 - 31.0)
    hammer_slam=24.5,
    tax_bell=26.5,
    wallet_crush=28.8,
    # Scene 6: IHSG Berdarah (31.0 - 38.5)
    ihsg_dive=31.8,
    panic_bell=34.2,
    sarcasm_quote=36.2,
    # Scene 7: Food Estate & Karhutla (38.5 - 46.0)
    fire_ignite=39.2,
    dead_crop=41.8,
    smoke_boom=44.0,
    # Scene 8: Bom Utang Rp 800T & BBM (46.0 - 53.0)
    debt_count=46.8,
    bbm_lock=49.5,
    fiscal_alarm=51.2,
    # Scene 9: Epilog Kesimpulan (53.0 - 60.0)
    final_slam=53.8,
    verdict_hit=56.0,
    final_chord_hit=58.2,
)

sfx = [
    # Scene 1: Ambisi 25 Tahun
    dict(t=0.0, type='impact', gain=0.95),
    dict(t=ev['crown_slam'], type='impact', gain=0.9),
    dict(t=ev['crown_slam'], type='clap', gain=0.8),
    dict(t=ev['years_tick'], type='ticks', d=1.2, step=0.15, gain=0.75),
]

# Transisi antar 9 adegan: whoosh tajam + dentuman thud berat
for b in B:
    sfx.append(dict(t=round(b - 0.32, 2), type='whoosh', d=0.5, gain=0.9))
    sfx.append(dict(t=b, type='thud', gain=0.75))

# Scene 2: Operasi Mawar 1998
sfx += [
    dict(t=ev['dossier_in'], type='shimmer', d=1.2, gain=0.75),
    dict(t=ev['stamp_mawar'], type='impact', gain=0.95),
    dict(t=ev['stamp_mawar'], type='bell', f=660, gain=0.65),
    dict(t=ev['shatter_98'], type='thud', gain=0.85),
]

# Scene 3: Kabinet 109 Pejabat
sfx += [
    dict(t=ev['cab_in'], type='pop', gain=0.8),
    dict(t=ev['cab_ticks'], type='ticks', d=1.8, step=0.07, gain=0.85),
    dict(t=ev['stamp_boros'], type='impact', gain=0.95),
    dict(t=ev['stamp_boros'], type='clap', gain=0.85),
]

# Scene 4: Ilusi MBG
sfx += [
    dict(t=ev['tray_slide'], type='whoosh', d=0.45, gain=0.7),
    dict(t=ev['slash_price'], type='impact', gain=0.85),
    dict(t=ev['cut_research'], type='plink', gain=0.85),
]

# Scene 5: Palu Pajak PPN 12%
sfx += [
    dict(t=ev['hammer_slam'], type='impact', gain=1.0),
    dict(t=ev['hammer_slam'], type='bell', f=987, gain=0.75),
    dict(t=ev['tax_bell'], type='thud', gain=0.85),
    dict(t=ev['wallet_crush'], type='impact', gain=0.9),
]

# Scene 6: IHSG Berdarah
sfx += [
    dict(t=ev['ihsg_dive'], type='rise', d=1.8, f0=720, f1=140, gain=0.9),
    dict(t=ev['panic_bell'], type='bell', f=587, gain=0.7),
    dict(t=ev['sarcasm_quote'], type='thud', gain=0.85),
]

# Scene 7: Food Estate & Karhutla
sfx += [
    dict(t=ev['fire_ignite'], type='shimmer', d=2.2, gain=0.85),
    dict(t=ev['dead_crop'], type='thud', gain=0.8),
    dict(t=ev['smoke_boom'], type='impact', gain=0.9),
]

# Scene 8: Utang Rp 800T & BBM
sfx += [
    dict(t=ev['debt_count'], type='ticks', d=1.6, step=0.08, gain=0.85),
    dict(t=ev['bbm_lock'], type='thud', gain=0.85),
    dict(t=ev['fiscal_alarm'], type='bell', f=784, gain=0.75),
]

# Scene 9: Epilog Kesimpulan
sfx += [
    dict(t=ev['final_slam'], type='impact', gain=0.95),
    dict(t=ev['verdict_hit'], type='impact', gain=1.0),
    dict(t=ev['verdict_hit'], type='bell', f=587, gain=0.8),
    dict(t=ev['final_chord_hit'], type='sparkle', gain=0.6),
]

# Musik: 120 BPM, 30 bar (60 detik), progresi minor gelap mencekam
music = dict(
    bpm=120,
    bars=[
        'Dm', 'Bb', 'Gm', 'A',
        'Dm', 'Gm', 'Bb', 'A',
        'Dm', 'F',  'Gm', 'A',
        'Bb', 'Gm', 'Dm', 'A',
        'Dm', 'Bb', 'Gm', 'A',
        'Gm', 'Dm', 'Bb', 'A',
        'Dm', 'Gm', 'Bb', 'A',
        'Dm', 'Dm'
    ],
    breaks=[
        [4.8, 8.2],     # Senyap mencekam saat dokumen Operasi Mawar 1998 terbuka
        [24.0, 29.5],   # Senyap dramatis saat Palu Pajak PPN 12% menghantam
    ],
    build=[50.0, 53.0], # Riser drum roll menuju Epilog Kesimpulan
    final=58.2,
    final_chord='Dm',
    arp_from=4.5,
    hat_from=2.0,
    clap_from=2.0,
)

cues_data = dict(
    dur=60.0,
    fps=30,
    bounds=B,
    ev=ev,
    sfx=sfx,
    music=music,
)

with open('src/cues.json', 'w') as f:
    json.dump(cues_data, f, indent=2)

print('make_cues: cues.json 60.0s (9 scenes) berhasil dibuat!')
