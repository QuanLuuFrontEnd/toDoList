function Validation() {
    this.kiemTraRong = function (value, spanId, mess) {
        if (value === "") {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = mess;
            return false;
        }

        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    };
    this.kiemTraTrung = function (value, spanId, mess) {
        console.log("value: "+value);
        if (value >0) {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = mess;
            return false;
        }

        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    };
}