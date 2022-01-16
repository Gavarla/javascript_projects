
// document.getElementById("addButton").addEventListener("click",addTask)
let i=0
let currentid=null
function addTask() {
    if (document.getElementById('addButton').innerText==='update') {
     const task=document.getElementById('inputBox').value
      document.getElementById(currentid).firstChild.innerText = task
      document.getElementById('inputBox').value = ''
      const updatebtn= document.getElementById('addButton')
      updatebtn.innerText='ADD'
      currentid = null
    }
    else{
    i=i+1
    const task=document.getElementById("inputBox").value  // input box value 
    const viewBody=document.getElementById("viewBody") // view box 
    const viewBodyDiv=document.createElement('div') // new div
    viewBodyDiv.id=i
    
    viewBodyDiv.style.display='flex' // added flex 
    const taskdiv=document.createElement('div') // div 
    taskdiv.innerText=task
 
    viewBodyDiv.append(taskdiv)
    viewBodyDiv.style.marginBottom='10px'
    taskdiv.style.margin='0 10px'

    const delbtn=document.createElement('button')
    delbtn.innerText="Delete"
    delbtn.className="button"
    delbtn.addEventListener('click',deletetask)
    delbtn.myparam=i

    const editbtn=document.createElement("button")
    editbtn.myparam = i
    editbtn.innerText="Edit"
    editbtn.className="button"
    editbtn.style.marginRight='10px'
    editbtn.addEventListener('click',edittask)
    
    viewBodyDiv.append(editbtn)
    viewBodyDiv.append(delbtn)
    viewBody.append(viewBodyDiv)
    document.getElementById('inputBox').value = ''

    }
}
function deletetask(event) {
    // alert(event.target.myparam)
    const viewBody = document.getElementById('viewBody')
    const viewBodyDiv = document.getElementById(event.target.myparam)
    viewBody.removeChild(viewBodyDiv)
    
}
function edittask(event) {
    const task = document.getElementById(event.target.myparam).firstChild.innerText
    document.getElementById('inputBox').value = task
   const updatebtn= document.getElementById('addButton')
   updatebtn.innerText='update'
   currentid=event.target.myparam
}