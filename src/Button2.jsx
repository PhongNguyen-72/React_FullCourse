function Button2({ name }) {
  const handleClick = (e) => {
    console.log(`Button clicked: ${name}`);
    e.target.style.backgroundColor = "#ff9500"; // Change background color to green
  };
  return (
    <button onClick={handleClick} className="button-click">
      {name}
    </button>
  );
}

export default Button2;

// onClick={handleClick}
// -> React tự động truyền event object vào handleClick
// -> Dùng khi không cần truyền thêm tham số

// onClick={(e) => handleClick(e)}
// -> Tự tạo một hàm trung gian rồi gọi handleClick
// -> Kết quả giống hệt cách trên, nhưng dư thừa nếu chỉ truyền e

// Chỉ dùng arrow function khi cần truyền thêm tham số:
// onClick={() => handleClick(id)}
// onClick={(e) => handleClick(id, e)}
