//First attemp at fetch improper method
/*get("https://newsapi.org/v2/everything?q=keyword&apiKey=4142bad128da4c35adfa948a36b9017a"){
    function newsApi(data){
        return data.response
        .then(function(response)
            
            }
}*/
//Grabbing element SearchButton
var button = document.getElementById("searchButton");

//inputValue;
//function returning fetch Api data turning to json
function newsApi() {
  console.log("button clicked");
  //Creating variable to grab users search value
  var inputValue = document.getElementById("search").value;
  console.log(inputValue);
  //Creating variable to store fetch and users input value
  var url =
    "https://newsapi.org/v2/everything?q=" +
    inputValue +
    "&apiKey=4142bad128da4c35adfa948a36b9017a";
  console.log(url);
  //Creating page reset after users search
  var clear = document.getElementById("list");
  clear.innerHTML = " ";
  //News API fetch
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.search);
      //Creating variable to store data object
      var articles = data.articles;
      //var ul = document.getElementById("list");
      //var a = document.getElementById("anchor");
      //var l = document.getElementById("list");
      //Creating for loop to create anchor html element to output data return user searches for
      for (var i = 0; i < articles.length; i++) {
        //Creating anchor tag
        var createA = document.createElement("a");
        //Outputting titles in hypertext format for user selection of article
        createA.innerHTML = articles[i].title;
        createA.href = articles[i].url;
        createA.title = articles[i].title;
        //Creating list item to output title of article
        var createLi = document.createElement("li");
        //createLi.innerHTML = articles[i].title;
        //Appending anchor to output list item
        createLi.appendChild(createA);
        //var createA = document.createElement("a");
        //establishing page reset appending to created list item
        clear.appendChild(createLi);
      }
      console.log(data);
      //return ;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//Adding event listener to button
button.addEventListener("click", newsApi);
//newsApi();
