name_array=[];
function submit(){
    var display_array=[];
    for(j=1;j<=4;j++){
        var name1=document.getElementById("name_of_the_student_"+j).value;
        name_array.push(name1);
    }
    var length=name_array.length;
    for(k=0;k<length;k++){
        display_array.push("<h4>name-"+name_array[k]+"</h4>");
    }
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove=display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    var display_array1=[];
    var length1=name_array.length;
    for(k=0;k<length1;k++){
        display_array1.push("<h4>name-"+name_array[k]+"</h4>");
    }
var remove1=display_array1.join(" ");
document.getElementById("display_name_without_commas").innerHTML="";
document.getElementById("display_name_without_commas").innerHTML=remove1;
}