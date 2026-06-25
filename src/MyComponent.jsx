// onChange = event handler used primarily with from elements
//             ex. <input>, <textarea>, <select>, <radio>, <checkbox>
//       event.target.value = the value of the form element
//       event.target.checked = the checked state of a checkbox or radio button
// Triggers a funtion everu time the value of the input changes (onChange)

function MyComponent() {
  const handleChange = (event) => {
    console.log(`Input value changed to: ${event.target.value}`);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default MyComponent;
