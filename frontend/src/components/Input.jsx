const Input = ({
  id,
  type,
  name,
  placeholder,
  className,
  required = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};

export default Input;
