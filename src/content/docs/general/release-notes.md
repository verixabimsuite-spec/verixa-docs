---
title: Release Notes & Changelog
description: Riwayat pembaruan fungsionalitas, peningkatan performa, dan log perbaikan sistem Verixa Suite.
---

Berikut adalah ringkasan riwayat rilis pembaruan ekosistem **Verixa Suite**. Kami senantiasa menyempurnakan performa algoritma internal agar alur kerja Revit Anda tetap stabil dan secepat kilat.

---

## [v1.4.0] - 2026-07-25 (Latest Release)

### ✨ Peningkatan Fitur Baru (New Features)
* **Verixa Productivity (Family Manager):** Peningkatan mesin pratinjau 3D menggunakan pustaka terbaru **Helix Toolkit 3D Direct3D 11**. Memindai 500+ file RFA ekstensial kini 3x lebih cepat tanpa keterikatan pada proses RAM utama Revit.
* **Verixa Clash (Smart Grid Tagging):** Penambahan kecerdasan identifikasi offset grid (misalnya: `"Grid A-3 (Offset +450mm) - Lantai 2"`). Laporan lapangan kini menjadi sangat presisi dan instan.
* **Verixa Layout (Elevation Depth-Styling):** Algoritma *Depth Cueing override* otomatis dengan 4 tingkat kehalusan kontras (Foreground, Mid-ground, Background, Distant Silhouette) untuk standar arsitektur profesional.

### ⚡ Performa & Optimisasi
* **Extensible Storage Sync:** Optimisasi pengiriman paket data kecil (*chunking*) saat menyimpan status clash dalam model pusat (*Central Worksharing Model*), meminimalisir delay saat tim melakukan *Sync with Central*.
* **Batch Sheet Maker UI:** Antarmuka WPF baru dengan fitur pencarian cepat (*Quick Filter search box*) dan impor data dari format Excel MODERN (`.XLSX` dan `.CSV`).
* **Auto Tag:** Resolusi bentrokan tag otomatis dinavigasi ulang menggunakan metode kuadran spasial yang memperpendek jarak garis penunjuk (*Leader line*).

### 🐛 Perbaikan Bug (Bug Fixes)
* Memperbaiki kendala kegagalan render warna kategori pada panduan *CategoryColorProvider.cs* ketika berhadapan dengan kategori kustom yang tidak diindeks di Revit 2024+.
* Perbaikan *memory leak* minor saat menutup dialog Bulk Edit Window setelah menyusun lebih dari 250 lembar sheet berantai.

---

## [v1.3.2] - 2026-05-12

* **Dukungan Revit 2026:** Integrasi kernel awal dan kompatibilitas API penuh untuk Autodesk Revit 2026.
* **Auto-CTB Simulator:** Ditambahkan 8 preset palet cetak (ISO Standard, AIA Engineering, Minimalist Grayscale, Bold Outline Architecture).
* **Clash Detection:** Penambahan filter pengecualian (*Exclusion Rule*) untuk elemen MEP yang bersinggungan dengan elemen insulasi/penghisap suara berketebalan di bawah 5mm.
* **Perbaikan Sistem:** Penyegaran lisensi lokal offline di sistem yang menerapkan kebijakan pembatasan hak administrator tingkat ketat (GPO).

---

## [v1.2.0] - 2026-02-18

* **Rilis Perdana Verixa Layout Module:** Pengenalan alat pengembang presentasi visual dan pengaturan pen-weight standar gambar ekspor.
* **Batch Sheet Maker:** Mendukung pengisian otomatis parameter custom pada *Title Block* secara simultan dari sel baris spreadsheet.
* **In-App Clash Matrix:** Penambahan panel matriks interaksi antar disiplin sipil, arsitektur, elektrikal, dan mekanikal dengan kode warna hijau-kuning-merah yang intuitif.

---

> [!TIP]
> Untuk memperbarui Verixa Suite Anda ke versi `v1.4.0` tanpa kehilangan konfigurasi proyek lokal yang sedang berjalan, Anda cukup menjalankan installer terbaru (`VERIXA_Setup.exe`). Sistem instalasi akan menggantikan file inti secara aman dan mempertahankan database cadangan di direktori lokal Anda.
