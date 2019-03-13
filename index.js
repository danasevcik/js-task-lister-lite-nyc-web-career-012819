document.addEventListener("DOMContentLoaded", () => {

  let submitButton = document.getElementsByTagName('input')[1].addEventListener("click", function(event) {
    event.preventDefault();
    newTask();
  })

  function newTask() {
    let input = document.getElementsByTagName('input')[0].value
    let newTaskPara = document.createElement('p')
    let newTaskPrinted = document.createTextNode(input)
    newTaskPara.appendChild(newTaskPrinted)
    document.getElementById('list').appendChild(newTaskPara)
  }



})
