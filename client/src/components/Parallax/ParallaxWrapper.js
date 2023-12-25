import { Parallax } from "react-scroll-parallax";

export default function ParallaxWrapper({ children, speed }) {
  return <Parallax speed={speed}>{children}</Parallax>;
}
