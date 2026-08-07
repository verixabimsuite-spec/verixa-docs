"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'en' | 'id';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    'nav.docs': 'Documentation',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.support': 'Support',
    'nav.about': 'About',
    'nav.getStarted': 'Get Started',

    // Home
    'home.hero.title': 'Next-Generation\nRevit BIM Ecosystem',
    'home.hero.subtitle': 'Verixa Suite is a professional productivity suite for Autodesk Revit. Manage families, automate repetitive tasks, and improve documentation workflows.',
    'home.hero.cta.download': 'Download Now',
    'home.hero.cta.docs': 'Read Documentation',
    'home.features.title': 'Enterprise Productivity',
    'home.features.subtitle': 'Designed for Architects, BIM Engineers, and AEC Companies to dramatically increase Revit modeling speed.',
    'home.features.familyManager.title': 'Family Manager',
    'home.features.familyManager.desc': 'Organize, search, and load Revit families instantly. Cloud-synced and lightning fast.',
    'home.features.autoAnnotation.title': 'Auto Annotation',
    'home.features.autoAnnotation.desc': 'Automatically generate tags and dimensions for complex views with a single click.',
    'home.features.batchSheet.title': 'Batch Sheet Maker',
    'home.features.batchSheet.desc': 'Create hundreds of sheets from Excel schedules in seconds. No manual data entry.',
    'home.footer': '© 2026 Verixa Suite. All rights reserved.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the right plan for your BIM workflow.',
    'pricing.free.title': 'Free Trial',
    'pricing.free.duration': '14 Days',
    'pricing.free.desc': 'Perfect for testing Verixa Suite.',
    'pricing.perpetual.title': 'Perpetual License',
    'pricing.perpetual.duration': 'One-time',
    'pricing.perpetual.desc': 'Lifetime access to the current version with 1-year updates.',
    'pricing.subscription.title': 'Subscription',
    'pricing.subscription.duration': 'Monthly',
    'pricing.subscription.desc': 'Coming Soon. Flexible licensing for teams.',
    'pricing.cta': 'Get Started',
    'pricing.cta.buy': 'Buy Now via Lemon Squeezy',
    'pricing.cta.trial': 'Start 14-Day Free Trial',
    'pricing.guarantee': '🔒 Safe & Secure payment processed by Lemon Squeezy. Instant license key delivery.',
    'pricing.overlay.title': 'Pricing Coming Soon',
    'pricing.overlay.desc': 'Official commercial pricing & licensing plans have not been released yet. Stay tuned for updates!',
    'pricing.f.1': 'Full access to Family Manager',
    'pricing.f.2': 'Batch Sheet Maker',
    'pricing.f.3': 'Auto Annotation & Smart Tag',
    'pricing.f.4': 'Email Support',
    'pricing.p.1': 'Full access to all features',
    'pricing.p.2': 'No watermarks',
    'pricing.p.3': '1 Year of updates',
    'pricing.p.4': 'Priority Email Support',
    'pricing.mostPopular': 'Most Popular',

    // Pricing Matrix
    'matrix.badge': 'Feature Comparison',
    'matrix.title': 'License Feature Comparison Matrix',
    'matrix.subtitle': 'Compare Verixa Suite license packages according to the scale of your BIM team & projects.',
    'matrix.col.feature': 'FEATURE / CAPABILITY',
    'matrix.col.free': 'Free Trial (14 Days)',
    'matrix.col.perpetual': 'Perpetual (One-Time Payment)',
    
    'matrix.cat.family': 'Family Manager',
    'matrix.cat.smart': 'Smart Tag',
    'matrix.cat.batch': 'Batch Sheet',
    'matrix.cat.license': 'License & Support',
    
    'matrix.f1': '3D & 2D Real-time Family Preview',
    'matrix.f2': 'Instant Category & Parameter Filter',
    'matrix.f3': 'Drag and Drop into Revit View',
    'matrix.f4': 'Network & Cloud Drive Scanning',
    'matrix.f4.val1': 'Limited',
    'matrix.f4.val2': 'Local & Company Server Only',
    
    'matrix.s1': 'Auto Room, Door & Window Tagging',
    'matrix.s2': 'Auto Exterior Building Dimensions',
    'matrix.s3': 'Auto Spot Elevation Alignment',
    
    'matrix.b1': 'Automated Sheet & View Generation',
    'matrix.b2': 'Excel Data Import / Ingestion',
    
    'matrix.l1': 'License Validity',
    'matrix.l1.val1': '14 Days',
    'matrix.l1.val2': 'Lifetime',
    'matrix.l2': 'Priority Technical Support',
    'matrix.l2.val2': '24/7 Email',
    'matrix.l3': 'Future Revit Version Updates',
    'matrix.l3.val2': '1 Year Free',

    // Download
    'download.title': 'Download Verixa Suite',
    'download.subtitle': 'Get the latest version for Autodesk Revit 2021-2027.',
    'download.version': 'Version 1.0.0',
    'download.releaseDate': 'Released on July 29, 2026 — Initial Release',
    'download.cta': 'Download for Windows',
    'download.installGuide.title': 'Installation Guide',
    'download.installGuide.steps': '1. Ensure Autodesk Revit is closed.\n2. Run the downloaded installer (.exe).\n3. Follow the on-screen instructions.\n4. Open Revit and navigate to the Verixa Suite tab.',
    'download.installGuide.link': 'Read full installation guide',
    'download.prevVersions.title': 'Previous Versions',
    'download.prevVersions.empty': 'This is the first official release of Verixa Suite. No previous versions available.',

    // Contact
    'contact.badge': 'Get In Touch',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions about licensing, enterprise deployment, or technical support? Send us a message!',
    'contact.direct': 'Direct Contact',
    'contact.email': 'Support Email',
    'contact.github': 'GitHub Repository',

    // Support
    'support.title': 'Support & Documentation',
    'support.subtitle': 'Get support, report bugs, or request new features.',
    'support.email.title': 'Email Support',
    'support.email.desc': 'Contact our technical team directly at verixaidn@gmail.com',
    'support.email.cta': 'Send Email',
    'support.docs.title': 'Documentation',
    'support.docs.desc': 'Read our comprehensive guides and API references.',
    'support.docs.cta': 'Read Docs',
    'support.bug.title': 'Report a Bug',
    'support.bug.desc': 'Found an issue? Let us know so we can fix it.',
    'support.bug.cta': 'Report Issue',
    'support.feature.title': 'Request Feature',
    'support.feature.desc': 'Have an idea to improve Verixa Suite?',
    'support.feature.cta': 'Submit Request',
    'support.feature.cta': 'Submit Request',
    'support.faq.title': 'Frequently Asked Questions',
    'support.faq.desc': 'Find quick answers to common questions about licensing, installation, and usage.',
    'support.faq.cta': 'View FAQ',
    'support.faq.badge': 'FAQ & Help',
    'support.faq.subtitle': 'Find complete answers about the capabilities, compatibility, and usage of Verixa BIM Suite.',

    // About
    'about.title': 'About Verixa Suite',
    'about.subtitle': 'We build next-generation tools to solve the most complex workflow challenges in Autodesk Revit.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To empower BIM professionals with automation tools that eliminate repetitive tasks, allowing them to focus on design, engineering, and high-value coordination.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become the industry standard productivity ecosystem for Revit users globally, seamlessly integrating data management with model coordination.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Verixa Suite was born out of frustration. As BIM Coordinators and Engineers, we spent thousands of hours manually tagging elements, creating sheets, and organizing messy family libraries.',
    'about.story.p2': 'We realized that the out-of-the-box tools were not enough for enterprise-scale projects. So, we started building our own internal scripts. What started as a few macros quickly evolved into a comprehensive suite of professional plugins.',
    'about.story.p3': 'Today, Verixa Suite is designed from the ground up for performance, stability, and ease of use—helping AEC companies worldwide deliver projects faster.',

    // FAQ
    'faq.q1.q': 'Which versions of Autodesk Revit are supported by Verixa Suite?',
    'faq.q1.a': 'Verixa Suite fully supports Autodesk Revit versions 2021, 2022, 2023, 2024, 2025, 2026, up to 2027 (64-bit) on both Windows 10 and Windows 11.',
    'faq.q1.c': 'Compatibility',
    'faq.q2.q': 'Can Family Manager read RFAs from a local server / Cloud network?',
    'faq.q2.a': 'Yes! You can connect RFA family folders on your Local Network (NAS/Office Server), Google Drive, OneDrive, or Dropbox. Verixa will automatically scan and generate thumbnail previews lightning fast.',
    'faq.q2.c': 'Family Manager',
    'faq.q3.q': 'How does Smart Tag & Auto Annotation work?',
    'faq.q3.a': 'Smart Tag automatically analyzes the geometry of rooms, walls, doors, and windows. The system then places Room Tags, Door/Window Tags, Spot Elevations, and Dimension lines precisely without clashing with the Crop Region lines.',
    'faq.q3.c': 'Smart Tag',
    'faq.q4.q': 'Do I need an internet connection to use Verixa Suite?',
    'faq.q4.a': 'Not always. Verixa licenses are designed to work offline after successful initial activation. You can still use all family mapping, auto tag, and batch sheet features without an internet connection.',
    'faq.q4.c': 'Licensing',
    'faq.q5.q': 'Is there a Free Trial available?',
    'faq.q5.a': 'Yes! We provide a full 14-day free trial without the need for a credit card so you can test all features on your real projects.',
    'faq.q5.c': 'Licensing',
    'faq.q6.q': 'What if I need technical support or encounter an issue?',
    'faq.q6.a': 'Our support team is ready to help via Email & WhatsApp. We also provide comprehensive documentation guides along with step-by-step video tutorials.',
    'faq.q6.c': 'Support'
  },
  id: {
    // Navbar
    'nav.docs': 'Dokumentasi',
    'nav.features': 'Fitur',
    'nav.pricing': 'Harga',
    'nav.download': 'Unduh',
    'nav.support': 'Dukungan',
    'nav.about': 'Tentang',
    'nav.getStarted': 'Mulai Sekarang',

    // Home
    'home.hero.title': 'Ekosistem BIM Revit\nGenerasi Berikutnya',
    'home.hero.subtitle': 'Verixa Suite adalah suite produktivitas profesional untuk Autodesk Revit. Kelola families, otomatiskan tugas berulang, dan tingkatkan alur kerja dokumentasi Anda.',
    'home.hero.cta.download': 'Unduh Sekarang',
    'home.hero.cta.docs': 'Baca Dokumentasi',
    'home.features.title': 'Produktivitas Tingkat Enterprise',
    'home.features.subtitle': 'Dirancang untuk Arsitek, BIM Engineer, dan Perusahaan AEC untuk meningkatkan kecepatan pemodelan Revit secara dramatis.',
    'home.features.familyManager.title': 'Family Manager',
    'home.features.familyManager.desc': 'Atur, cari, dan muat Revit families seketika. Tersinkronisasi cloud dan sangat cepat.',
    'home.features.autoAnnotation.title': 'Auto Annotation',
    'home.features.autoAnnotation.desc': 'Secara otomatis buat tag dan dimensi untuk tampilan kompleks hanya dengan satu klik.',
    'home.features.batchSheet.title': 'Batch Sheet Maker',
    'home.features.batchSheet.desc': 'Buat ratusan sheet dari jadwal Excel dalam hitungan detik. Tanpa input data manual.',
    'home.footer': '© 2026 Verixa Suite. Seluruh hak cipta dilindungi.',

    // Pricing
    'pricing.title': 'Harga Sederhana & Transparan',
    'pricing.subtitle': 'Pilih paket yang tepat untuk alur kerja BIM Anda.',
    'pricing.free.title': 'Uji Coba Gratis',
    'pricing.free.duration': '14 Hari',
    'pricing.free.desc': 'Sempurna untuk mencoba Verixa Suite.',
    'pricing.perpetual.title': 'Lisensi Perpetual',
    'pricing.perpetual.duration': 'Sekali Bayar',
    'pricing.perpetual.desc': 'Akses seumur hidup ke versi saat ini dengan pembaruan 1 tahun.',
    'pricing.subscription.title': 'Langganan',
    'pricing.subscription.duration': 'Bulanan',
    'pricing.subscription.desc': 'Segera hadir. Lisensi fleksibel untuk tim.',
    'pricing.cta': 'Mulai Sekarang',
    'pricing.cta.buy': 'Beli Sekarang via Lemon Squeezy',
    'pricing.cta.trial': 'Mulai Uji Coba Gratis 14 Hari',
    'pricing.guarantee': '🔒 Pembayaran aman diproses oleh Lemon Squeezy. Pengiriman lisensi instan 100%.',
    'pricing.overlay.title': 'Harga Segera Hadir',
    'pricing.overlay.desc': 'Paket harga komersial dan lisensi resmi belum dirilis. Pantau terus pembaruannya!',
    'pricing.f.1': 'Akses penuh ke Family Manager',
    'pricing.f.2': 'Pembuat Sheet Massal',
    'pricing.f.3': 'Anotasi Otomatis & Smart Tag',
    'pricing.f.4': 'Dukungan Email',
    'pricing.p.1': 'Akses penuh ke semua fitur',
    'pricing.p.2': 'Tanpa watermark',
    'pricing.p.3': 'Pembaruan gratis 1 Tahun',
    'pricing.p.4': 'Dukungan Email Prioritas',
    'pricing.mostPopular': 'Paling Populer',

    // Pricing Matrix
    'matrix.badge': 'Perbandingan Fitur',
    'matrix.title': 'Matriks Perbandingan Fitur Lisensi',
    'matrix.subtitle': 'Bandingkan paket lisensi Verixa Suite sesuai dengan skala tim & proyek BIM Anda.',
    'matrix.col.feature': 'FITUR / KEMAMPUAN',
    'matrix.col.free': 'Uji Coba Gratis (14 Hari)',
    'matrix.col.perpetual': 'Perpetual (Sekali Bayar)',
    
    'matrix.cat.family': 'Family Manager',
    'matrix.cat.smart': 'Smart Tag',
    'matrix.cat.batch': 'Batch Sheet',
    'matrix.cat.license': 'Lisensi & Dukungan',
    
    'matrix.f1': 'Pratinjau Family 3D & 2D Real-time',
    'matrix.f2': 'Filter Kategori & Parameter Instan',
    'matrix.f3': 'Seret dan Lepas ke Revit View',
    'matrix.f4': 'Pemindaian Network & Cloud Drive',
    'matrix.f4.val1': 'Terbatas',
    'matrix.f4.val2': 'Hanya Server Lokal & Perusahaan',
    
    'matrix.s1': 'Tag Otomatis Ruangan, Pintu & Jendela',
    'matrix.s2': 'Dimensi Otomatis Bangunan Eksterior',
    'matrix.s3': 'Penyelarasan Spot Elevation Otomatis',
    
    'matrix.b1': 'Pembuatan Sheet & View Otomatis',
    'matrix.b2': 'Impor / Ingesti Data Excel',
    
    'matrix.l1': 'Masa Berlaku Lisensi',
    'matrix.l1.val1': '14 Hari',
    'matrix.l1.val2': 'Seumur Hidup',
    'matrix.l2': 'Dukungan Teknis Prioritas',
    'matrix.l2.val2': 'Email 24/7',
    'matrix.l3': 'Pembaruan Versi Revit Mendatang',
    'matrix.l3.val2': 'Gratis 1 Tahun',

    // Download
    'download.title': 'Unduh Verixa Suite',
    'download.subtitle': 'Dapatkan versi terbaru untuk Autodesk Revit 2021-2027.',
    'download.version': 'Versi 1.0.0',
    'download.releaseDate': 'Dirilis pada 29 Juli 2026 — Rilis Perdana',
    'download.cta': 'Unduh untuk Windows',
    'download.installGuide.title': 'Panduan Instalasi',
    'download.installGuide.steps': '1. Pastikan Autodesk Revit sudah ditutup.\n2. Jalankan installer yang telah diunduh (.exe).\n3. Ikuti instruksi di layar.\n4. Buka Revit dan navigasi ke tab Verixa Suite.',
    'download.installGuide.link': 'Baca panduan instalasi lengkap',
    'download.prevVersions.title': 'Versi Sebelumnya',
    'download.prevVersions.empty': 'Ini adalah rilis resmi pertama Verixa Suite. Belum ada versi sebelumnya.',

    // Contact
    'contact.badge': 'Hubungi Kami',
    'contact.title': 'Kontak Kami',
    'contact.subtitle': 'Ada pertanyaan tentang lisensi, penerapan untuk perusahaan, atau dukungan teknis? Kirimkan pesan kepada kami!',
    'contact.direct': 'Kontak Langsung',
    'contact.email': 'Email Dukungan',
    'contact.github': 'Repositori GitHub',
    
    // Support
    'support.title': 'Dukungan & Dokumentasi',
    'support.subtitle': 'Dapatkan dukungan, laporkan bug, atau ajukan fitur baru.',
    'support.email.title': 'Dukungan Email',
    'support.email.desc': 'Hubungi tim teknis kami langsung di verixaidn@gmail.com',
    'support.email.cta': 'Kirim Email',
    'support.docs.title': 'Dokumentasi',
    'support.docs.desc': 'Baca panduan lengkap dan referensi API kami.',
    'support.docs.cta': 'Baca Dokumen',
    'support.bug.title': 'Laporkan Bug',
    'support.bug.desc': 'Menemukan masalah? Beri tahu kami agar bisa diperbaiki.',
    'support.bug.cta': 'Laporkan Masalah',
    'support.feature.title': 'Ajukan Fitur',
    'support.feature.desc': 'Punya ide untuk meningkatkan Verixa Suite?',
    'support.feature.cta': 'Kirim Permintaan',
    'support.faq.title': 'Pertanyaan yang Sering Diajukan',
    'support.faq.desc': 'Temukan jawaban cepat untuk pertanyaan umum tentang lisensi, instalasi, dan penggunaan.',
    'support.faq.cta': 'Lihat FAQ',
    'support.faq.badge': 'FAQ & Bantuan',
    'support.faq.subtitle': 'Temukan jawaban lengkap seputar kemampuan, kompatibilitas, dan penggunaan Verixa BIM Suite.',

    // About
    'about.title': 'Tentang Verixa Suite',
    'about.subtitle': 'Kami membangun alat generasi berikutnya untuk menyelesaikan tantangan alur kerja paling kompleks di Autodesk Revit.',
    'about.mission.title': 'Misi Kami',
    'about.mission.desc': 'Memberdayakan profesional BIM dengan alat otomasi yang menghilangkan tugas berulang, sehingga mereka dapat fokus pada desain, rekayasa, dan koordinasi bernilai tinggi.',
    'about.vision.title': 'Visi Kami',
    'about.vision.desc': 'Menjadi ekosistem produktivitas standar industri bagi pengguna Revit di seluruh dunia, mengintegrasikan manajemen data dengan koordinasi model secara seamless.',
    'about.story.title': 'Cerita Kami',
    'about.story.p1': 'Verixa Suite lahir dari rasa frustrasi. Sebagai BIM Coordinator dan Engineer, kami menghabiskan ribuan jam secara manual untuk menandai elemen, membuat sheet, dan mengorganisir library family yang berantakan.',
    'about.story.p2': 'Kami menyadari bahwa alat bawaan tidak cukup untuk proyek berskala enterprise. Maka kami mulai membangun skrip internal sendiri. Yang awalnya hanya beberapa makro, berkembang pesat menjadi suite plugin profesional yang komprehensif.',
    'about.story.p3': 'Hari ini, Verixa Suite dirancang dari awal untuk performa, stabilitas, dan kemudahan penggunaan—membantu perusahaan AEC di seluruh dunia menyelesaikan proyek lebih cepat.',

    // FAQ
    'faq.q1.q': 'Versi Autodesk Revit berapa saja yang didukung oleh Verixa Suite?',
    'faq.q1.a': 'Verixa Suite mendukung Autodesk Revit versi 2021, 2022, 2023, 2024, 2025, 2026, hingga 2027 (64-bit) secara penuh baik di Windows 10 maupun Windows 11.',
    'faq.q1.c': 'Kompatibilitas',
    'faq.q2.q': 'Apakah Family Manager bisa membaca RFA dari jaringan server lokal / Cloud?',
    'faq.q2.a': 'Ya! Anda dapat menghubungkan folder family RFA di Local Network (NAS/Server kantor), Google Drive, OneDrive, atau Dropbox. Verixa akan secara otomatis memindai dan membuat preview thumbnail dengan sangat cepat.',
    'faq.q2.c': 'Family Manager',
    'faq.q3.q': 'Bagaimana cara kerja Smart Tag & Auto Annotation?',
    'faq.q3.a': 'Smart Tag menganalisis geometri ruangan, dinding, pintu, dan jendela secara otomatis. Sistem lalu menempatkan Room Tag, Door/Window Tag, Spot Elevation, serta garis Dimensi secara presisi tanpa tumpang-tindih (clashing) dengan garis Crop Region.',
    'faq.q3.c': 'Smart Tag',
    'faq.q4.q': 'Apakah saya membutuhkan koneksi internet untuk menggunakan Verixa Suite?',
    'faq.q4.a': 'Tidak selalu. Lisensi Verixa didesain untuk bekerja secara offline setelah aktivasi awal berhasil. Anda tetap bisa menggunakan semua fitur pemetaan family, auto tag, dan batch sheet tanpa koneksi internet.',
    'faq.q4.c': 'Lisensi',
    'faq.q5.q': 'Apakah tersedia uji coba gratis (Free Trial)?',
    'faq.q5.a': 'Ya! Kami menyediakan uji coba gratis penuh selama 14 hari tanpa perlu kartu kredit sehingga Anda dapat menguji semua fitur di proyek nyata Anda.',
    'faq.q5.c': 'Lisensi',
    'faq.q6.q': 'Bagaimana jika saya memerlukan bantuan teknis atau menemukan kendala?',
    'faq.q6.a': 'Tim dukungan kami siap membantu via Email & WhatsApp. Kami juga menyediakan dokumentasi panduan lengkap beserta video tutorial langkah demi langkah.',
    'faq.q6.c': 'Dukungan'
  },
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = (key: string): string => {
    return translations[locale][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
