const main=document.querySelector(".main")
const addButton=document.querySelector("#addnote")
addButton.addEventListener("click",()=>{
addnote()
})

function savenotes(){
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value)
    });
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        
        localStorage.setItem("notes",JSON.stringify(data))
    }
}



const addnote=(text=" ")=>{
    const note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
            <div class="tool">
                <a href="#"><i class="fa-regular fa-floppy-disk Save"></i></a>
                <a href="#"><i class="fa-solid fa-trash Trash"></i></a>
            </div>
            <textarea >${text}</textarea>
        `
    note.querySelector(".Trash").addEventListener("click",
        ()=>{
            note.remove()
            savenotes()  
        })
        note.querySelector(".Save").addEventListener("click",
    ()=>{
        savenotes()
    })  
main.appendChild(note);
savenotes()
}
(
function() {
const LSnotes=JSON.parse(localStorage.getItem("notes"));
if(LSnotes==null){
addnote()
}else{
LSnotes.forEach((LSnotes)=>{
    addnote(LSnotes)
})}
}
)()
