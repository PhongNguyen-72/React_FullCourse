import srcImage from "./assets/anhnen.png";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
function Body() {
  return (
    <main>
      <h2>Welcome to My React App</h2>
      <p>
        This is the body section of the application. There are my information:
      </p>
      <ul>
        <li>Full Name: Nguyễn Viết Hải Phong</li>
        <li>Student ID: ĐTH_K58</li>
        <li>Major: Computer Science</li>
      </ul>
      <Student
        id={1}
        name="Nguyễn Viết Hải Phong"
        age={20}
        isStudent={true}
        avtar={srcImage}
      />
      <br />
      <Button />
    </main>
  );
}

export default Body;
