import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
      <h2>Color Picker</h2>
      <p className="form-label" style={{ backgroundColor: color }}>
        Selected Color: {color}
      </p>
      <label>
        Select a color:
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}
export default ColorPicker;
