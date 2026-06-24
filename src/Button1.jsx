function Button1({ name }) {
  return (
    <button
      onDoubleClick={() => {
        console.log(`Button double-clicked: ${name}`);
      }}
      className="button-double-click"
    >
      {name}
    </button>
  );
}

export default Button1;
