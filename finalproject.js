newTask = function() {
  myBox= document.querySelector("#textbox");
  myUl = document.querySelector("#tasklist");
  myLi = document.createElement("li");
  myInput = document.createElement("INPUT");
  myInput.type="checkbox";
  myText = document.createTextNode(myBox);
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  
  myPriority= document.querySelector("#priority");
  myLi.classList.add(myPriority).value;



}



  

