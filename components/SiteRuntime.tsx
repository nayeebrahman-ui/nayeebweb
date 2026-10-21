'use client';

import { useEffect } from 'react';

// Boots the motion/interaction runtime once the server-rendered markup is hydrated.
// The runtime guards against running twice (React Strict Mode runs effects twice in dev).
export default function SiteRuntime() {
  useEffect(() => {
    import('@/lib/runtime/site').then((m) => m.boot());
  }, []);
  return null;
}
