
let   tabel = document.getElementById("tabel");
const submit = document.getElementById("sub");
const del = document.getElementById("btn-delete");
let objlist = [];

let generateobj =()=>{ 
return tabel.innerHTML= objlist.map((x)=>{
 let {firstName , lastName , rollNo ,action_1 , action_2 , id} = x ; 
return `
<tr class="allrows">
<td>${firstName}</td>
<td>${lastName}</td>
<td>${rollNo}</td>
<td>
<button type="button" class="btn-edit" onclick="edit(${rollNo})">${action_1}</button>
<button type="button" class="btn-delete" onclick="Delete(${rollNo})">${action_2}</button>
</td>
</tr>
`;

}).join("")}


//add object
submit.addEventListener('click' , (x)=>{

    document.getElementById("studentadded").style.display="block";
    document.getElementById("studentadded").innerHTML="Student Added";
    let obj = {
        firstName:document.getElementById("fname").value,
        lastName:document.getElementById("lname").value,
        rollNo:document.getElementById("Rno").value,
        action_1:"Edit" ,
        action_2:"Delete"
    }

x.preventDefault(); 
const rollNo =document.getElementById("Rno").value;
const found = objlist.some(el => el.rollNo=== rollNo);
if (!found){ 
objlist.push(obj);
generateobj(objlist);}

})


//delete the obj
function Delete(id){
    document.getElementById("studentadded").innerHTML="Student Deleted";
    const objWithIdIndex = objlist.findIndex((obj) => obj.id === id);
    objlist.splice(objWithIdIndex, 1);
    generateobj(objlist);
}

//edit
function edit(id){
    document.getElementById("studentadded").innerHTML="Student info edited"; 
let x ={
    firstName:document.getElementById("fname").value,
    lastName:document.getElementById("lname").value,
    rollNo:document.getElementById("Rno").value,
    action_1:"Edit" ,
    action_2 :"Delete"}
const idx= objlist.findIndex(y=>y.rollNo==x.rollNo)
objlist[idx]=x;
generateobj(objlist);
}

