import { ReactNode } from "react";

type TransitionVariant = "fade" | "fade-short" | "diagonal" | "curve" | "heavy" | "none";

interface CinematicSectionProps {
  children: ReactNode;
  topTransition?: TransitionVariant;
  bottomTransition?: TransitionVariant;
  className?: string;
}

const CinematicSection = ({
  children,
  topTransition = "fade",
  bottomTransition = "fade",
  className = "",
}: CinematicSectionProps) => {
  return (
    <div className={`cinematic-section ${className}`}>
      {/* Top transition overlay */}
      {topTransition !== "none" && (
        <div
          className={`cinematic-edge cinematic-edge--top ${
            topTransition === "diagonal"
              ? "cinematic-edge--diagonal-top"
              : topTransition === "curve"
              ? "cinematic-edge--curve-top"
              : topTransition === "heavy"
              ? "cinematic-edge--heavy-top"
              : "cinematic-edge--fade-top"
          }`}
          aria-hidden="true"
        />
      )}

      {children}

      {/* Bottom transition overlay */}
      {bottomTransition !== "none" && (
        <div
          className={`cinematic-edge cinematic-edge--bottom ${
            bottomTransition === "diagonal"
              ? "cinematic-edge--diagonal-bottom"
              : bottomTransition === "curve"
              ? "cinematic-edge--curve-bottom"
              : bottomTransition === "heavy"
              ? "cinematic-edge--heavy-bottom"
              : bottomTransition === "fade-short"
              ? "cinematic-edge--fade-short-bottom"
              : "cinematic-edge--fade-bottom"
          }`}
          aria-hidden="true"
        />
      )}

      {/* Subtle grain texture at edges */}
      <div className="cinematic-grain-edge cinematic-grain-edge--top" aria-hidden="true" />
      <div className="cinematic-grain-edge cinematic-grain-edge--bottom" aria-hidden="true" />
    </div>
  );
};

export default CinematicSection;
