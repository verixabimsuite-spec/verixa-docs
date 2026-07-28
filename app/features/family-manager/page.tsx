import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';

export default function FamilyManagerPage() {
  return (
    <DocsPage>
      <DocsTitle>Family Manager</DocsTitle>
      <DocsDescription>Organize, search, and load Revit families instantly.</DocsDescription>
      <DocsBody>
        <h2>Overview</h2>
        <p>The Family Manager is a lightning-fast tool to manage your Revit families in the cloud or local network.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Instant Search</li>
          <li>Cloud Sync</li>
          <li>Batch Loading</li>
        </ul>
        
        <h2>Workflow</h2>
        <p>1. Open Family Manager. 2. Search for the family you need. 3. Drag and drop into your project.</p>
        
        {/* Screenshots Placeholder */}
        <div className="w-full h-64 bg-card rounded-xl border border-gray-800 flex items-center justify-center my-8 text-secondaryText">
          [ Screenshot Placeholder ]
        </div>
      </DocsBody>
    </DocsPage>
  );
}
