function Button(props) {
  const { type, color = 'bg-yellow-200', children, onClick } = props;
  return (
    <button onClick={onClick} type={type} className={`px-4 py-2 border items-center justify-center text-center hover:text-white  flex w-full ${color} text-neutral-900 rounded-md`}>
      {children}
    </button>
  );
}

export default Button;

// class Button extends React.Component {
//   render() {
//     const { type, color = 'bg-yellow-200', children, onClick } = this.props;
//     return (
//       <button onClick={onClick} type={type} className={`px-4 py-2 border items-center justify-center text-center hover:text-white  flex w-full ${color} text-neutral-900 rounded-md`}>
//         {children}
//       </button>
//     );
//   }
// }
