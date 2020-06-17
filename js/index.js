let btns=document.querySelectorAll(".buttons button");
let person=document.getElementsByClassName("person")[0];
console.log(person);

for(var i=0; i<btns.length;i++)
{
    btns[i].addEventListener("click", managePersonClass);
}

function managePersonClass()
{
    if(this.getAttribute("data-add"))
    {
        
        person.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove"))
    {
        person.classList.remove(this.getAttribute("data-remove"));
    }
    
}