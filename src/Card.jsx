import profilePic from "./assets/anhnen.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture" />
      <h2 className="card-title">Card Title</h2>
      <p className="card-description">Card description goes here.</p>
    </div>
  );
}

export default Card;
