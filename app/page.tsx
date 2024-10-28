import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { useMotionValue } from 'framer-motion';

export default function Home() {
  // Initialize an array of MotionValues for path lengths
  const pathLengths = [
    useMotionValue(0),
    useMotionValue(0),
    // Add additional MotionValues if needed
  ];

  return (
    <>
      <BackgroundGradientAnimation />
      <GoogleGeminiEffect
        pathLengths={pathLengths} // Required array of MotionValue objects
        title="Gemini Animation" // Optional: Set a custom title
        description="An animated SVG effect with path length control" // Optional: Set a custom description
        className="custom-gemini-class" // Optional: Additional CSS class
      />
    </>
  );
}
