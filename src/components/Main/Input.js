import '../../styles/layout/Input.scss'

function Input({
  htmlFor,
  placeholder,
  data,
  pattern,
  text,
  handleChangeInput,
}) {
  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput(inputValue, inputName);
  };

  const elementPattern = pattern === undefined ? null : pattern;
  return (
    <label htmlFor={htmlFor} className="form__label">
      {text}
      <input
        required
        className="form__input"
        type="text"
        placeholder={placeholder}
        name={htmlFor}
        id={htmlFor}
        value={data.name}
        onChange={changeInput}
        pattern={elementPattern}
      />
    </label>
  );
}
export default Input;
