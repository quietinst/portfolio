import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
}

// Pass a stable array (e.g. a constant outside the component), otherwise
// the animation restarts on every render of the parent.
const TypedText = ({ strings }: TypedTextProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const typed = new Typed(elementRef.current, {
      strings,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={elementRef} />;
};

export default TypedText;
