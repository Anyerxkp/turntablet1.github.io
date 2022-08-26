	var names=["Lenard","Chen Jian","Wu Fan","Tai","Mia","Sabrina","Queenie","Xiao Min","Kok Wee","Chi Keong"];
	var dis_names=document.getElementsByClassName('names')[0];
	var names_list="";
	for(var i=0;i<39;i++) names_list+="<li>"+names[i]+"</li>";
	dis_names.innerHTML=names_list;
	console.log(names[0]);
