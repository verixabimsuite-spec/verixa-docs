---
title: Frequently Asked Questions (FAQ)
description: Pertanyaan umum seputar instalasi, kompabilitas versi Revit, dan fitur Verixa Suite.
---

Berikut adalah jawaban atas pertanyaan yang paling sering diajukan oleh pengguna, BIM Coordinator, dan Manajer Proyek mengenai **Verixa Suite**.

---

## 1. Kompabilitas dan Sistem

### Versi Autodesk Revit apa saja yang didukung oleh Verixa Suite?
**Verixa Suite** dirancang dengan arsitektur multi-target modern yang kompatibel sepenuhnya dengan:
* **Autodesk Revit 2021** (Build 64-bit)
* **Autodesk Revit 2022**
* **Autodesk Revit 2023**
* **Autodesk Revit 2024**
* **Autodesk Revit 2025**
* **Autodesk Revit 2026** (Dukungan penuh untuk kernel API terbaru)

> [!NOTE]
> Satu file installer (`VERIXA_Setup.exe`) secara otomatis akan memuat dan mendistribusikan pustaka DLL ke seluruh versi Revit yang diinstal pada sistem Windows Anda tanpa perlu penginstalan terpisah.

### Apakah Verixa Suite membutuhkan spesifikasi komputer khusus?
Tidak. Selama stasiun kerja atau laptop Anda mampu menjalankan Autodesk Revit dengan baik, Verixa Suite akan beroperasi dengan sangat mulus. Modul 3D Preview kami menggunakan teknologi **Helix Toolkit** yang memanfaatkan akselerasi GPU murni untuk membaca geometri 3D, sehingga justru menghemat konsumsi RAM Revit Anda.

---

## 2. Lisensi dan Penggunaan

### Apakah Verixa Suite berbasis langganan (Subscription)?
**Tidak.** Kami memahami ketidaknyamanan beban biaya tahunan atau bulanan yang terus meningkat. Seluruh produk Verixa Suite ditawarkan dengan skema **Lisensi Perpetual** (Bayar sekali untuk kepemilikan seumur hidup pada versi rilis yang Anda beli).

### Apakah satu lisensi bisa dipindahkan ke komputer lain?
Ya! Sistem manajemen lisensi Verixa memungkinkan Anda untuk melakukan *Deactivate License* pada komputer lama dan mengaktifkannya kembali di komputer baru (misalnya ketika mengganti stasiun kerja kantor atau laptop proyek) dalam beberapa detik.

---

## 3. Alur Kerja & Ekosistem

### Bagaimana Verixa Clash berbeda dari Navisworks atau Autodesk Model Checker?
Keunggulan utama **Verixa Clash** adalah kemampuannya melakukan pemeriksaan bentrokan *secara real-time murni di dalam antarmuka (UI) Revit*. 
* Anda tidak perlu meluangkan waktu berjam-jam untuk mengeksport file `.NWC` / `.NWD` ke software eksternal.
* Anda dapat memperbaiki (*resolve*) model secara langsung saat bentrokan disorot (isolate visualization).
* Status pemeriksaan disimpan dengan aman langsung di dalam database file `.RVY` atau Central Model Anda berkat teknologi **Worksharing Extensible Storage**.

### Apakah Verixa membutuhkan koneksi internet konstan untuk berfungsi?
Tidak. Koneksi internet hanya dibutuhkan sesaat ketika proses **aktivasi pertama kali**. Setelah teraktivasi, Verixa Suite beroperasi **100% offline**, menjaga keamanan kerahasiaan data proyek sensitif atau di lokasi site yang memiliki konektivitas terbatas.

---

## 4. Bantuan dan Support

### Di mana saya bisa meminta bantuan atau melaporkan bug jika terjadi kesalahan pemrosesan di Revit?
Pengguna resmi paket Perpetual berhak atas tim dukungan teknis (*Technical Support*) prioritas via email dan forum Discord komunitas BIM kami.
* **Support Email:** `support@verixabim.com`
* **Dokumentasi Kendala:** Harap sertakan tangkapan layar, file log Verixa (`%APPDATA%\Verixa\logs`), serta spesifikasi versi Revit Anda saat mengajukan tiket bantuan.
