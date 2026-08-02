import { BackButton } from '@/components/BackButton';
import { ImageSlideshow } from '@/components/ImageSlideshow';

const SMART_TAG_SLIDES = [
  { src: '/images/smart-tag-1.png', alt: 'Smart Tag Settings Panel', caption: 'Panel Kontrol Utama Smart Tag & Konfigurasi Kategori' },
  { src: '/images/smart-tag-2.png', alt: 'Auto Dimensioning & Spot Elevation', caption: 'Penempatan Otomatis Dimensi Bangunan & Spot Elevation FFL' },
  { src: '/images/smart-tag-3.png', alt: 'Automatic Tag Placement', caption: 'Penataan Presisi Tag Pintu, Jendela & Ruangan Tanpa Overlap' },
  { src: '/images/smart-tag-4.png', alt: 'Clean Documentation', caption: 'Dokumentasi Gambar Kerja Rapi & Siap Cetak dalam Hitungan Detik' },
  { src: '/images/smart-tag-5.png', alt: 'Advanced Options', caption: 'Pengaturan Warna Preview & Opsi Simpangan Tag' },
];

export default function SmartTagPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-white">
      <BackButton label="Back to Home" href="/" />

      <h1 className="text-4xl font-extrabold mb-4">Smart Tag & Auto Annotation</h1>
      <p className="text-xl text-gray-400 mb-10">
        Automatically annotate your entire Revit model with precise, intelligent tags in seconds.
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        <section className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p>
            The Smart Tag tool eliminates hours of tedious manual tagging. By leveraging advanced geometric analysis, it automatically places Door, Window, Room, Wall tags, and dimensions in clear, readable positions without overlapping elements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Showcase</h2>
          <ImageSlideshow images={SMART_TAG_SLIDES} />
        </section>
      </div>
    </div>
  );
}
