function TaskList() {
    this.arr = [];
    // _findIndex (tìm vị trí theo id)
    this.findIndex = function (id) {

        var index = -1;
        console.log("task id truyen vao:" + id);
        this.arr.forEach(function (task, i) {
            console.log("task: " + task);
            console.log("i: " + i);
            if (task.id === id * 1) {
                index = i;
                console.log("index: " + index);
            }
        });

        return index;
    };
    // ➢ addTask,
    this.addTask = function (task) {
        this.arr.push(task);
    };

    // ➢ deleteTask,
    this.deleteTask = function (id) {
        var index = this.findIndex(id);
        console.log("id trong delete la: " + id);
        console.log("index trong delete la: " + index);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    // ➢ getTaskById (lấy thông tin task: gồm gồm các thuộc tính),
    this.getTaskById = function (id) {
        var index = this.findIndex(id);

        if (index !== -1) {
            return this.arr[index];
        }

        return null;
    };

    // ➢ updateTask.

    this.capNhatTask = function (task) {
        var index = this.findIndex(task.id);

        if (index !== -1) {
            this.arr[index] = task;
        }
    };
    // Tim kiem
    this.timKiemTask = function (keyword) {

        mangTimKiem = [];

        this.arr.forEach(function (task) {
            var hoTenLowerCase = task.taskName.toLowerCase();
            var keywordLowerCase = keyword.toLowerCase();
            console.log("hoTenLowerCase: " + hoTenLowerCase);
            console.log("keywordLowerCase: " + keywordLowerCase);
            if (hoTenLowerCase === keywordLowerCase) {
                mangTimKiem.push(task);
            }
        });

        // console.log("mangTimKiem: "+mangTimKiem);
        // console.log("mangTimKiem.length: "+mangTimKiem.length);
        return mangTimKiem;
    };

}