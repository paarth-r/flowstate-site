"use client";

import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";

const SCREENSHOT_INDICES = [1, 2, 3, 4, 5, 6] as const;

export function ScreenshotStrip() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <div className="flex w-max gap-6 animate-scroll-loop py-2">
        {[...SCREENSHOT_INDICES, ...SCREENSHOT_INDICES].map((i, idx) => (
          <ScreenshotPlaceholder key={idx} index={i} />
        ))}
      </div>
    </div>
  );
}
