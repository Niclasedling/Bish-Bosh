function rangeValue(range, label){
    document.getElementById(label).innerHTML = document.getElementById(range).value

}

function getValue(){
    
    var rangeNumber = document.getElementById("nummer").value;
    var bishNumber = document.getElementById("bish").value;
    var boshNumber = document.getElementById("bosh").value;
    var bishboshlist = document.getElementById("bish-bosh-list");
    bishboshlist.innerHTML = "";

    for (let i = 1; i <= rangeNumber; i++) {

        var item = document.createElement('li');
        
        if (i % bishNumber == 0 && i % boshNumber == 0) {
            
            // Här ska det stå Bish-Bosh
            item.innerHTML = "Bish-Bosh";
            item.className = "green";
            bishboshlist.appendChild(item);
        }
        else if (i % bishNumber == 0) {
            
            // Här ska det stå Bish!
            item.innerHTML = "Bish";
            item.className = "red";
            bishboshlist.appendChild(item);
        }
        else if (i % boshNumber == 0) {
            
            // Här ska det stå Bish-Bosh
            item.innerHTML = "Bosh";
            bishboshlist.appendChild(item);
        }
        else{
            item.innerHTML = i;
            bishboshlist.appendChild(item);
        } 
        
        
    }
}