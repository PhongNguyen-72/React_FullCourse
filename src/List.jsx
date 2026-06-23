import PropTypes from "prop-types";
function List({ item = [] }) {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "banana", calories: 89 },
    { id: 3, name: "orange", calories: 47 },
  ];

  const itemList = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories} calories
    </li>
  ));

  const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 50);
  const lowCalorieList = lowCalorieFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories} calories
    </li>
  ));

  const highCalorieFruits = fruits.filter((fruit) => fruit.calories >= 50);
  const highCalorieList = highCalorieFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories} calories
    </li>
  ));

  const itemElement = item.map((food) => (
    <li key={food.id}>
      {food.name}: {food.calories} calories
    </li>
  ));

  return (
    <div>
      <h2 className="fruit-list">Fruits List</h2>
      <ol className="item-list">{itemList}</ol>
      <h2 className="fruit-list">Low-Calorie Fruits</h2>
      <ol className="item-list">{lowCalorieList}</ol>
      <h2 className="fruit-list">High-Calorie Fruits</h2>
      <ol className="item-list">{highCalorieList}</ol>
      <h2 className="fruit-list">Items from Props</h2>
      <ol className="item-list">{itemElement}</ol>
    </div>
  );
}
List.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ),
};
export default List;
