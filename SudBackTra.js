function InsertDat(){
  var tabl=document.getElementByClassName("DispSud");
  var tbod=document.createElement("tbody");
  
  for(var i=0;i<10;i++){
    var trow=documrnt.createElement("tr");
    for(var j=0;j<10;j++){
      var tdata=document.createElement("td");
      var dat=document.createTextNode(j);
      tdata.appendChild(dat);
    }
    trow.appendChild(tdata);
  }
}
