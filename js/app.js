/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var newNum = document.getElementById('matCount');
newNum.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var newMsgCount = document.getElementById('msgCount');
newMsgCount.innerHTML = 23;


//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var newName = document.getElementById('fullname');
newName.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var newAge = document.getElementById('age');
newAge.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var newJob = document.createElement('div');
newJob.id = "job";
newJob.innerHTML = "Clown and Restauranteur";
document.getElementById('data').appendChild(newJob);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var newHobbies = document.createElement('div');
newHobbies.id = "hobbies";
newHobbies.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
document.getElementById('data').appendChild(newHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var newLoc = document.createElement('div');
newLoc.id = "location";
newLoc.innerHTML = "Honolulu, HI";
document.getElementById('data').appendChild(newLoc);


//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var lookingFor = document.createElement('div');
lookingFor.id = "wants";
lookingFor.innerHTML = "Looking for a Mrs. McDonald."
document.getElementById('data').appendChild(lookingFor);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var myProfile = document.createElement('div');
myProfile.id = "pro2";
myProfile.innerHTML = "I'm a lovable clown with a affinity for fun. I love to eat, jam, and crush burgers!!!!!!!!";
document.getElementById('profile').appendChild(myProfile);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var newMatch = document.getElementsByClassName('firstName');
newMatch[0].innerHTML = "Wendy"


//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var newOtherAge = document.getElementsByClassName('otherAge');
newOtherAge[0].innerHTML = "48";


//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var newStatus = document.getElementsByClassName('status');
newStatus[0].innerHTML = "Single Mother"

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var newName2 = document.getElementsByClassName('firstName');
newName2[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




