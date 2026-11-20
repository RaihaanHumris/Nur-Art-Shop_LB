import React, { useState } from 'react';
import { Sparkles } from './Icons';

interface ResilientImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  loading = 'lazy',
  fetchPriority,
  width = 800,
  height = 600,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAE3D5] text-[#2B2520] p-6 text-center border border-[#DCD3C4] ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-6 h-6 text-[#8C3D20] mb-2 opacity-80" />
        <p className="font-serif text-lg font-medium text-[#2B2520]">
          {fallbackTitle || alt}
        </p>
        {fallbackSubtitle && (
          <p className="text-xs text-[#574D44] mt-1">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  const resolvedPriority =
    fetchPriority ?? (loading === 'eager' ? 'high' : 'low');

  // Automatically serve compact 480w WebP on mobile viewports for catalog & story images
  const isCatalogOrStoryWebp =
    !srcSet &&
    src.startsWith('/images/') &&
    src.endsWith('.webp') &&
    !src.includes('hero') &&
    !src.endsWith('_sm.webp');

  const resolvedSrcSet = isCatalogOrStoryWebp
    ? `${src.replace('.webp', '_sm.webp')} 480w, ${src} 840w`
    : srcSet;

  const resolvedSizes = isCatalogOrStoryWebp
    ? sizes || '(max-width: 1023px) 300px, 50vw'
    : sizes;

  return (
    <img
      src={src}
      srcSet={resolvedSrcSet}
      sizes={resolvedSizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={loading === 'eager' ? 'sync' : 'async'}
      fetchPriority={resolvedPriority}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
