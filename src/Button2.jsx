function Button2() {
  const styles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const handleClick = (e) => {
    console.log("Button2 clicked!");
  };
  return (
    <button onClick={(e) => handleClick(e)} style={styles} className="button">
      Click Me
    </button>
  );
}
export default Button2;
