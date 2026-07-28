import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-10 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-8 text-white">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">{children}</ol>,
    li: ({ children }) => <li className="text-gray-300">{children}</li>,
    code: ({ children }) => <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    pre: ({ children }) => <pre className="bg-gray-900 border border-gray-700 rounded-xl p-6 overflow-x-auto mb-6 text-sm">{children}</pre>,
    a: ({ href, children }) => <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-gray-400 italic">{children}</blockquote>,
    ...components,
  };
}
