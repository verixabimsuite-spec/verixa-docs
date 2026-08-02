import { BackButton } from '@/components/BackButton';
import { ImageSlideshow } from '@/components/ImageSlideshow';

const FAMILY_MANAGER_SLIDES = [
  { src: '/images/family-manager-1.png', alt: 'Family Manager Panel', caption: 'Tampilan Utama Floating Panel Family Manager di Revit' },
  { src: '/images/family-manager-2.png', alt: 'Search & Category Filter', caption: 'Pencarian Instan & Filter Berdasarkan Kategori BIM' },
  { src: '/images/family-manager-3.png', alt: 'Visual Previews & Detail', caption: 'Preview 3D & Detail Metadata Informasi RFA' },
  { src: '/images/family-manager-4.png', alt: 'Batch Loading & Highlight', caption: 'Kemudahan Load Banyak Family & Highlight di Browser' },
  { src: '/images/family-manager-5.png', alt: 'Network & Cloud Folder Sync', caption: 'Sinkronisasi Folder Server Jarak Jauh & Cloud Storage' },
  { src: '/images/family-manager-6.png', alt: 'Advanced Settings & Customization', caption: 'Pengaturan Kustomisasi & Manajemen Lisensi' },
];

export default function FamilyManagerPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-white">
      <BackButton label="Back to Documentation" href="/docs/getting-started" />

      <h1 className="text-4xl font-extrabold mb-4">Family Manager</h1>
      <p className="text-xl text-gray-400 mb-10">
        Organize, search, and load Revit families instantly across your local network or cloud storage.
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        <section className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p>
            The Family Manager is a lightning-fast Revit plugin that replaces traditional, slow file dialogs.
            It provides visual previews, instant search filtering, and drag-and-drop capability for your BIM family library.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Instant Search & Filter:</strong> Search thousands of RFA files by category, parameter, or keyword in milliseconds.</li>
            <li><strong>Cloud & Local Sync:</strong> Connect seamlessly to shared network drives, OneDrive, or cloud repositories.</li>
            <li><strong>Batch Loading:</strong> Load multiple family types into your active Revit project simultaneously.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Workflow</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Open the <strong>Verixa Suite</strong> tab in Autodesk Revit.</li>
            <li>Click <strong>Family Manager</strong> to launch the floating panel.</li>
            <li>Search or filter families visually using thumbnails.</li>
            <li>Drag and drop the desired family directly into your model view.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Showcase</h2>
          <ImageSlideshow images={FAMILY_MANAGER_SLIDES} />
        </section>
      </div>
    </div>
  );
}
