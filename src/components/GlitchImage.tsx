import { useState } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlitchImage = ({ src, alt, className = "" }: GlitchImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover grayscale contrast-125" />
      {hovered && (
        <>
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-70"
            style={{
              mixBlendMode: "multiply",
              filter: "hue-rotate(90deg) saturate(3)",
              animation: "glitch-1 0.3s infinite linear",
            }}
          />
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-70"
            style={{
              mixBlendMode: "screen",
              filter: "hue-rotate(-90deg) saturate(3)",
              animation: "glitch-2 0.3s infinite linear",
            }}
          />
        </>
      )}
    </div>
  );
};

export default GlitchImage;
