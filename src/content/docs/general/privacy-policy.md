---
title: Privacy Policy & Keamanan Data Proyek
description: Komitmen Verixa Suite dalam menjaga kerahasiaan kekayaan intelektual (IP), geometri 3D, dan integritas data lokal Anda.
---

Di **Verixa Suite**, kami memahami bahwa model BIM (Building Information Modeling), desain arsitektur, diagram struktur, dan instalasi mekanikal merupakan **Kekayaan Intelektual (Intellectual Property / IP)** bernilai luar biasa tinggi milik firma atau lembaga konstruksi Anda. 

Dokumen Kebijakan Privasi dan Keamanan ini merinci dengan jelas bagaimana perangkat lunak kami menangani data pada seluruh lingkungan operasi Revit Anda.

---

## 1. Zero Cloud Geometry Upload (Tanpa Pengiriman Geometri ke Cloud)

> [!IMPORTANT]
> **Jaminan Keamanan Geometri 3D & Model**: Seluruh proses komputasi, deteksi bentrokan (*clash detection*), rendering 3D preview (*Helix Toolkit*), pembuatan sheet masal, dan styling gambar **dilakukan 100% secara lokal pada prosesor & RAM komputer stasiun kerja (PC) Anda**.

Verixa Suite:
* **TIDAK PERNAH** mengompres, merekam, ataupun mengirimkan file model `.RVT`, `.RFA`, `.NWD`, `.IFC`, maupun potongan geometri apapun ke server eksternal, cloud developer, atau pihak ketiga mana pun.
* **TIDAK PERNAH** membaca ataupun memanipulasi parameter harga, RAB, atau rahasia komersial dalam model Anda selain yang diminta explicitly oleh fungsi alat (misal: mencetak schedule sheet ke dalam format gambar).

---

## 2. Pemanfaatan Revit Extensible Storage

Modul **Verixa Clash** menyimpan riwayat pemeriksaan bentrokan (*Clash Status history: New, Active, Reviewed, Resolved*) serta identitas elemen terkait langsung ke dalam kerangka struktur file Revit resmi dengan memanfaatkan teknologi **Autodesk Revit Extensible Storage**.
* Data riwayat ini melekat erat pada file proyek Anda (`.RVT`) secara tervirtualisasi dan diamankan oleh identifikasi spesifik.
* Data tersebut di-sync secara lokal bersama model pusat (*Worksharing Central Model*) di server kantor Anda (atau LAN lokal) tanpa melalui server Verixa eksternal.

---

## 3. Koleksi Data & Telemetry (Lisensi)

Satu-satunya transmisi data yang dilakukan oleh installer atau proses ekosistem Verixa Suite adalah proses verifikasi integritas **Lisensi Perpetual**, yang mencakup data teknis non-sensitif berikut:
* **Token Identifikasi Hardware (Hardware Hash Key):** Dipilih menggunakan kombinasi hash unik motherboard/prosesor untuk mencocokkan kode lisensi produk tanpa menyimpan data identitas pribadi pengguna.
* **Versi Revit & Build Number:** Guna menyelaraskan peluncuran pembaruan berlisensi yang sesuai dengan konfigurasi kernel Revit yang terpasang di mesin Anda.
* **Crash Logs & Diagnostic Telemetry (Opsional / Nonaktif secara default):** Apabila terjadi pengecekan kegagalan sistem (*exception catch*) yang fatal pada alat Verixa, pengguna akan diminta konfirmasi persetujuan terlebih dahulu sebelum file log kesalahan fungsi dikirim ke tim pengembang untuk analisa investigatif.

---

## 4. Kepatuhan & Standardisasi

Alat-alat pengembangan di bawah naungan Verixa Suite dikonstruksi memenuhi standar enkripsi tinggi dan patuh pada pedoman keamanan korporasi global:
* **ISO/IEC 27001 Ready Workflow:** Memenuhi kaidah pemrosesan lokal seutuhnya yang diatur dalam proyek-proyek infastruktur rahasia negara maupun pertahanan nasional.
* **Offline Deployment Ready:** Dukungan instalasi penuh di zona terisolasi TANPA KONEKSI INTERNET (*Air-Gapped Work environment*), yang bisa dikonfigurasikan dengan aktivasi lisensi via metode verifikasi USB Key / Offline Activation Challange-Response dari portal Verixa.

---

## 5. Pertanyaan Kepatuhan Hukum

Apabila divisi IT atau departemen hukum perusahaan Anda membutuhkan jaminan perjanjian non-disclosure (NDA) ataupun pemeriksaan audit kueri jaringan perangkat lunak sebelum penginstalan di server utama, harap hubungi divisi kepatuhan kami di:
* **Compliance Office:** `legal@verixabim.com`
