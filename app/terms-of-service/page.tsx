import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <FileText size={16} /> Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: July 29, 2026</p>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 space-y-8 text-gray-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Verixa BIM Suite, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. License Grant</h2>
            <p>
              Subject to these Terms, Verixa BIM Suite grants you a limited, non-exclusive, non-transferable license to use the software add-in with Autodesk Revit software on designated workstations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Restrictions</h2>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-400">
              <li>Reverse engineer, decompile, or disassemble the binary DLL files.</li>
              <li>Rent, lease, sub-license, or redistribute the software to third parties.</li>
              <li>Bypass or tamper with software activation or hardware key security mechanisms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
            <p>
              Verixa BIM Suite is provided "as is" without warranty of any kind. In no event shall Verixa BIM Suite be liable for any indirect, consequential, or incidental damages arising from software usage.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
