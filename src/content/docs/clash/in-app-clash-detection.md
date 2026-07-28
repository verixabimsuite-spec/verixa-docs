---
title: In-App Clash Detection & Matrix
description: Pemeriksaan bentrokan langsung di antarmuka Revit tanpa perlu eksport ke Navisworks, indikator warna, dan matriks antar disiplin.
---

**In-App Clash Detection** dari Verixa adalah terobosan sistem validasi geometri inter-disipliner yang memungkinkan tim BIM membedahi titik bentrokan langsung dalam layar kanvas 3D Autodesk Revit, memberikan umpan balik koreksi instan saat proses desain sedang berjalan.

> [!IMPORTANT]
> **Bebas Ekspor Navisworks**: Karena pemrosesan tidak menuntut file Anda diekspor menjadi format `.NWC` maupun `.NWD` berjam-jam terlebih dahulu, kesalahan dapat terdeteksi dan *dilakukan resolve langsung di tempat* oleh drafters terkait dalam sesaat.

---

## Panel Matriks Inter-Disiplin (Clash Matrix Table)

Salah satu keunikan antarmuka Verixa Clash adalah peragaan panel meja koordinasi interaktif dalam bentuk matriks berwarna bersunggungan (Cross-Testing Matrix Grid):

| Matriks Kategori | Structural Framing | Structural Columns | Walls & Partitions | Ceilings & Roof |
| :--- | :---: | :---: | :---: | :---: |
| **Ducts (HVAC)** | 🔴 **24 Clashes** | 🟢 **0 Clashes** | 🟡 **8 Need Review** | 🟢 **0 Clashes** |
| **Pipes & Plumbing** | 🔴 **12 Clashes** | 🔴 **3 Clashes** | 🟢 **0 Clashes** | 🟢 **0 Clashes** |
| **Cable Trays** | 🟢 **0 Clashes** | 🟢 **0 Clashes** | 🟢 **0 Clashes** | 🔴 **5 Clashes** |
| **Air Terminals** | 🟢 **0 Clashes** | 🟢 **0 Clashes** | 🟢 **0 Clashes** | 🟡 **14 Touch (2mm)** |

* 🟢 **Hijau (Clean / Passed):** Bebas dari bentrok atau persinggungan di bawah garis toleransi milimeter.
* 🟡 **Kuning (Minor Touch / Warning):** Persinggungan ringan (seperti insulasi tipis bersandar ke tembok atau sleeve penetrasi normal) yang siap diproklamasikan *Approved as Exception*.
* 🔴 **Merah (Critical Clash):** Tabrakan geometri keras yang menginterferensi kekuatan struktural atau memblokir laju instalasi fisik (misal: pipa besi bergaris tengah 150mm melubangi tepat di tengah balok anak).

---

## Isolasi Tampilan dan Visual Override (3D Color Coding)

Saat Anda mengklik salah satu kotak sel pada tabel matriks di atas (contoh: sel `Ducts vs Structural Framing` dengan 24 Clashes):
1. Verixa secara otomatis beralih ke mode **3D Isolate Viewport & Section Box Focus**.
2. Semua elemen yang tidak relevan dengan bentoran terpilih akan disembunyikan (*Temporary Hide / Half-Transparent Ghost mode*).
3. Objek utama pertama (Duct) diwarnai **Merah Menyala (Red Neon)**.
4. Objek pembanding kedua (Balok Struktur) diwarnai **Kuning Emas (Gold Highlight)**.
5. Anda disuguhi tombol navigasi instan: **"Next Clash &rarr;"** dan **"&larr; Previous Clash"** untuk melancong menyusuri satu demi satu daftar persoalan tanpa kelelahan mencari di view denah biasa.

---

## Langkah Menjalankan Kueri Pemindaian Clash

1. Buka tampilan 3D bebas (*3D Default View*) di dokumen Revit yang sudah mentautkan model lain (via *Link Revit* atau dalam file *Worksharing Central* yang sama).
2. Tekan icon **In-App Clash** pada Ribbon Verixa.
3. Di dalam tabel kolom Kiri (*Selection A*), pilih Kategori (misal: *All MEP Systems* atau pilih model link spesifik `MEP_TowerA.rvt`).
4. Di tabel kolom Kanan (*Selection B*), pilih Kategori tujuan (misal: *Structural Columns & Beams*).
5. (Opsional) Sesuaikan nilai batas **Toleransi mm** pada slider di atas.
6. Klik tombol besar: **"Run Clash Test Matrix"**. 
7. Hanya dalam hitungan detik, seluruh statistik laporan matriks akan bermekaran dan siap dinavigasi secara interaktif.
