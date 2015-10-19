newTask = function() {
  myUl = document.querySelector('#tasklist');
  newli = document.createElement('li');
  newInput = document.createElement('input');
  newInput.type = "checkbox";
  newli.appendChild(newInput);
  taskenter = document.querySelector('#entertext').value;
  task = document.createTextNode(taskenter);
  taskenter.appendChild(task);
  newli.appendChild(taskenter);
  myUl.appendChild(newli);
}

