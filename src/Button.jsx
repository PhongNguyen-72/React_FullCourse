function Button() {
  const handleClick = (e) => {
    e.target.style.backgroundColor = "black";
  };
  return (
    <button onClick={(e) => handleClick(e)} className="button-blue">
      Click me
    </button>
  );
}

export default Button;
