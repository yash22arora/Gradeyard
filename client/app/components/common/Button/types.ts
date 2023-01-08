export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: EButtonVariant;
}

type EButtonVariant = "default" | "google";
