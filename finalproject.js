newTask = function() {
  myBox= document.querySelector("#textbox");
  myUl = document.querySelector("#tasklist");
  myLi = document.createElement("li");
  myInput = document.createElement("Input");
  myInput.type="checkbox";
  myLi.appendChild(myInput);
  myText = document.createTextNode(myBox.value);
  myLi.appendChild(myText);
  
  myPriority= document.querySelector("#priority");
  myLi.classList.add(myPriority.value);

}

