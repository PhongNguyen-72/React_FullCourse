/* props : is an object that contains all the properties passed to a component. 
   parent component can pass data to child component through props. 
   props are read-only.
*/
/* propTypes : is an object that defines the expected types of the props. */
/* defaultProps : now usually replaced by default parameters */
import PropTypes from "prop-types";

function Student({ id = 1, name = "Guest", age, isStudent, avtar }) {
  return (
    <div className="card">
      <img src={avtar} alt="Avatar" />
      <h3>{name}</h3>
      <p>Tuổi: {age}</p>
      <p>Học sinh: {isStudent ? "Có" : "Không"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
