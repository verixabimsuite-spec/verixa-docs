import { notFound } from 'next/navigation';

// This page handles any unmatched /docs routes
export default function DocsNotFound() {
  return notFound();
}
