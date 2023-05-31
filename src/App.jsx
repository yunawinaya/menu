import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const allergenColors = {
  Nuts: "#e74c3c",
  Gluten: "#f1c40f",
  Dairy: "#3498db",
  Soy: "#2ecc71",
  Shellfish: "#9b59b6",
};

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

function MenuItem({ name, price, imageUrl, nutritionInfo, allergens }) {
  return (
    <div className="card menu-item">
      <img src={imageUrl} className="card-img-top img-thumbnail" alt={name} />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text mb-0 price">{price}</p>
      </div>
      <div className="card-footer">
        <NutritionalInfo nutritionInfo={nutritionInfo} />
        <div className="allergens">
          <p className="mb-0">Allergens:</p>
          {allergens.map((allergen, index) => (
            <span
              key={index}
              className="allergen-marker"
              style={{ backgroundColor: allergenColors[allergen] }}
            >
              {allergen}
            </span>
          ))}
        </div>
      </div>
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
        name="Fried Chicken Set"
        price="RM 10.00"
        imageUrl="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg"
        nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
        allergens={["Nuts", "Gluten"]}
      />
    </div>
    <div className="col-lg-6">
      <MenuItem
        name="Potato Wedges"
        price="RM 5.00"
        imageUrl="https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Baked-potato-wedges-4.jpg"
        nutritionInfo={{ calories: 270, protein: 5, carbs: 100, fat: 11 }}
        allergens={["Gluten", "Dairy"]}
      />
    </div>
  </>
);

const dessert = (
  <>
    <div className="col-lg-6">
      <MenuItem
        name="Ice Cream"
        price="RM 3.00"
        imageUrl="https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16.jpg"
        nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }}
        allergens={["Dairy"]}
      />
    </div>
    <div className="col-lg-6">
      <MenuItem
        name="Mango Sticky Rice"
        price="RM 6.00"
        imageUrl="https://elavegan.com/wp-content/uploads/2020/07/drizzling-coconut-sauce-over-mango-sticky-rice.jpg"
        nutritionInfo={{ calories: 305, protein: 10, carbs: 40, fat: 8 }}
        allergens={["Nuts"]}
      />
    </div>
  </>
);

function App() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Uncle Yuna Fried Chicken</h1>
      <Category title="Fried Chicken" foods={friedChicken} />
      <Category title="Dessert" foods={dessert} />
    </div>
  );
}

export default App;
