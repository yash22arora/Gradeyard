export interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: TTitleSize;
}

export type TTitleSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
