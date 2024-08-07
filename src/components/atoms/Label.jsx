function Label(props) {
  const { htmlFor, id, label = 'ini label' } = props;
  return (
    <label htmlFor={htmlFor} id={id} className="text-lg font-medium">
      {label}
    </label>
  );
}

export default Label;
