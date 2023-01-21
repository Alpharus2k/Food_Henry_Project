//import axios from "axios";

// Action Type!!
export const GET_ALL_RECEPIES = "GET_ALL_RECIPES";
/*
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECEPIES_BY_NAME = "GET_RECEPIES_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";

//export const GET_DIETS = "GET_DIETS"
*/
export const getAllRecipes = () =>  {
  return async function (dispatch) {
    // window.env.URL_RECIPES "http://localhost:3001/recipes"
    /*
    return await fetch("http://localhost:3001/recipes")
                .then(res => res.json())
                .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))
                */
    // return await axios.get(window.env.URL_RECIPES)
    //             .then(res => res.data)
    //             .then(data => dispatch({type: GET_ALL_RECEPIES, payload: data}))

    /*
      TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                         
    */
    return dispatch({type: GET_ALL_RECEPIES, payload: testData});
  };
};
/*
export const getRecipeById = (id) => {
    return async (dispatch) => {
      return fetch(`${window.event.URL_RECIPES}/${id}`)
        .then((response) => response.json())
        .then(data => dispatch({type: GET_RECIPE_BY_ID, payload: data}))
      };
  };
export const getRecipeByName = (name) => {
    return async (dispatch) => {
      return fetch(`${window.event.URL_RECIPES}/?name=${name}`)
        .then((response) => response.json())
        .then(data => dispatch({type: GET_RECEPIES_BY_NAME, payload: data}))
      };
  };
  export const createRecipe = (payload) => {
    // Tu código acá

    //payload.id = id;
    return {type: CREATE_RECIPE, payload: payload }
  };
/*
// Inicializamos id en 5, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createTeam, descomentala cuando te haga falta;

let id = 5;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear un team.
export const createTeam = (payload) => {
  // Tu código acá
  id++;
  payload.id = id;
  return {type: CREATE_TEAM, payload: payload }

};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id del team que queremos eliminar.
export const deleteTeam = (id) => {
  // Tu código acá
  return {type: DELETE_TEAM, payload: id}
};*/
const testData = [
	{
		"id": 665446,
		"name": "X-Country Double Lobster Risotto",
		"description": "The recipe X-Country Double Lobster Risotto is ready <b>in around 45 minutes</b> and is definitely an amazing <b>gluten free and pescatarian</b> option for lovers of Mediterranean food. One serving contains <b>586 calories</b>, <b>21g of protein</b>, and <b>14g of fat</b>. For <b>$6.21 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 1 person has tried and liked this recipe. If you have maine lobsters, stock, shallot, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It works well as a main course. Taking all factors into account, this recipe <b>earns a spoonacular score of 54%</b>, which is good. ",
		"score": 16,
		"stepByStep": "1. *You can use chicken stock, fish stock, or make your own stock using the lobster shells, which is what we did. After cooking, remove lobster to cold water.\n 2. Add to pot 1 cut up onion, 2 chopped carrots, 2 chopped celery ribs, and a bay leaf. Toss the lobster shells back into the pot as you finish cleaning them of their meat. Simmer, allowing stock to reduce, until ready to use, then strain.\n 3. Saute shallots, garlic, celery, and mushrooms in butter over medium-high heat. When the shallots are translucent, pour in the sherry and continue cooking until most of the alcohol has evaporated, then add the rice and stir to coat thoroughly, cooking another couple minutes.\n 4. Begin adding ladlefuls of warm stock in your preferred risotto style. I like this risotto creamy but not overly wet. Continue until the rice is cooked yet still al dente.\n 5. Meanwhile, chop up lobster meat to desired size, reserving large hunks of claw meat as garnish. When risotto is done, remove from heat and mix in Parmesan and lobster pieces.\n 6. Sprinkle plated risotto with chopped herbs.\n 7. Pair with a medium to full-bodied white that isn't too oaky. Our local shop recommended an Argiolas Vermentino di Sardegna Costamolino 2008, which the New York Times called their favorite as well as \"Best Value\" in a recent roundup of Italian vermentinos.\n "
	},
	{
		"id": 648812,
		"name": "Kenny's Xo-S'Mores",
		"description": "Need a <b>dairy free side dish</b>? Kenny's Xo-S'Mores could be a super recipe to try. This recipe makes 1 servings with <b>313 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b> each. For <b>95 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. Head to the store and pick up chocolate, graham cracker, marshmallows, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 23%</b>, this dish is not so outstanding. ",
		"score": 1,
		"stepByStep": "1. Position oven racks in the upper third of the oven; preheat broiler.\n 2. Place graham cracker halves on a baking sheet; top each with 1 marshmallow. Broil, with the oven door ajar and watching carefully until the marshmallows are golden brown, 45 ti 75 seconds.\n 3. Remove from the oven and sprinkle each s'more with chocolate shavings.\n 4. Drizzle a little Activ over the top for more chocolate flavor.\n 5. Serves 1 to 2\n "
	},
	{
		"id": 665483,
		"name": "Xocai Nugget Pudding",
		"description": "If you have around <b>45 minutes</b> to spend in the kitchen, Xocai Nugget Pudding might be a great <b>gluten free and lacto ovo vegetarian</b> recipe to try. One serving contains <b>89 calories</b>, <b>4g of protein</b>, and <b>1g of fat</b>. For <b>47 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up whipping cream, chocolate, artificial sweetener, and a few other things to make it today. 1 person found this recipe to be scrumptious and satisfying. It works well as a dessert. It is brought to you by Foodista. Overall, this recipe earns a <b>rather bad spoonacular score of 39%</b>. ",
		"score": 5,
		"stepByStep": "1. On stove top in a double boiler melt Nuggets and whipping cream. In another pan, bring milk, cornstarch and sweeter to a boil stirring consistently, to avoid lumps, until desired thickness.\n 2. Remove from burner and add melted Nuggets mixture and vanilla.\n 3. Pour into desert cups and cool in refrigerator for several hours.\n 4. Serves 6-8\n "
	},
	{
		"id": 665482,
		"name": "Xocai No Bake Cookies",
		"description": "Xocai No Bake Cookies might be just the dessert you are searching for. For <b>42 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>3g of protein</b>, <b>10g of fat</b>, and a total of <b>205 calories</b>. This recipe serves 24. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Head to the store and pick up vanilla, chocolate, soy milk, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 19%</b>, which is rather bad. ",
		"score": 1,
		"stepByStep": "1. Combine sugar, butter and milk in a pan. Bring to a boil and boil for 1 minute.\n 2. Pour mixture over nuts, oats, X Power Squares and vanilla. Drop by teaspoonful on wax paper or foil. Cookies will harden as they cool. Makes 24 Cookies\n "
	},
	{
		"id": 665461,
		"name": "Xocai Chocolate S'mores",
		"description": "The recipe Xocai Chocolate S'mores can be made <b>in roughly 45 minutes</b>. One serving contains <b>43 calories</b>, <b>0g of protein</b>, and <b>1g of fat</b>. This dairy free recipe serves 1 and costs <b>12 cents per serving</b>. If you have chocolate, graham cracker, marshmallow, and a few other ingredients on hand, you can make it. This recipe from Foodista has 1 fans. With a spoonacular <b>score of 9%</b>, this dish is very bad (but still fixable). ",
		"score": 0,
		"stepByStep": "1. Place 1 graham cracker on a plate; place XoBiotic Squares on top.\n 2. Place marshmallow on top of the two XoBiotic Squares, then put int he microwave for about 8 seconds or long enough that you see the bottom start to bulge outwards.\n 3. Remove and quickly place the other graham cracker on top of the marshmallow, gently compressing it until the marshmallow spaces out.\n 4. Serves 1\n "
	},
	{
		"id": 665468,
		"name": "Xocai Healthy Chocolate Pie",
		"description": "Xocai Healthy Chocolate Pie takes about <b>45 minutes</b> from beginning to end. One serving contains <b>372 calories</b>, <b>5g of protein</b>, and <b>19g of fat</b>. This recipe serves 6. For <b>95 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. If you have butter, eggs, chocolate, and a few other ingredients on hand, you can make it. 1 person has tried and liked this recipe. Only a few people really liked this dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 25%</b>. This score is not so excellent. ",
		"score": 2,
		"stepByStep": "1. Cook first 5 ingredients over medium heat until desired thickness.\n 2. Remove from heat and let cool a little; stir in Sipping Xocolate and vanilla. Put in graham cracker crust. Chill.\n 3. Serve with a spoonful of whipped topping or whipping cream and garnish with strawberry or other fresh fruit. For a variation you may add nuts or put filling in custard cups and eliminate the pie crust.\n 4. Serves 6\n "
	},
	{
		"id": 665485,
		"name": "Xocolate Covered Pretzel Rods",
		"description": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Xocolate Covered Pretzel Rods might be a great <b>dairy free</b> recipe to try. One portion of this dish contains about <b>1g of protein</b>, <b>10g of fat</b>, and a total of <b>174 calories</b>. For <b>45 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. A mixture of xocai healthy chocolate xobiotic squares, candy sprinkles, pretzel rods, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Not a lot of people really liked this side dish. 1 person found this recipe to be yummy and satisfying. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 10%</b>, which is not so spectacular. ",
		"score": 0,
		"stepByStep": "1. Heat Xocai XoBiotic Squares in the microwave in 10-secoind intervals until melted. Ladle melted XoBiotic Squares over 3/4 of each pretzel rod. Tap or scrape off excess, then roll pretzel in assorted candy sprinkles, crushed cookies, toffee bits, nuts, or mini candies. Dry on a cooling rack until set. Makes 12 rods\n "
	},
	{
		"id": 665464,
		"name": "Xocai Healthy Chocolate Dreams",
		"description": "Xocai Healthy Chocolate Dreams is a <b>gluten free</b> hor d'oeuvre. One serving contains <b>291 calories</b>, <b>4g of protein</b>, and <b>16g of fat</b>. This recipe serves 24 and costs 75 cents per serving. This recipe from Foodista requires condensed milk, coconut, vanilla, and peanut butter. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Not a lot of people made this recipe, and 1 would say it hit the spot. All things considered, we decided this recipe <b>deserves a spoonacular score of 29%</b>. This score is not so spectacular. ",
		"score": 3,
		"stepByStep": "1. Melt Nuggets in slow-melt low-temp pot (110-degree limit). When melted, stir in vanilla and peanut or almond butter.\n 2. Mix together in same pot until smooth. In large bowl combine oats and coconut. Set aside.\n 3. Add sweetened condensed milk to the hot mixture. Stir until mixture is smooth.\n 4. Add hot mixture to oats.\n 5. Mix until all oats are covered. Drop spoonfuls on top cookie sheet covered with parchment or wax paper. Refrigerate or serve at room temperature. Makes 24 candies\n "
	},
	{
		"id": 631764,
		"name": "Xocai Healthy Chocolate Muffins",
		"description": "Xocai Healthy Chocolate Muffins is a <b>lacto ovo vegetarian</b> breakfast. This recipe makes 12 servings with <b>245 calories</b>, <b>4g of protein</b>, and <b>12g of fat</b> each. For <b>41 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 1 fans. If you have sugar ), milk, vanilla, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>not so spectacular spoonacular score of 20%</b>. ",
		"score": 1,
		"stepByStep": "1. Position oven rack to the center of the oven. Preheat oven to 400 degrees. Grease 12-cup muffin pan. Slowly, on low heat, warm Sipping Xocolate with milk or heavy cream. Stir until melted. Set aside.\n 2. Cut X Power Squares in to small pieces. Set aside.\n 3. Mix dry ingredients together in a bowl.\n 4. Add the dry ingredients.\n 5. Add the X Power Squares and mix for at lease 2 minutes.\n 6. Add eggs, buttermilk, sugar, butter and vanilla. Lastly add the melted Sipping Xocolate. Slowly mix until the mixture is combined. Do not over mix as the batter should be lumpy. Divide the batter into the 12 muffin cups.\n 7. Bake the muffins for about 15 minutes.\n 8. Let cool in the muffin pan for at least 10 minutes before removing the muffins.\n 9. Let cool for another 5-10 minutes.\n 10. Serves 12\n "
	},
	{
		"id": 665462,
		"name": "Xocai Healthy Chocolate Martini",
		"description": "Xocai Healthy Chocolate Martini is a <b>gluten free</b> recipe with 1 servings. One serving contains <b>209 calories</b>, <b>1g of protein</b>, and <b>10g of fat</b>. For <b>$1.46 per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It works well as a rather inexpensive beverage. A mixture of xocai healthy chocolate nugget, liquid xocai healthy chocolate activ drink, ice, and a handful of other ingredients are all it takes to make this recipe so delicious. Overall, this recipe earns a <b>rather bad spoonacular score of 17%</b>. ",
		"score": 0,
		"stepByStep": "1. Shake Vodka and Xocai Activ in a martini shaker with ice and pour into a martini glass.\n 2. Garnish with grated Nugget.\n 3. Serves 1\n "
	}
]