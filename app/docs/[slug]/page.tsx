import GettingStartedPage from '../getting-started/page';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'installation' },
    { slug: 'system-requirements' },
    { slug: 'activation' },
    { slug: 'license-management' },
    { slug: 'quick-start' },
    { slug: 'family-manager' },
    { slug: 'auto-annotation' },
    { slug: 'batch-sheet-maker' },
    { slug: 'keyboard-shortcuts' },
    { slug: 'settings' },
    { slug: 'troubleshooting' },
    { slug: 'faq' },
    { slug: 'release-notes' },
  ];
}

const slugContent: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
  installation: {
    title: 'Installation Guide',
    subtitle: 'Step-by-step instructions for installing Verixa BIM Suite on Autodesk Revit.',
    content: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
          <strong>Autodesk App Store Official Partner:</strong> The installation process automatically deploys multi-target DLL assemblies to all supported Autodesk Revit versions (2021-2026).
        </div>
        <h3 className="text-lg font-bold text-white">Installation Steps</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Close all running instances of Autodesk Revit.</li>
          <li>Download the setup executable (<code className="text-blue-400">Verixa_Setup.exe</code>) from our <Link href="/download" className="text-blue-400 hover:underline">Downloads page</Link>.</li>
          <li>Double-click the installer and follow the wizard setup.</li>
          <li>Launch Autodesk Revit. Access the suite from the <strong>Verixa BIM Suite</strong> ribbon tab.</li>
        </ol>
      </div>
    ),
  },
  'system-requirements': {
    title: 'System Requirements',
    subtitle: 'Hardware and software specifications for running Verixa BIM Suite.',
    content: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-white">Supported Environments</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Autodesk Revit:</strong> 2021, 2022, 2023, 2024, 2025, and 2026 (64-bit).</li>
          <li><strong>Operating System:</strong> Windows 10 / Windows 11 (64-bit).</li>
          <li><strong>RAM:</strong> 8 GB minimum (16 GB+ recommended for large BIM models).</li>
          <li><strong>GPU:</strong> DirectX 11 capable graphics card for Helix 3D Family Preview.</li>
        </ul>
      </div>
    ),
  },
  activation: {
    title: 'Activation Guide',
    subtitle: 'How to register and activate your software license.',
    content: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-white">Online License Activation</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open Autodesk Revit and click <strong>Verixa Settings</strong> on the ribbon.</li>
          <li>Enter your 25-character Product License Key received via email.</li>
          <li>Click <strong>Activate License</strong>. An active internet connection is required for initial verification.</li>
        </ol>
      </div>
    ),
  },
  'license-management': {
    title: 'License Management',
    subtitle: 'Managing workstation licenses and offline usage.',
    content: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-white">Transferring Your License</h3>
        <p>You can deactivate your license key on your current PC via the Verixa Settings dialog inside Revit and reactivate it on a new computer instantly.</p>
      </div>
    ),
  },
  troubleshooting: {
    title: 'Troubleshooting Guide',
    subtitle: 'Solutions for common setup and execution queries.',
    content: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-white">Common Solutions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ribbon tab not appearing:</strong> Ensure Revit was closed during setup. Run installer again and click Repair.</li>
          <li><strong>License verification error:</strong> Verify internet connection or check firewall settings for outbound HTTPS.</li>
        </ul>
      </div>
    ),
  },
};

export default function DocsSlugPage({ params }: { params: { slug: string } }) {
  const item = slugContent[params.slug];

  if (!item) {
    return <GettingStartedPage />;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold mb-3 text-white">{item.title}</h1>
        <p className="text-lg text-gray-400">{item.subtitle}</p>
      </div>
      <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-xl">
        {item.content}
      </div>
    </div>
  );
}
