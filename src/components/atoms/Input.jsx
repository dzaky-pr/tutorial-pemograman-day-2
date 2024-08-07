function Input(props) {
  const { type = 'text', placeholder = 'ini placeholder', name, id } = props;
  return <input type={type} placeholder={placeholder} name={name} id={id} className="w-full bg-neutral-100 border rounded-sm p-2" />;
}

export default Input;
