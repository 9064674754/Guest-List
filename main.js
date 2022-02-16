var names_of_people = [];

function submit()
{
    var GuestName = document.getElementById("name1").value;
	// use the push function as - names_of_people.push(GuestName);
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("name1").value="";
	document.getElementById("display_name").innerHTML="The names are : " + names_of_people.toString() +".";
	
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people.sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s = document.getElementById("s1").value;
	document.getElementById("s1").value="";
	s.toString();
	var found=0;
	var j;
	for(j=0; j<=names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
			  found++;
			}	
		}
	document.getElementById("p2").innerHTML="Name is found "+found+" times .";

	console.log("found name "+found+" time/s");
}
