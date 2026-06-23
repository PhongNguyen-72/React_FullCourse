/* props : is an object that contains all the properties passed to a component. 
   parent component can pass data to child component through props. 
   props are read-only.
*/
/* propTypes : is an object that defines the expected types of the props. */
/* defaultProps : now usually replaced by default parameters */
import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
export default Student;
