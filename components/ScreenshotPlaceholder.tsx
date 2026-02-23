"use client";

import Image from "next/image";
import { useState } from "react";

export function ScreenshotPlaceholder({ index }: { index: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-[480px] w-[240px] flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-muted"
        aria-label={`Screenshot ${index} placeholder`}
      >
        <span className="text-sm">Screenshot {index}</span>
      </div>
    );
  }

  return (
    <div className="relative h-[480px] w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-card">
      <Image
        src={`/screenshot-${index}.png`}
        alt={`Flowstate app screenshot ${index}`}
        width={240}
        height={480}
        className="h-full w-full object-cover object-top"
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}
