import "./Button1.css";
function Button1() {
  return (
    <button
      onDoubleClick={() => {
        console.log("Button double-clicked!");
      }}
      className="button-green"
    >
      Click me
    </button>
  );
}

export default Button1;
