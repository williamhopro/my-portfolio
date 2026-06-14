"use client";

import * as React from "react";

/**
 * Marks the document as successfully hydrated. The early watchdog script in
 * the document head watches for the `hydrated` class; if it never appears
 * (JS blocked, bundle failed, slow/stale tab) it forces all animation-hidden
 * content visible so the page is never left blank.
 */
export function HydrationBeacon() {
  React.useEffect(() => {
    document.documentElement.classList.add("hydrated");
  }, []);

  return null;
}
