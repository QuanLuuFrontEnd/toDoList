
/**
* Khai bao bien
*/
var dsTask = new TaskList();
var validation = new Validation();
var util = new Util();
let contentTodoHTML = "";
let contentCompletedHTML = "";
prepare(dsTask);
renderTask(dsTask.arr);
/**
 * DOM id
 */
function getEle(id) {
    return document.getElementById(id);
}
/**
* Lay thong tin Task
*/
function layThongTinTask() {
    //DOM lấy các thông tin user nhập vào các thẻ input
    var taskName = getEle("newTask").value;
    console.log("taskName: " + taskName);
    var ketQua = dsTask.timKiemTask(taskName);


    if (validation.kiemTraRong(taskName, "notiInput", "Khong duoc rong") &&
        validation.kiemTraTrung(ketQua.length, "notiInput", "Khong duoc trung Task")) {
        var id = Math.random();
        var status = false;

        var task = new Task(id, taskName, status);

        return task;
    }
    return null;
}

function hienThi(task) {
    if (task.status == false)
        contentTodoHTML += `        
    <li>              
    <span >${task.taskName}</span>
    <div class="buttons">
    <button class="remove" data-index="0" data-status="todo" onclick="deleteTask('${task.id}')">
      <i class="fa fa-trash-alt"></i>
    </button>
    <button class="complete" data-index="0" data-status="todo" onclick="completeToDo('${task.id}')">
      <i class="far fa-check-circle"></i>
      <i class="fas fa-check-circle"></i>
    </button>
    </li>
      `;
    else
        contentCompletedHTML += `        
    <li>              
    <span >${task.taskName}</span>
    <div class="buttons">
    <button class="remove" data-index="0" data-status="todo" onclick="deleteTask('${task.id}')">
      <i class="fa fa-trash-alt"></i>
    </button>
    <button class="complete" data-index="0" data-status="todo" onclick="completeToDo('${task.id}')">
      <i class="far fa-check-circle"></i>
      <i class="fas fa-check-circle"></i>
    </button>
    </li>
      `;

}


/**
* Hien thi danh sach Task
*/
function renderTask(data) {
    contentTodoHTML = "";
    contentCompletedHTML = "";
    if (data !== undefined) {
        data.forEach((task) => hienThi(task));

        getEle("todo").innerHTML = contentTodoHTML;

        getEle("completed").innerHTML = contentCompletedHTML;


    }
}
function getLocalStorage() {
    var dataString = localStorage.getItem("DSTask");
    //convert string => JSON
    dsTask.arr = JSON.parse(dataString);
    //render tbody
    renderTask(dsTask.arr);
}
function setLocalStorage() {
    //convert data JSON => String
    var dataString = JSON.stringify(dsTask.arr);
    localStorage.setItem("DSTask", dataString);
}
/**
 * Xử lý nút delete
 */
function deleteTask(id) {
    dsTask.deleteTask(id);
    renderTask(dsTask.arr);
    setLocalStorage();
}
/**
 * Xử lý nút hoàn thành
 */
function completeToDo(id) {
    var task = dsTask.getTaskById(id);
    console.log("task cap nhat: " + task);
    task.status = true;
    console.log("task status cap nhat: " + task.status);
    dsTask.capNhatTask(task);
    setLocalStorage();
    renderTask(dsTask.arr);

}


/**
 * Them task
 */
getEle("addItem").addEventListener("click", function () {
    var task = layThongTinTask();
    if (task) {
        dsTask.addTask(task);
        renderTask(dsTask.arr);
        setLocalStorage();
        resetForm();
        util.export(dsTask);
    }
});
function resetForm() {
    getEle("newTask").value = "";
}

function prepare(dsTask) {
    util.import("./src/data/TaskData.json");
    setLocalStorage();

}