"use client";

import { useEffect, useState } from "react";

export default function Widget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget">
      <h2>📅 현재 시간</h2>
      <p>{time.toLocaleTimeString()}</p>
      <style jsx>{`
        .widget {
          width: 200px;
          height: 100px;
          background: #fff;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
