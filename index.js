document.addEventListener("DOMContentLoaded", () => {

  document.getElementsByTagName('input')[1].addEventListener("click", function(event) {
    event.preventDefault();
    newTask();
  })

  let idCounter = 1

  function newTask() {
    let input = document.getElementsByTagName('input')[0].value;
    let newTaskPara = document.createElement('p');
    newTaskPara.id = idCounter;
    idCounter++;
    let newTaskPrinted = document.createTextNode(input);
    newTaskPara.appendChild(newTaskPrinted);
    document.getElementById('list').appendChild(newTaskPara);
    addDeleteButton();
    addEditButton();
  }

  function addDeleteButton() {
    let deleteButton =  document.createElement('button')
    deleteButton.innerHTML = 'Finished ✅'
    deleteButton.style.color = 'hotpink';
    deleteButton.style.backgroundColor = 'lightgrey';
    deleteButton.style.fontSize = 'small';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.margin = '5px 15px 5px 15px';
    document.getElementById(idCounter - 1).appendChild(deleteButton);

    document.getElementById(idCounter - 1).addEventListener("click", removeFromList)

    function removeFromList() {
      let thingToRemove = document.getElementById(idCounter - 1);
      thingToRemove.remove();
    }
  }

  function addEditButton() {
    let editButton =  document.createElement('button')
    editButton.innerHTML = 'Edit ✍🏻'
    editButton.style.color = 'hotpink';
    editButton.style.backgroundColor = 'lightgrey';
    editButton.style.fontSize = 'small';
    editButton.style.borderRadius = '5px';
    editButton.style.margin = '5px 15px 5px 15px';
    document.getElementById(idCounter - 1).appendChild(editButton);

    document.getElementById(idCounter - 1).addEventListener("click", removeFromList)

    function removeFromList() {
      let thingToRemove = document.getElementById(idCounter - 1);
      
    }
  }



})
