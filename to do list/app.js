// select dom
let item = document.getElementById('typer');
const button = document.querySelector('#button');
const list = document.querySelector('.list');
// functions

function toggleToDo() {
// create li
  const ele = document.createElement('li');
  ele.innerText = item;
  ele.classList.add('addings');
  list.appendChild(ele);
// create trash button
  const mark = document.createElement('button');
  mark.innerHTML = '<i class ="fas fa-trash" id= "del"></i>';
  mark.classList.add('mark_button');
  list.appendChild(mark);
// list
}
function deleteCheck (e){
    const item = e.target;
    const ord = document.querySelector('.addings');
    const btn = document.querySelector('.mark_button');
    let icon = document.getElementById('del');
    console.log(item);
    //delete todo
    if(e.target.classList.contains('mark_button')){
     ord.remove();
     btn.remove();
    } else if (item === icon){
     ord.remove();
     btn.remove();
    }
}





// event listeners
button.addEventListener('click', toggleToDo);
item.addEventListener('change', () => {
    item = document.getElementById('typer').value;
});
list.addEventListener('click', deleteCheck);
