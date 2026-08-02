import Image, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function AppImage({ src, alt, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === 'string' && src.startsWith('/') && !src.startsWith(`${basePath}/`)
      ? `${basePath}${src}`
      : src;

  return <Image src={resolvedSrc} alt={alt || ''} {...props} />;
}
