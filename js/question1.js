var list=new Array();
var result=[];
var correct_ans;
var opSelect;
var marks=0;
var qno=1;
var uname="sagar";
var pass="sagarqed42";
var index=0;
$(document).ready(function(){
 var search= window.location.href.toString().split('?')[1];
 $.getJSON("http://intern.ship/quiz/question.json?"+search, function(result) {
  list= result;
  display();
  localStorage.setItem("names", JSON.stringify(list));
});
});
function display() {
  document.getElementById("qus").innerHTML="&nbsp;"+qno+"/"+(list.length)+"&nbsp;.&nbsp;&nbsp;" + list[index].title;
  document.getElementById("op1").value=list[index].field_opt;
  document.getElementById("op2").value=list[index].field_option;
  document.getElementById("op3").value=list[index].field_op;
  document.getElementById("op4").value=list[index].field_option_4;
  document.getElementById("dop1").innerHTML=list[index].field_opt;;
  document.getElementById("dop2").innerHTML=list[index].field_option;
  document.getElementById("dop3").innerHTML=list[index].field_op;
  document.getElementById("dop4").innerHTML=list[index].field_option_4;
  document.getElementById("notify").style.display='none';
  correct_ans=list[index].field_correct_option;
  if(list.rest==null)
  {
    document.getElementById("gonext").style.color="red";
    document.getElementById("gonext").value="Finish";
  }
}
function nextQuestion() {
  if (document.getElementById("op1").checked == true) {
   opSelect=document.getElementById("op1").value;
 }
 else if (document.getElementById("op2").checked == true) {
   opSelect=document.getElementById("op2").value;
 }
 else if (document.getElementById("op3").checked == true) {
  opSelect=document.getElementById("op3").value;
}
else if (document.getElementById("op4").checked == true) {
 opSelect=document.getElementById("op4").value;
}
else
{
  document.getElementById("notify").innerHTML="* Please Select Option."
  document.getElementById("notify").style.display='block';
  return false;
}
if((opSelect.toString()).localeCompare(correct_ans.toString())==0)
{
  marks++;
}
result.push(opSelect.toString());
index++;
qno++;
if(index<list.length)
{
  document.getElementById("op1").checked =false;
  document.getElementById("op2").checked =false;
  document.getElementById("op3").checked =false;
  document.getElementById("op4").checked =false;
  display();
}
if(index==list.length)
{
  alert("Total No of Correct Answer"+marks);
  localStorage.setItem('results', JSON.stringify(result) );
  window.location="result.html";
}
}

function adminLogin() {
  var u=document.getElementById("uid").value;
  var p=document.getElementById("upass").value;
  document.getElementById("empty").innerHTML="";

  if(u==uname && p==pass)
  {
   window.location="admin.html";
 }
 else if(u!=uname || p!=pass)
 {
  document.getElementById("empty").innerHTML="* Incorrect User name or Password."
  document.getElementById("empty").style.color='red';
}
}
var tmp;
function resetField() {
  document.getElementById("ques").value="";
  document.getElementById("op1").value="";
  document.getElementById("op2").value="";
  document.getElementById("op3").value="";
  document.getElementById("op4").value="";
}


function addQuestion(){
  //localStorage.setItem("names", JSON.stringify(list.rest));
  var ddl = document.getElementById("option");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
  if(selectedValue=="A")
    ans=document.getElementById("op1").value;
  if(selectedValue=="B")
    ans=document.getElementById("op2").value;
  if(selectedValue=="C")
    ans=document.getElementById("op3").value;
  if(selectedValue=="D")
    ans=document.getElementById("op4").value;
  q=(document.getElementById("ques").value).trim();
  o1=(document.getElementById("op1").value).trim();
  o2=(document.getElementById("op2").value).trim();
  o3=(document.getElementById("op3").value).trim();
  o4=(document.getElementById("op4").value).trim();
  if(q.trim().length == 0)
  {
    document.getElementById("ques").focus();
    return false;
  }
  if(o1.trim().length==0)
  {
    document.getElementById("op1").focus();
    return false;
  }
  if(o2.trim().length==0)
  {
    document.getElementById("op2").focus();
    return false;
  }
  if(o3.trim().length==0)
  {
    document.getElementById("op3").focus();
    return false;
  }
  if(o4.trim().length==0)
  {
    document.getElementById("op4").focus();
    return false;
  }
  var jsonData = JSON.stringify(data);
  resetField();
}
