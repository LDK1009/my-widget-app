import { useEffect, useState } from "react";

export default function WidgetPage() {
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
          width: 100%;
          height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
