import { BackButton } from '@/components/BackButton';
import { ImageSlideshow } from '@/components/ImageSlideshow';

const BATCH_SHEET_SLIDES = [
  { src: '/images/batch-sheet-maker-1.png', alt: 'Batch Sheet Maker Interface', caption: 'Panel Pembuatan Sheet & View Otomatis Massal' },
];

export default function BatchSheetMakerPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-white">
      <BackButton label="Back to Home" href="/" />

      <h1 className="text-4xl font-extrabold mb-4">Batch Sheet Maker</h1>
      <p className="text-xl text-gray-400 mb-10">
        Generate hundreds of sheets and views in Revit instantly using predefined templates or Excel data.
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        <section className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p>
            Batch Sheet Maker transforms the repetitive process of creating sheets into a single-click operation. Whether you need to generate sheets for each level, room, or based on an external Excel list, this tool handles it effortlessly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Interactive Showcase</h2>
          <ImageSlideshow images={BATCH_SHEET_SLIDES} />
        </section>
      </div>
    </div>
  );
}
