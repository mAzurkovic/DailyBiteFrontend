var express = require('express');
const request = require('request');

var router = express.Router();
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/news', async function(req, res) {
  var api_url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6f2eed73b40a432cab4b7b4299061293";

  request(api_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      var api_json = JSON.parse(body);

      //res.json(api_json.articles);

      res.render('index',  {articles: api_json.articles});
    }
  })
});

module.exports = router;
