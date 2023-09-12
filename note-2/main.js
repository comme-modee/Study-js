//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다
//delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check 버튼을 클릭하는 순간 true false
//2. true이면 끝난 걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면 언더바가 이동한다
//끝남탭은 끝난아이템만 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let filterList = [];
let underline = document.getElementById("underline");

addButton.addEventListener("click",addTask);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){
        filter(event);
        underlineSlide(event);        
    })
}

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };
    taskList.push(task);
    render();
    taskInput.value = "";
}

function render(){
    let list = [];
    if(mode == "all"){
        list = taskList;
    } else if(mode == "ongoing" || mode == "done"){
        list = filterList;
    } 
    
    let resultHTML = '';
    for(let i=0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task task-done-color">
            <div class="task-done">${list[i].taskContent}</div>
            <div class="task-button">
                <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
                <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div class="task-button">
                <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-square-check"></i></button>
                <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            filterList.splice(i,1);
            break;
        }
    }
    render();
}

function filter(event){
    mode = event.target.id;
    filterList = [];
    
    if(mode == "all"){
        render();
    } else if(mode == "ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    } else if(mode == "done"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i]);
            }
        }
        render();        
    }    
}

function underlineSlide(event){
    underline.style.left = event.currentTarget.offsetLeft + "px";
    underline.style.width = event.currentTarget.offsetWidth + "px";
    underline.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight - 5 + "px";
}


function randomIDGenerate(){
    return '_' + Math.random().toString(36).substring(2,9);
}
