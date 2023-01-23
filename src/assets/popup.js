window.addEventListener("laod", function(){
    setTimeout(
      function open(event){
        document.querySelector(".popup").style.display="block";
      },
      1000
  )
  }); 
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
alert("hi");
function TestHello(){
    alert("hi");
}