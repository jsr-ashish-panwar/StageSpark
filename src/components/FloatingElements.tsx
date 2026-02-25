import { useEffect, useRef } from 'react';
import { Sparkles, Mic2, Music2, Star } from 'lucide-react';

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const elements = container.querySelectorAll('.float-element');
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.01;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="float-element absolute top-20 left-[10%] text-blue-500/20 animate-float" style={{ animationDelay: '0s' }}>
        <Sparkles size={40} />
      </div>
      <div className="float-element absolute top-40 right-[15%] text-purple-500/20 animate-float" style={{ animationDelay: '1s' }}>
        <Mic2 size={50} />
      </div>
      <div className="float-element absolute bottom-40 left-[20%] text-yellow-500/20 animate-float" style={{ animationDelay: '2s' }}>
        <Music2 size={45} />
      </div>
      <div className="float-element absolute top-60 left-[70%] text-blue-400/20 animate-float" style={{ animationDelay: '1.5s' }}>
        <Star size={35} />
      </div>
      <div className="float-element absolute bottom-60 right-[25%] text-purple-400/20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Sparkles size={55} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-yellow-600/5 animate-gradient"></div>
    </div>
  );
}
