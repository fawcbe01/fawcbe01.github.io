newTask = function() {
  myUl = document.querySelector('#tasklist')
  newli = document.createElement('li');
  myUl.appendChild("newli");
  newInput = document.createElement('input');
  newInput.type = "checkbox";
  taskenter = document.querySelector('#entertext').value;
  task = document.createTextNode('taskenter');
}

