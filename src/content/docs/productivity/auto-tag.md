---
title: Auto Tag & Collision Avoidance
description: Penataan tag pintar, algoritma anti-tumpang tindih, dan pengkategorian anotasi otomatis untuk seluruh elemen BIM.
---

Menyusun teks penunjuk (*Tags & Annotations*) agar tampak profesional dan rapi dalam standar gambar grafikal adalah seni yang memakan waktu. Fitur standar Revit kerap meletakkan tag langsung di titik pusat bounding-box geometri elemen, yang mengakibatkan **teks saling bertumpuk (overlap)** pada instalasi padat, seperti pemipaan mekanikal dan kabel ray di atap plafon.

Modul **Auto Tag** oleh Verixa memecahkan kendala ini melalui penerapan algoritma evaluasi ruang spasial 2D (*Spatial Quadrant Avoidance*) yang cerdas.

---

## Logika Penghindar Tumpang Tindih (Anti-Overlap Engine)

Ketika alat **Auto Tag** dijalankan pada tampilan *Floor Plan*, *Reflected Ceiling Plan (RCP)*, atau *Section*:
1. Mesin Verixa memetakan koordinat kotak batas (*Bounding Box*) dari setiap objek 3D fisik dan seluruh tag yang sudah eksis di lembaran pandangan (View).
2. Sistem mencari "ruang kosong terdekat" (*Nearest Void Area*) di sekitar elemen dengan jangkauan terpendek untuk menaruh kotak keterangan tag baru.
3. Jika dua atau lebih elemen (misal: pipa berjajar sejajar jarak dekat) membutuhkan penomoran berdampingan, sistem akan meletakkan label tag berderet secara simetris sejajar pada grid kuadran eksternal, lengkap dengan garis siku penunjuk (*Elbowed Leader Line*).

> [!TIP]
> **Kustomisasi Sudut Siku Leader**: Anda dapat menetapkan agar garis *Leader Line* selalu diarahkan ke sudut **45 Derajat**, **90 Derajat**, atau bebas bersilang dinamis demi memenuhi estetika standar gambar teknik perusahaan Anda.

---

## Spesialisasi Disiplin Ilmu

Alat ini dioptimalkan dengan seperangkat aturan prakonsolidasi yang dibedakan menurut disiplin proyek yang sedang terbuka:

### 1. Disiplin Arsitektur (Architectural & Interior)
* Otomasi tag untuk **Door & Window Schedule Tags** pada bukaan dinding.
* **Room & Space Tags** disempurnakan gar posisinya di pusat ruangan dan secara otomatis melompati perabotan besar (seperti Meja Konferensi atau Ranjang Kamar Tidur).
* Penataan tag tipe dinding, material finis lantai, dan partisi akustik.

### 2. Disiplin MEP (Mechanical, Electrical, Plumbing)
* Penataan parameter **Duct & Pipe Size, Elevation (Invert/Top Level), dan System Abbreviation**.
* Pengelompokan tag per unit *Air Terminal* (Grille/Diffuser), sprinkler medis, dan luminer lampu agar teksnya ditaruh di luar perimeter kerangka eternit (RCP Grid).

### 3. Disiplin Struktur (Structural Engineering)
* Penobatan nama dimensi baja profil pada kolom dan balok framing.
* Pemberian tanda pondasi (*Foundation Footing*) dan tag tulangan baja struktural (*Rebar Spacings & Type*) yang disusun rapi menjaganya dari tumpukan arsir penampang beton.

---

## Panduan Cepat (Quick Start)

1. Buka View aktif (Floor Plan, Section, atau Drafting View) di mana Anda ingin merapikan atau menambahkan tag elemen.
2. Klik tombol **Auto Tag** dari Ribbon Verixa Productivity.
3. Di dalam jendela opsi, centang kategori elemen apa saja yang ingin dilampiri (contoh: *Pipes, Pipe Fittings, Valves*).
4. Aktifkan centang pada **"Enable Collision Avoidance (Smart Offset)"** dan atur jarak batas spasi bebas (*Padding buffer*) minimum sekitar **2mm - 5mm** berskala plot.
5. Klik **Apply & Tag Components**. Tonton segenap keterangan gambar Anda seketika tertata secara sempurna dan simetris di sekeliling model instalasi Anda.
