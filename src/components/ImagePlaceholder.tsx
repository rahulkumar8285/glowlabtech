import React from 'react';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';

export interface ImagePlaceholderProps {
  /** Width in pixels (e.g. 1280) */
  width: number;
  /** Height in pixels (e.g. 720) */
  height: number;
  /** Aspect ratio string for badge (e.g. "16:9", "9:16", "4:5", "3:2") */
  aspectRatio?: string;
  /** Slot identifier (e.g. "SLOT 01", "SLOT 2A") */
  slotId: string;
  /** Slot title or location description */
  title: string;
  /** Recommendation of what asset should be placed here */
  suggestion?: string;
  /** Recommended file formats */
  formats?: string;
  /** Optional actual image source if replaced */
  src?: string;
  /** Alt text for actual image */
  alt?: string;
  /** Object fit mode: cover or contain */
  objectFit?: 'cover' | 'contain';
  /** Additional classes for the container */
  className?: string;
  key?: React.Key;
}

export default function ImagePlaceholder({
  width,
  height,
  aspectRatio,
  slotId,
  title,
  suggestion,
  formats = 'WebP / PNG / MP4',
  src,
  alt,
  objectFit = 'cover',
  className = '',
}: ImagePlaceholderProps) {
  // If an actual image is provided, render the image cleanly without black border or background
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[4px] bg-transparent ${className}`}
        style={{ aspectRatio: aspectRatio ? aspectRatio.replace(':', '/') : `${width}/${height}` }}
      >
        <img
          src={src}
          alt={alt || title}
          width={width}
          height={height}
          loading="lazy"
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} block`}
        />
      </div>
    );
  }

  // Pure black placeholder with exact dimensions and technical framing
  return (
    <div
      className={`relative w-full rounded-[4px] border border-neutral-800 bg-[#0A0A0A] text-white overflow-hidden shadow-sm flex flex-col items-center justify-center p-6 sm:p-8 select-none ${className}`}
      style={{
        aspectRatio: aspectRatio ? aspectRatio.replace(':', '/') : `${width}/${height}`,
        minHeight: '260px',
      }}
    >
      {/* Blueprint corner crosshairs */}
      <span className="absolute top-2.5 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        +
      </span>
      <span className="absolute top-2.5 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-2.5 left-3 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-2.5 right-3 text-neutral-600 font-mono text-xs select-none pointer-events-none">
        +
      </span>

      {/* Center content */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-3 sm:space-y-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#C84826]/15 border border-[#C84826]/30 text-[#E06A4D] font-mono text-[11px] font-semibold tracking-wider uppercase">
            <ImageIcon className="w-3 h-3" />
            {slotId}
          </span>
          {aspectRatio && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono text-[11px] tracking-wider">
              <Maximize2 className="w-3 h-3 text-neutral-400" />
              {aspectRatio}
            </span>
          )}
        </div>

        {/* Primary Dimension Heading (Height x Width) */}
        <div className="space-y-1">
          <div className="font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            {width} <span className="text-[#C84826]">×</span> {height} <span className="text-sm sm:text-base font-normal text-neutral-400">px</span>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            (Width: {width}px · Height: {height}px)
          </div>
        </div>

        {/* Title */}
        <div className="font-headline text-sm sm:text-base md:text-lg text-neutral-200 font-medium">
          {title}
        </div>

        {/* Suggestion / Recommendation */}
        {suggestion && (
          <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md bg-neutral-950/80 border border-neutral-800/80 px-4 py-2.5 rounded">
            <span className="text-neutral-300 font-medium">Placement Suggestion: </span>
            {suggestion}
          </p>
        )}

        {/* Recommended Formats */}
        <div className="font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-wider pt-1">
          Recommended: {formats}
        </div>
      </div>
    </div>
  );
}
