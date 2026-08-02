import { BackButton } from '@/components/BackButton';
import { AppImage } from '@/components/AppImage';

export default function SmartTagPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-white">
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
          <h2 className="text-2xl font-bold text-white mb-6">Features Showcase</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40">
              <AppImage src="/images/smart-tag-1.png" alt="Smart Tag Settings" width={1200} height={800} className="w-full h-auto" />
              <div className="p-4 text-center text-sm text-gray-400">Smart Tag Control Panel</div>
            </div>
            <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40">
              <AppImage src="/images/smart-tag-2.png" alt="Auto Dimensioning" width={1200} height={800} className="w-full h-auto" />
              <div className="p-4 text-center text-sm text-gray-400">Automatic Dimensions and Spot Elevations</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40">
                  <AppImage src="/images/smart-tag-3.png" alt="Tag Placement" width={600} height={400} className="w-full h-auto" />
                </div>
                <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40">
                  <AppImage src="/images/smart-tag-4.png" alt="Clean Documentation" width={600} height={400} className="w-full h-auto" />
                </div>
                <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40 md:col-span-2">
                  <AppImage src="/images/smart-tag-5.png" alt="Advanced Options" width={1200} height={800} className="w-full h-auto" />
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
