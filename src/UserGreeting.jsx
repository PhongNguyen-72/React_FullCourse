/* conditional rendering : isLoggedIn */
import PropTypes from "prop-types";
function UserGreeting({ isLoggedIn = false }) {
  const welcomeMessage = "Welcome back!";
  const loginMessage = "Please sign up.";
  return (
    <div>
      {isLoggedIn ? (
        <h1 className="welcome-message">{welcomeMessage}</h1>
      ) : (
        <h1 className="login-message">{loginMessage}</h1>
      )}
    </div>
  );
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default UserGreeting;
