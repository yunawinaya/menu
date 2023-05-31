import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom CSS file for additional styling

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div className="nutritional-info">
      <p className="mb-0">Calories: {nutritionInfo.calories} kcal</p>
      <p className="mb-0">Protein: {nutritionInfo.protein} g</p>
      <p className="mb-0">Carbs: {nutritionInfo.carbs} g</p>
      <p className="mb-0">Fat: {nutritionInfo.fat} g</p>
    </div>
  );
}

function MenuItem({ name, price, nutritionInfo }) {
  return (
    <div className="menu-item">
      <div className="item-details">
        <h4>{name}</h4>
        <p className="mb-0 price">{price}</p>
      </div>
      <NutritionalInfo nutritionInfo={nutritionInfo} />
    </div>
  );
}

function Category({ title, foods }) {
  return (
    <div className="category">
      <h2 className="mb-4">{title}</h2>
      <div className="row">{foods}</div>
    </div>
  );
}

const friedChicken = (
  <>
    <div className="col-lg-6">
      <MenuItem
        name={"2pc Fried Chicken Set"}
        price={"RM 10.00"}
        nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
      />
    </div>
    <div className="col-lg-6">
      <MenuItem
        name={"Potato Wedges"}
        price={"RM 5.00"}
        nutritionInfo={{ calories: 270, protein: 5, carbs: 100, fat: 11 }}
      />
    </div>
  </>
);

const dessert = (
  <>
    <div className="col-lg-6">
      <MenuItem
        name={"Ice Cream"}
        price={"RM 3.00"}
        nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }}
      />
    </div>
    <div className="col-lg-6">
      <MenuItem
        name={"Mango Sticky Rice"}
        price={"RM 6.00"}
        nutritionInfo={{ calories: 305, protein: 10, carbs: 40, fat: 8 }}
      />
    </div>
  </>
);

function App() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Uncle Yuna Fried Chicken</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Dessert"} foods={dessert} />
    </div>
  );
}

export default App;
