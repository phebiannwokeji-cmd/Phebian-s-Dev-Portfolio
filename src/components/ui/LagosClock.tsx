"use client";

import { useEffect, useState } from "react";

function formatTime(timeZone: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());
  } catch {
    return "";
  }
}

export default function LagosClock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    setTime(formatTime(timeZone));
    const id = setInterval(() => setTime(formatTime(timeZone)), 30000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <time>{time}</time>;
}
