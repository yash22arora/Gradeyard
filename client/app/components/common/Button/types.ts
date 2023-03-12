export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: EButtonVariant;
  disabled?: boolean;
}

type EButtonVariant = "primary";
