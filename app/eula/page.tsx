import { Award } from 'lucide-react';
import { BackButton } from '@/components/BackButton';

export default function EULAPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <BackButton label="Back to Home" />
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Award size={16} /> License Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">End User License Agreement (EULA)</h1>
          <p className="text-gray-400 text-sm">Official EULA for Verixa BIM Suite software add-in for Autodesk Revit.</p>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 space-y-8 text-gray-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Software License</h2>
            <p>
              This End User License Agreement ("EULA") is a legal agreement between you (an individual or single entity) and Verixa BIM Suite for the software product accompanying this EULA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Perpetual Licensing Rights</h2>
            <p>
              A Perpetual License entitles you to use the purchased software version indefinitely on designated workstations. Software updates and technical support are included for the initial 12-month period from purchase date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              All title, copyright, and intellectual property rights in and to the software add-in belong exclusively to Verixa BIM Suite.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
