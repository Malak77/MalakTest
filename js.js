


var presentHere = document.getElementById("WrappetRN-Gallery");

fetch("https://picsum.photos/list").then(response=>response.json()).then(data=>{


                for(var i=0;i<10;i++){

             var img=document.createElement("img");
            img.src="https://picsum.photos/200/300?image"+data[i].id+"";
            presentHere.appendChild(img);

}

});

var King = (function(){
            console.log("Kikkkkkkkkkkkng")

    })();
    
