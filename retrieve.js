

var RootRef=firebase.database().ref().child("User");
RootRef.on("child_added",snap => {
    var item1=snap.child("User");
    var name= snap.child("name").val();
    var cost= snap.child("cost").val();
    
    var btn= document.createElement("button");
    btn.innerHTML="Remove";

    //$("#table_body").append("<tr><td>"+ name +"</td><td>"+ cost + "</td></tr>");
    $("#table_body").append("<tr><td id='row'>" + name + "</td>" +"<td id='row1'>" + cost + "</td>" +"<td><div buttons>"+
                                  "<button onclick='deletebtn(item1)'>Remove</button>"+
                                  "</div></td></tr>");
    

  


});

var total=0;
RootRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot)
    {
    
    var cost= childSnapshot.child("cost").val();
    total=total+parseInt(cost);
    
});
$("#table_body").append("<tr><td>Total</td><td>"+ total + "</td></tr>");

});

function deletebtn(item1)
{

    RootRef.child(item1).remove();
    
    
}