---
title: Pengaturan Toleransi mm
description: Konfigurasi toleransi jarak bentrokan dalam milimeter untuk mengabaikan gesekan kecil atau persinggungan insulasi MEP yang normal.
---

Salah satu kelemahan utama dari pemindai clash geometri standar (termasuk fitur *Interfering Check* bawaan Revit lama) adalah kebosanan sistem dalam menghasilkan peringatan "positif-palsu" (*False Positives*). 

Jika dua objek menyentuh satu sama lain dalam posisi perapatan normal (contoh: pipa hydrant yang tertahan tegak menempel rata ke dinding beton dengan jarak 0 milimeter), pemindai kolot akan melaporkannya sebagai "Bentorkan Kritis". Hal ini menghasilkan laporan ribuan clash palsu yang menurunkan motivasi insinyur. 

Modul **Toleransi mm** Verixa Clash memberikan Anda tuas kendali numerik cerdas untuk menyisir kebencok minimal yang masuk akal di dunia nyata.

---

## Bagaimana Filter Toleransi Jarak Bekerja?

```mermaid
graph TD
    A["Deteksi Singgungan Bounding-Box Geometri"] --> B{"Apakah Jarak Overlap <= Toleransi mm?"}
    B -->|Ya (Contoh: Overlap Cuma 3mm)| C["Diabaikan (Auto-Clean / Exempted)"]
    B -->|Tidak (Contoh: Pipa Masuk Balok 45mm)| D["Daftarkan Sebagai Critical Clash (🔴)"]
```

Ketika nilai **Toleransi Milimeter (mm)** ditentukan di antarmuka Verixa:
1. Mesin penghitungan mengukur **Kedalaman Penetrasi Geometrik / Penetration Depth ($D_p$)** dari dua elemen beririsan secara 3D vektor aksen pas pas di tingkat milimeter desimal.
2. Apabila kedalaman persinggungan ($D_p$) ternyata berada di bawah angka ambang batas yang ditetapkan pengguna (contoh: toleransi diset di 5mm, sedangkan kedalaman kontak cuma 2.5mm), insiden tersebut langsung dianugerahi status **Ignored / Touch Clearance Safe** dan dibuang dari daftar laporan error utama.

---

## Rekomendasi Standar Nilai Toleransi Proyek (BIM Guidelines)

Berikut merupakan acuan rekomendasi penyetelan parameter toleransi milimeter yang umum dipedomani oleh BIM Manajer dalam beragam klasifikasi koordinasi proyek berskala Internasional (ISO 19650 Standards):

| Komparasi Disiplin Model | Batas Toleransi Disarankan | Alasan & Rasionalisasi Teknis |
| :--- | :---: | :--- |
| **MEP vs Struktur Beton (Pipa & Balok/Kolom)** | **0 mm - 5 mm** | Sangat sensitif; pelobangan beton berpenampang kritis harus dicetak dengan penetasan *Sleeves/Openings* formal. |
| **Duct HVAC & Insulated Pipes vs Plafon/Ceiling** | **15 mm - 25 mm** | Mengkompensasi gesekan lunak dari lapisan kapas aluminium terluar (insulation wrapping) yang مرن (fleksibel) di lapangan. |
| **Kabel Ray (Cable Tray) vs Dinding Partisi Drywall** | **10 mm - 20 mm** | Pemotongan papan gipsum umumnya dilakukan oleh teknisi gypsum paska pemasangan tray. |
| **Perabot Arsitek (Furniture / Sanitary) vs Lantai Finishing** | **5 mm - 10 mm** | Menghentikan alarm error saat kaki kursi atau bathtub menyelinap sedikit di lapisan ubin ubin marmer. |
| **Fasad Curtain Wall vs Struktur Lantai Beton Eksterior** | **25 mm - 50 mm** | Ruang spasi toleransi kedudukan anchor bracket aluminium di sisi tepi luar cor lantai beton. |

---

## Panduan Mengubah Nilai Toleransi

1. Buka jendela dialog **Verixa Clash** dari tab Ribbon utama.
2. Di bagian tengah panel bawah filter, temukan baki **"Clash Tolerance Settings (mm)"**.
3. Ketikkan angka milimeter mutlak (misalnya: `10.0` untuk 1 sentimeter), atau geser tuas *slider bar* sensitivitas yang interaktif.
4. Aktifkan juga opsi centang tambahan:
   * 🗹 **"Ignore Insulation Layers (Only Test Core Pipe / Duct)"**: Jika disahkan, mesin akan menghapus lapisan insulasi dari perhitungan tabrakan secara murni dan hanya mengujikan tabung besi korespondensi utamanya saja.
   * 🗹 **"Ignore Same-System Components"**: Mencegah pipa yang saling tersambung oleh elbow fitting dalam system name yang sama dilacak sebagai tabrakan antar-saudara.
5. Klik **Re-run Test**. Daftar problem bentrokan Anda kini berkurang signifikan menampakkan issue nyata yang mutlak didalam proyek saja!
