function Util() {
    this.import = function (url) {
        $.get(url, function (data, status) {
            data.forEach(task => { dsTask.addTask(task) });
            renderTask(dsTask.arr);

        })
    };
    this.export = function (dsTask) {
        const a = document.createElement("a");
        console.log("dsTask.toString(): " + dsTask.toString());
        a.href = URL.createObjectURL(new Blob([JSON.stringify(dsTask.arr)], {
            type: "text/plain"
        }));
        a.setAttribute("download", "TaskData.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}