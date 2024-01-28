document.getElementById('delete-confirm').addEventListener('keyup', function(event){
  const inputValue = event.target.value;
  const delete_btn = document.getElementById("delete-btn");
  if (inputValue==='delete'){
        // delete_btn.removeAttribute('disabled');
        delete_btn.disabled=false;
    } else {
        // delete_btn.setAttribute('disabled', true);
        delete_btn.disabled=true;
      };
  })

document.getElementById('delete-btn').addEventListener('click', function(event){
  const git= document.getElementById("my-git");
  git.style.display='none';     
})



// let a=new String("something");
// const num=[1,2,3,4,5];
// console.dir(num[Symbol.iterator]());