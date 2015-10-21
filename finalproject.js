newTask = function() {
  myBox= document.querySelector("#textbox");
  myUl = document.querySelector("#tasklist");
  myLi = document.createElement("li");
  myInput = document.createElement("input");
  myInput.type="checkbox";
  myInput.onclick = boxchecked;
  myText = document.createTextNode(myBox.value);
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  
  myPriority= document.querySelector("#priority").value;
  myLi.classList.add(myPriority);
  
  myUl.appendChild(myLi);

}

boxchecked = function() {
  
  this.parentNode.classList.add("done")
}



  

