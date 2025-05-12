"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function RouteLoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // Show loader on first mount
    if (firstLoad) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFirstLoad(false);
      }, 1200); // 1.2s fade for initial load
      return;
    }
    // Show loader on route change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // 0.8s fade for route change
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
} 