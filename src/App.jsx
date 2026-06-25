import Body from "./Body.jsx";
import Counter from "./Counter.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function App() {
  const vegetables = [
    { id: 1, name: "Broccoli", calories: 50 },
    { id: 2, name: "Spinach", calories: 23 },
  ];
  return (
    <div>
      <Header />
      <Body />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
