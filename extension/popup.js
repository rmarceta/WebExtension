var object = null;

function GetHttp(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  var url = tabs[0].url;
  var result = url.split("://");
  var domainName = result[1];
  var result2 = domainName.split("/");
  var domainName2 = result2[0];
  	if(domainName2 == "newtab")
		domainName2="";
  var response = GetHttp("http://freegeoip.net/json/" + domainName2);
	
  var obj = JSON.parse(response);
	object = obj;

	
  	document.getElementById("inf").innerHTML="<b>IP address:</b> " + obj.ip + '<br>' +  "<b>Country:</b> " + obj.country_name +  '<br>' + "<b>Region:</b> "+ obj.region_name + '<br> '+ "<b>City:</b> " + obj.city + '<br>' + "<b>Time zone:</b> " + obj.time_zone;



});



