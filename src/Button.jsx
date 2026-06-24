function Button({ name }) {
  return (
    <button
      onClick={() => {
        console.log(`Button clicked: ${name}`);
      }}
      className="button"
    >
      {name}
    </button>
  );
}

export default Button;
