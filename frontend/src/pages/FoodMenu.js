function FoodMenu() {
  const menu = {
    Monday: ["Idli", "Rice", "Chapati"],
    Tuesday: ["Dosa", "Rice", "Puri"],
    Wednesday: ["Upma", "Meals", "Chapati"],
    Thursday: ["Pongal", "Rice", "Puri"],
    Friday: ["Idli", "Meals", "Chapati"],
    Saturday: ["Dosa", "Rice", "Puri"],
    Sunday: ["Special", "Biryani", "Ice Cream"]
  };

  return (
    <div className="container">
      <h2>Food Menu</h2>

      {Object.keys(menu).map(day => (
        <div className="card" key={day}>
          <h4>{day}</h4>
          <p>Breakfast: {menu[day][0]}</p>
          <p>Lunch: {menu[day][1]}</p>
          <p>Dinner: {menu[day][2]}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodMenu;