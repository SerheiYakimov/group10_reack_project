const ButtonForm = ({ type, onClick = null, text, className }) => (
  <button className={className} type={type} onClick={onClick}>
    {text}
  </button>
);

export default ButtonForm;
