
var field = 0;
/*Funcion para contador que me dara siempre el ultimo valor del length del texto*/
var limitText = function (limitField, limitCount, limitNum) {

    var textA = document.getElementsByName("message")[0];


    limitCount.value = limitNum - limitField.value.length;
    field = limitField.value.length;
    textA.style.height = "25px";
    textA.style.height = (20+textA.scrollHeight)+"px";
};

var twit = function (fieldValue) {

    if (fieldValue>0 && fieldValue<=140){

        var sendButton = document.getElementsByName("enviar")[0];
        var thinkInput = document.getElementsByName("message")[0];
        var timeLine = document.getElementsByName("lineaDeTiempo")[0];


        // sendButton.onclick = function() {

            var tuitDiv = document.createElement("div");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            var date = new Date()
            tuitDiv.appendChild(tuitP);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.className = "tuit";
            dateSpan.textContent = date.toLocaleTimeString();
            tuitP.textContent = thinkInput.value;

            timeLine.style.display="block";

            timeLine.insertBefore(tuitDiv, timeLine.children[0]);

            document.getElementById("textInput").value="";
            field=0;
            document.getElementsByName("countdown")[0].value="140";

        } else {
            return false;
        }
    }
