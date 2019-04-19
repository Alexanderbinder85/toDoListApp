window.addEventListener("load", function () {

let textField = document.getElementById('textField');
let button = document.getElementById('taskButton');
let taskList = document.querySelector('#taskList');




button.onclick = function(){
 
  let newTask = document.createElement('LI');
  let taskText = textField.value;
  let taskTextNode = document.createTextNode(taskText);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add("check");
  newTask.appendChild(checkbox);
  checkbox.onclick = function() {
    newTask.setAttribute('style', 'text-decoration: line-through');
    window.setTimeout(function(){
      taskList.removeChild(newTask);
    }, 1500);
  }


  newTask.classList.add("list-group-item");
  newTask.appendChild(taskTextNode);
  taskList.appendChild(newTask);
  textField.value = "";
}



});




















// explaining forEach for a bit 
    

// let total = 0;

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(e) {
//     total += e;
// });
// console.log(total);


// let total = 0;
// let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// for (let i = 0; i < elements.length; i++) {
//   total +=  elements[i]; 
// }
// console.log(total);


// let total = 0;
// let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// elements.forEach(function(e, i){
//     console.log(i);
//     total += e; 
// })




// let tasks = [];
// do {
//     var taskInput = prompt('Enter Task');
//     if(taskInput !== 'quit') {
//         tasks.push(taskInput);
//     }
// } 
// while (taskInput !== 'quit');

// tasks.forEach(function(e){
// console.log(e);
// });..