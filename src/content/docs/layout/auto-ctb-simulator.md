---
title: Auto-CTB Simulator
description: Simulasi ketebalan pena cetak ala file CTB AutoCAD di dalam View Revit untuk verifikasi kualitas gambar kerja.
---

Bagi biro konsultan teknik maupun studo perancang yang beralih dari CAD konvensional ke platform BIM, salah satu keluhan terbesar adalah hilangnya visibilitas mudah atas pemetaan warna pena terhadap ketebalan garis cetak aktual (aturan standar file `.CTB` atau `.STB` pada AutoCAD).

**Auto-CTB Simulator** dari Verixa Layout mengizinkan pengguna untuk "memperagakan" secara interaktif dan presisi bagaimana seluruh elemen grafikal dalam view plan Anda akan tampak persis saat mendarat di lembaran fisik ataupun berkas ekspor PDF prasebar, langsung tanpa keluar dari jendela aplikasi Autodesk Revit!

---

## Bagaimana Auto-CTB Simulator Bekerja?

Alat simulator Verixa bertindak sebagai *Viewport Render Overlay & Graphic Override Modulating Driver*. Ketika fitur disematkan di dalam satu View:
1. Sistem membaca seluruh properti **Line Styles**, **Category Object Styles**, dan parameter pengaturan **Line Weights** (Skala 1 s.d. 16) yang ditetapkan di dalam model Revit Anda.
2. Melakukan interpolasi terstruktur mengonversikan palet warna tampilan standar komputer (RGB monitor) menjadi profil cetakan monochrome profesional, skala abu-abu teknis (*grayscale gradation*), ataupun pemetaan pen gaya CTB terkontrol.
3. Menayangkan tampilan ketebalan fisik nyata yang berskala dinamis sesuai perbandingan besaran skala penayangan gambar Anda (contoh: pemantauan line-weight untuk 1:50 vs 1:200).

> [!IMPORTANT]
> **Fungsi Non-Destructive**: Fitur simulasi CTB di Verixa adalah 100% aman dan tidak memodifikasi atau merombak nilai *Object Styles* atau material asli model bangunan Anda. Simulator hanya memberlakukan lapisan tampilan presentasi lokal pada View tersebut, yang bisa dinyalakan atau dimatikan kapan pun dengan satu tombol klik.

---

## 8 Preset Palet Cetak Standar Industri

Verixa menyediakan 8 pratinjau kombinasi gaya resep cetak siap pakai (Preset CTB Styles) yang paling sering dipersyaratkan oleh institusi konstruksi dan dinas bangunan dunia:

| Preset CTB Name | Deskripsi Visual & Penggunaan Utama |
| :--- | :--- |
| **1. AIA Engineering Monochrome** | Hitam tajam mutlak; memprioritaskan kontras line-weight berat pada struktur beton & baja bearing, dan ketebalan sangat halus untuk notasi dimensi/teks. |
| **2. ISO Standard Mechanical** | Palet hitam-putih komposit untuk sistem MEP; memisahkan hierarki tebal jalur pipa eksis berlawanan dengan gambar arsitektur berlatar abu-abu terang (*Halftone Background*). |
| **3. Minimalist Nordic Grayscale** | Gradasi estetis ala Skandinavia bergaya lunak dan elegan; memanfaatkan 16 spektrum abu-abu netral untuk denah penjualan atau presentasi klien. |
| **4. Bold Outline Architecture** | Menerapkan ketebalan pena berat eksponensial secara spesifik hanya pada *Cut-Line / Lapisan Irisan Dinding dan Lantai*, memberi efek gambar grafis dramatik layaknya ilustrator grafis profesional. |
| **5. Municipal Blueprint Style** | Pratinjau inverted bernuansa latar biru navy pekat dengan garis gambar seputih salju untuk review estetika antik bergaya blueprint klasik. |
| **6. High-Contrast Site Engineering** | Untuk perencanaan tapak luas, topografi kontur jalan tanah bergradasi 3 warna pena berketebalan terinci sesuai tinggi muka tanah (m dpl). |
| **7. MEP Systems Color Highlight** | Mengaburkan seluruh bangunan gedung menjadi latar abu-abu pudar tipis (Pena 0.05mm) namun mempertentangkan jaringan HVAC, pipa hydrant, dan kelistrikan tetap dalam warna aslinya yang bercahaya tegak. |
| **8. Raw CAD CTB Translation** | Pemetaan 1-banding-1 yang berpatokan langsung pada kode tabel 255 indeks warna standar CAD (Color 1 Merah = 0.1mm, Color 2 Kuning = 0.2mm, dst.). |

---

## Cara Mengaktifkan Simulator pada View Aktif

1. Buka Denah Lantai (*Floor Plan*), Detail View, ataupun Denah Langit-langit (*RCP*) di ruang kerja Revit Anda.
2. Klik tombol **Auto-CTB Simulator** dari panel grup **Verixa Layout**.
3. Di jendela pratinjau yang terbuka di pojok layar, pilih **Preset CTB Style** yang ingin ditest (contoh: *MEP Systems Color Highlight*).
4. Tekan tombol tuas switch geser: **"Activate Simulator Overlay"**.
5. Kueri pandangan Anda seketika akan menyesuaikan diri menjadi demonstrasi cetakan presisi beresolusi tinggi.
6. Untuk mencetak gambar yang persis sama, cukup klik link eksekutor cepat **Export Direct to PDF** pada panel Verixa Anda, yang langsung mengirimkan visualisasi CTB akurat tersebut ke dokumen cetak sejati tanpa kehilangan setumpel garis pun.
