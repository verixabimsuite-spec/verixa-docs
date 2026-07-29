import { BackButton } from '@/components/BackButton';

export default function FamilyManagerPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-white">
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

        <div className="w-full h-64 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center my-8 text-gray-500 font-medium">
          [ Screenshot Placeholder — Family Manager Interface ]
        </div>
      </div>
    </div>
  );
}
