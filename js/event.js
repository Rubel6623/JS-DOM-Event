document.getElementById('btn').onclick=function click(){
  document.body.style.backgroundColor='yellow';
}


function makeRed(){
  document.body.style.backgroundColor='red';
}

document.getElementById('green').addEventListener('click',function(){
  document.body.style.backgroundColor='green';
})

document.getElementById('title').addEventListener('click', function(){
  document.getElementById('event').innerText='Title Change by event handler';
})

document.getElementById('btn-update').addEventListener('click', function(){
  const inputField=document.getElementById('input-value');
  const inputValue=inputField.value;
  document.getElementById('update-text').innerText=inputValue;
  inputField.value='';
})


document.getElementById('delete-comment').addEventListener('keyup', function(event){

  const inputText=event.target.value;
  
  if(inputText==='delete'){
    document.getElementById('del-btn').disabled=false;
  }
  else{
    document.getElementById('del-btn').disabled=true;
  }
})


document.getElementById('del-btn').addEventListener('click', function(){
  const cmt=document.getElementById('comment');
  cmt.style.display='none';
})