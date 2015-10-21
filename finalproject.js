newTask = function() {
  myBox= document.querySelector("#textbox");
  myUl = document.querySelector("#tasklist");
  myLi = document.createElement("li");
  myInput = document.createElement("INPUT");
  myInput.type="checkbox";
  myText = document.createTextNode(myBox).value;
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  
  myPriority= document.querySelector("#priority");
  myLi.classList.add(myPriority.value);

}

 li = document.createElement('li');
  newInput = document.createElement('input');
  newInput.type = "checkbox";
  newli.appendChild(newInput);
  taskenter = document.querySelector('#entertext').value;
  task = document.createTextNode(taskenter);
  newli.appendChild(taskenter);
  myUl.appendChild(newli);

  

