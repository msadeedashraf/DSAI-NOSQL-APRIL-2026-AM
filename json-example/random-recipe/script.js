//alert("Hi testing my JS");
/*
//To fetch json data from any URL

fetch("YOUR_URL")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching json data, please check your path", error);
  });
*/

const meal_container = document.getElementById("meal");

let myHTML = "";

fetch("https://www.themealdb.com/api/json/v1/1/random.php") //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    console.log(data.meals[0]);
    const meal = data.meals[0];
    myHTML = `<div class="row">
    <div class="columns five">
        <h2>${meal.strMeal}</h2>
        <img src=${meal.strMealThumb} alt="Meal Image">
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Tags:</strong> ${meal.strTags}</p>
        <h5>Ingredients:</h5>
        <ul>
        
        <li>${meal.strIngredient1} --- ${meal.strMeasure1}</li>
        <li>${meal.strIngredient2}--- ${meal.strMeasure2}</li>
        <li>${meal.strIngredient3}--- ${meal.strMeasure3}</li>
        <li>${meal.strIngredient4}--- ${meal.strMeasure4}</li>
        <li>${meal.strIngredient5}--- ${meal.strMeasure5}</li>
        <li>${meal.strIngredient6}--- ${meal.strMeasure6}</li>
        <li>${meal.strIngredient7}--- ${meal.strMeasure7}</li>
        <li>${meal.strIngredient8}--- ${meal.strMeasure8}</li>
        <li>${meal.strIngredient9}--- ${meal.strMeasure9}</li>
        <li>${meal.strIngredient10}--- ${meal.strMeasure10}</li>
        <li>${meal.strIngredient11}--- ${meal.strMeasure11}</li>
        <li>${meal.strIngredient12}--- ${meal.strMeasure12}</li>
        <li>${meal.strIngredient13}--- ${meal.strMeasure13}</li>
        <li>${meal.strIngredient14}--- ${meal.strMeasure14}</li>
        <li>${meal.strIngredient15}--- ${meal.strMeasure15}</li>
        <li>${meal.strIngredient16}--- ${meal.strMeasure16}</li>
        <li>${meal.strIngredient17}--- ${meal.strMeasure17}</li>
        <li>${meal.strIngredient18}--- ${meal.strMeasure18}</li>
        <li>${meal.strIngredient19}--- ${meal.strMeasure19}</li>
        <li>${meal.strIngredient20}--- ${meal.strMeasure20}</li>
            
        </ul>
    </div>
    <div class="columns seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
    </div>
</div>

<div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(
          -11
        )}">>
        
        </iframe>
    </div>
</div>`;

    document.getElementById("meal").innerHTML = myHTML;
    //createMeal(data.meals[0]);
    /*
    console.log(data.meals[0]);
    document.getElementById("meal").innerHTML = data.meals[0].strMeal;
    document.getElementById(
      "thumbnail"
    ).innerHTML = `<img src=${data.meals[0].strMealThumb} alt="" >`;
    */
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your path", error)
  );
