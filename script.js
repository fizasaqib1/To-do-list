 document.querySelector('.img').onclick = function(){
if(document.querySelector('.newtask input').value.length == 0){
alert("Please enter a task")
}
else{
    document.querySelector('.addtask').innerHTML += `
    <div class="addtask">
    <span id="tasks">
        ${document.querySelector('.newtask input').value}

        </span>
        <button class="trash">
        <img src="trash.svg">
        </button>
        </div>
        `;
        

}

document.querySelector(".newtask input").value = "";

var trash = document.querySelectorAll('.trash');
for(var i=0; i<trash.length; i++){
trash[i].onclick =function(){
 this.parentNode.remove();
}
}
var complete = document.querySelectorAll('#tasks'); 
for( var i=0; i<complete.length ; i++){
complete[i].onclick = function(){
  this.classList.toggle('completed');

}
}
}