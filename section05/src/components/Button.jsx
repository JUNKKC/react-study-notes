const Button = ({ text, color }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
