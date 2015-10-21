newTask = function() {
  myBox= document.querySelector("#textbox");
  myUl = document.querySelector("#tasklist");
  myLi = document.createElement("li");
  myInput = document.createElement("input");
  myInput.type="checkbox";
  myText = document.createTextNode(myBox.value);
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  
  myPriority= document.querySelector("#priority").value;
  myLi.classList.add(myPriority);



}



  

