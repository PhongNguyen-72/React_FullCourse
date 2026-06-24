import PropTypes from "prop-types";
function List({ items = [] }) {
  const fruits = [
    { id: 1, name: "Apple", calories: 52 },
    { id: 2, name: "PineApple", calories: 50 },
    { id: 3, name: "Orange", calories: 47 },
  ];
  const highCaloriesFruits = fruits.filter((fruit) => fruit.calories > 50);
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories
          </li>
        ))}
      </ol>
      <h3>Fruits with calories greater than 50:</h3>
      <ol>
        {highCaloriesFruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories
          </li>
        ))}
      </ol>
      <h3>Items List from Props:</h3>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} $
          </li>
        ))}
      </ol>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

export default List;
