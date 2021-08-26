

function displayRangenum(range, label){
    document.getElementById(label).innerHTML = document.getElementById(range).value
}


function calculateNum(){
    
    var amount = document.getElementById("number").value;
    var bishNumb = document.getElementById("bish").value;
    var boshNumb = document.getElementById("bosh").value;
    var unorderedList = document.getElementById("bish-bosh-list");
    
    //Raderar ifrån listan så den kan uppdateras!
    unorderedList.innerHTML = "";
    
    for (let i = 1; i <= amount; i++) {
        // Skapar upp listitems
        var listItem = document.createElement("li");
        
        if (i % bishNumb == 0 && i % boshNumb == 0) {
            
            // Om kravet stämmer överens kommer "Bish-Bosh" 
            // att läggas till i innerHTML på listitem
            listItem.innerHTML ="Bish-Bosh";
            listItem.className = "green";
            unorderedList.appendChild(listItem);
        }
        else if (i % bishNumb == 0) {
            
            // Om kravet stämmer överens kommer "Bish" 
            // att läggas till i innerHTML på listitem
            listItem.innerHTML = "Bish";
            listItem.className = "red";
            unorderedList.appendChild(listItem);
        }
        else if (i % boshNumb == 0) {
            
            // Om kravet stämmer överens kommer "Bosh" 
            // att läggas till i innerHTML på listitem
            listItem.innerHTML = "Bosh";
            listItem.className = "blue";
            unorderedList.appendChild(listItem);
        }
        else {
            // Annars kommer värdet av "i" läggar i innerHTML
            listItem.innerHTML = i;
            unorderedList.appendChild(listItem);
        } 
    }
}