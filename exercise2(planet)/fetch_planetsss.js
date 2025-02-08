//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
let banana = 0; 
let spaceship = [];

fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then((apple) => apple.json())
    .then((grape) => {
        spaceship = grape;
        document.getElementById("result").innerHTML = `Planet: ${spaceship[0].name}, Distance: ${spaceship[0].distance}`;
    })
    .catch((error) => console.log("Something went wrong!", error));

document.getElementById("destination").addEventListener("click", () => {
    banana++; 
    if (banana > spaceship.length) { 
        banana = 0;
    }
    document.getElementById("result").innerHTML = `Planet: ${spaceship[banana].name}, Distance: ${spaceship[banana].distance}`;
});
