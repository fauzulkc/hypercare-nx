import style from './Button.module.css';

export type ButtonProps = {
  onClick?: () => void;
  label: string;
  variant: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`w-32 h-8 text-sm font-norma transition duration-150 ease-in-out rounded-lg shadow-xl ${
        props.variant === 'primary' ? style.primary : style.secondary
      }`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
