import srcImage from "./assets/anhnen.png";
function Body() {
  return (
    <main>
      <img src={srcImage} alt="Placeholder" />
      <h2>Welcome to My React App</h2>
      <p>
        This is the body section of the application. There are my information:
      </p>
      <ul>
        <li>Full Name: Nguyễn Viết Hải Phong</li>
        <li>Student ID: ĐTH_K58</li>
        <li>Major: Computer Science</li>
      </ul>
    </main>
  );
}

export default Body;
