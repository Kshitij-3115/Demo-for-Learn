const request = require('request');

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
  qs: {url: 'http://www.melskitchencafe.com/the-best-fudgy-brownies/'},
  headers: {
    'x-rapidapi-key': '29ed150431msh405d6d46f66237ap1fd503jsn0521cb57601a',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});