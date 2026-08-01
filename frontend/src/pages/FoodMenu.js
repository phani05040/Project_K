import {
  FaCoffee,
  FaUtensils,
  FaMoon,
} from "react-icons/fa";
import "../App.css";

function FoodMenu() {

  const menu = {
    Monday: ["Idli", "Rice", "Chapati"],
    Tuesday: ["Dosa", "Rice", "Puri"],
    Wednesday: ["Upma", "Meals", "Chapati"],
    Thursday: ["Pongal", "Rice", "Puri"],
    Friday: ["Idli", "Meals", "Chapati"],
    Saturday: ["Dosa", "Rice", "Puri"],
    Sunday: ["Special", "Biryani", "Ice Cream"],
  };


  return (
    <div className="container">

      <div className="page-header">
        <h2>🍽️ Weekly Food Menu</h2>
        <p>Check your hostel breakfast, lunch and dinner schedule.</p>
      </div>


      <div className="food-grid">

        {Object.keys(menu).map((day) => (

          <div className="food-card" key={day}>

            <h3>{day}</h3>


            <div className="meal">
              <FaCoffee className="breakfast-icon"/>
              <div>
                <span>Breakfast</span>
                <p>{menu[day][0]}</p>
              </div>
            </div>


            <div className="meal">
              <FaUtensils className="lunch-icon"/>
              <div>
                <span>Lunch</span>
                <p>{menu[day][1]}</p>
              </div>
            </div>


            <div className="meal">
              <FaMoon className="dinner-icon"/>
              <div>
                <span>Dinner</span>
                <p>{menu[day][2]}</p>
              </div>
            </div>


          </div>

        ))}

      </div>

    </div>
  );
}

export default FoodMenu;