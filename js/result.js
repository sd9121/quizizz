function resultDisplay()
{
var results = JSON.parse(localStorage.getItem("results"));
var list= JSON.parse(localStorage.getItem("names"));
var div=document.getElementById("associatedAssets");
var tab = "<table><tr><th>Question</th><th>Correct Answer</th><th>Your Answer</th></tr>";
for (var i=0; i<results.length; i=i+1)
{
  if(list[i].field_correct_option!=results[i])
    tab += "<tr><td style='background-color:red;'>"+(i+1)+"." + list[i].title+ "</td><td style='background-color:red;'>" + list[i].field_correct_option+ "</td><td style='background-color:red;'>" + results[i] + "</td></tr>";
    else
     tab += "<tr><td style='background-color:#d1e0e0'>"+(i+1)+"." + list[i].title+ "</td><td style='background-color:#d1e0e0'>" + list[i].field_correct_option + "</td><td style='background-color:#d1e0e0'>" + results[i] + "</td></tr>";
    }
        tab += "</table>";
        div.innerHTML = tab;
}
function goHome()
{
  window.location="index.html";
}

