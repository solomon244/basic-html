var time = new Date().getHours();
var timeEventJS = document.getElementById("timeEvent");
var messageText;
var lolcatImage = document.getElementById("lolcat");
var image;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyButton =
	document.getElementById("partyTimeButton");
var partyStatus;
var wakeUpSelector =
	document.getElementById("wakeUpTimeSelector");
var lunchSelector =
	document.getElementById("lunchTimeSelector");
var napSelector =
	document.getElementById("napTimeSelector");


var updateClock = function()
{		
	if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "PARTY TIME!";
	} 
	else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "NAP TIME...";
	} 
	else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "LUNCH TIME!!";
	} 
	else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "WAKEUP TIME.";
	} 
	else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
	} 
	else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
	} 
	else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
	}
	
	lolcatImage.src = image;
	timeEventJS.innerText = messageText;
	showCurrentTime();
};



var showCurrentTime = function()
{
	var clock = document.getElementById("clock");
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}	
	if (hours > noon)
	{
		hours = hours - 12;
	}	

	// set minutes
	if(minutes < 10)
	{
		minutes = "0" + minutes;	
	}	

	// set seconds
	if(seconds < 10)
	{
		seconds = "0" + seconds;	
	}	

	var clockTime = hours + ":" + minutes + ":" + 			seconds + " " + meridian;

	clock.innerText = clockTime;

};	

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function ()
{
	if (isPartyTime === false)
	{
		isPartyTime = true;
		time = partyTime;
		partyStatus = "Party Over"; 
		partyButton.style.background =
			"#0A8DAB";
	}	
	else
	{
		isPartyTime = false;	
		time = new Date().getHours();
		partyStatus = "PARTY TIME!";
		partyButton.style.background =
			"#222";
	}	
	
	partyButton.innerText = partyStatus;
};	

partyButton.addEventListener("click", partyEvent);

var wakeUpEvent = function ()
{
	wakeupTime = wakeUpSelector.value; 	
};	
wakeUpSelector.addEventListener("change", wakeUpEvent);

var lunchEvent = function()
{
	lunchTime = lunchSelector.value;	
};	
lunchSelector.addEventListener("change", lunchEvent);

var napEvent = function ()
{
	napTime = napSelector.value;	
};	
napSelector.addEventListener("change", napEvent);