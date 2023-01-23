import clasess from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button {...props} className={clasess.btn}>
      {props.children}
    </button>
  );
};

export default Button;
