import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Shield size={16} /> Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: July 29, 2026</p>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800 space-y-8 text-gray-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Verixa BIM Suite ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your proprietary BIM models, architectural designs, and personal data. This Privacy Policy governs your use of the Verixa BIM Suite software add-in for Autodesk Revit and our official website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Zero Cloud Geometry Upload Guarantee</h2>
            <p className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 text-blue-200">
              <strong>100% Local Execution:</strong> Verixa BIM Suite operates entirely on your local workstation. We do NOT upload, record, transmit, or store your 3D building geometry, Revit project files (.RVT), family files (.RFA), or project parameters on external servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Data We Collect</h2>
            <p>To provide software licensing and technical support, we collect minimal non-sensitive data:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-400">
              <li><strong>Licensing Data:</strong> Hardware hash key (motherboard/CPU ID) and License Key for activation verification.</li>
              <li><strong>Support Data:</strong> Email address and message details provided when submitting contact or support inquiries.</li>
              <li><strong>App Analytics (Optional):</strong> Non-identifiable diagnostic crash logs if explicitly submitted by the user.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Autodesk App Store Compliance</h2>
            <p>
              Verixa BIM Suite complies fully with Autodesk App Store Developer Guidelines. The software does not modify system files outside its installation directory or harvest user telemetry without consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact our Data Protection Officer at: <a href="mailto:verixaidn@gmail.com" className="text-blue-400 hover:underline">verixaidn@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
