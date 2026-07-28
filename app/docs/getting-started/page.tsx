import Link from 'next/link';

export const metadata = {
  title: 'Getting Started | Verixa Suite Documentation',
  description: 'Welcome to the official Verixa Suite documentation for Autodesk Revit.',
};

export default function GettingStartedPage() {
  return (
    <article className="prose prose-invert max-w-none text-white">
      <h1 className="text-4xl font-extrabold mb-4 text-white">Getting Started</h1>
      <p className="text-xl text-gray-400 mb-8 leading-relaxed">
        Welcome to <strong>Verixa Suite</strong> — the professional productivity suite for Autodesk Revit.
      </p>

      <div className="space-y-8 text-gray-300">
        <section className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-3">What is Verixa Suite?</h2>
          <p className="leading-relaxed mb-4">
            Verixa Suite is a collection of high-performance tools built specifically for BIM professionals, architects, and engineers to eliminate repetitive tasks and streamline Revit workflows.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">Family Manager:</strong> Organize, search, and load Revit families instantly.</li>
            <li><strong className="text-white">Auto Annotation:</strong> Automatically generate tags and dimensions across complex views.</li>
            <li><strong className="text-white">Batch Sheet Maker:</strong> Create hundreds of sheets from Excel schedules in seconds.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Target Audience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-white mb-1">Architects & Designers</h3>
              <p className="text-sm text-gray-400">Speed up view creation, sheet generation, and family management.</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="font-semibold text-white mb-1">BIM Engineers & Coordinators</h3>
              <p className="text-sm text-gray-400">Standardize parameter data and automate batch sheet creation.</p>
            </div>
          </div>
        </section>

        <section className="pt-4 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Next Steps</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/download"
              className="px-6 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium text-center transition-colors"
            >
              Download Verixa Suite &rarr;
            </Link>
            <Link
              href="/support"
              className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium text-center transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
