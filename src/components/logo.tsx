"use client";
import { LOGO_COLORS } from "@/lib/logos";
import React from "react";

export default function Logo({ withText, ...props }: any) {
  const [randomColor, setRandomColor] = React.useState(LOGO_COLORS[Math.floor(Math.random() * LOGO_COLORS.length)]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(LOGO_COLORS[Math.floor(Math.random() * LOGO_COLORS.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center m-0" {...props}>
      {withText && <span className="text-2xl font-bold ml-2">Akhil Swarop</span>}
    </div>
  );
}
