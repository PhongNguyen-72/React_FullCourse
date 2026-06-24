import srcImage from "./assets/anhnen.png";
import Button from "./Button.jsx";
import Button1 from "./Button1.jsx";
import Student from "./Student.jsx";
import List from "./List.jsx";
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
      <Button name="Click Me" />
      <Button1 name="Double-Click Me" />
      <List
        items={[
          { id: 1, name: "Table", price: 100 },
          { id: 2, name: "Chair", price: 50 },
          { id: 3, name: "TV", price: 200 },
        ]}
      />
    </main>
  );
}

export default Body;
