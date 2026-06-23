import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Button1 from "./Button1/Button1.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  const vegetables = [
    { id: 1, name: "Broccoli", calories: 50 },
    { id: 2, name: "Spinach", calories: 23 },
  ];
  return (
    <div>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Footer />
      <Button />
      <Button1 />
      <Button2 />
      <div>
        <Student name="Alice" age={20} isStudent={true} />
        <Student name="Bob" age={22} isStudent={false} />
        <Student name="Alex" age={52} />
        <Student />
      </div>
      <div>
        <UserGreeting isLoggedIn={true} />
        <UserGreeting isLoggedIn={false} />
      </div>
      <div>
        <List item={vegetables} />
      </div>
    </div>
  );
}

export default App;
