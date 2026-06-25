// onChange = event handler used primarily with from elements
//             ex. <input>, <textarea>, <select>, <radio>
//       event.target.value = the value of the form element
//       event.target.checked = the checked state of a checkbox or radio button
// Triggers a funtion everu time the value of the input changes (onChange)
import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quality, setQuality] = useState();
  const [comment, setComment] = useState("");
  const [select, setSelect] = useState("None");
  const [shipping, setShipping] = useState("Home delivery");

  const handleChange = (event) => {
    console.log(`Input value changed to: ${event.target.value}`);
    setName(event.target.value);
  };

  const handleQualityChange = (event) => {
    console.log(`Input value changed to: ${event.target.value}`);
    setQuality(event.target.value);
  };

  const handleCommentChange = (event) => {
    console.log(`Input value changed to: ${event.target.value}`);
    setComment(event.target.value);
  };

  const handleSelectChange = (event) => {
    console.log(`Select value changed to: ${event.target.value}`);
    setSelect(event.target.value);
  };

  const handleShippingChange = (event) => {
    console.log(`Shipping value changed to: ${event.target.value}`);
    setShipping(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="form-control"
        value={name}
      />
      <p>Hello, {name}!</p> {/*Change trong input*/}
      <input
        type="number"
        onChange={handleQualityChange}
        className="form-control"
        value={quality}
      />
      <p>Quality: {quality}</p>
      <textarea
        onChange={handleCommentChange}
        className="form-control"
        placeholder="Enter your comment here..."
        value={comment}
      />
      <p>Comment: {comment}</p> {/*Change trong textarea*/}
      <select value={select} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Option1">Option 1</option>
        <option value="Option2">Option 2</option>
        <option value="Option3">Option 3</option>
      </select>
      <p>Select: {select}</p> {/*Change trong select*/}
      <label>
        <input
          type="radio"
          name="shipping"
          value="Pickup in store"
          checked={shipping === "Pickup in store"}
          onChange={handleShippingChange}
        />
        Pickup in store
      </label>
      <label>
        <input
          type="radio"
          name="shipping"
          value="Home delivery"
          checked={shipping === "Home delivery"}
          onChange={handleShippingChange}
        />
        Home delivery
      </label>
      <p>Shipping: {shipping}</p> {/*Change trong shipping*/}
    </div>
  );
}

export default MyComponent;
