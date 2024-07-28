
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
  addEventListener("keydown", function(e) {
    elem = document.getElementById("info");
    elem.innerHTML = "<p> "+e.keyCode + "</p>"; 
    elem = document.getElementById("animate");
    if(e.keyCode == 37){
      let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.t
      elem.style.left = 5 + "px"; 
    }
  }
      
    }
    if(e.keyCode== 39){
      let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.right = 5 + "px"; 
    }
  }
    }
    if(e.keyCode== 40){
      let id = null;
      const elem = document.getElementById("animate");   
      let pos = 0;
      clearInterval(id);
      id = setInterval(frame, 5);
    function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = 5+"px";
      elem.style.bottom = 5+ "px"; 
    }
  }
    }
    if(e.keyCode== 38){
      let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = 5 + "px"; 
    }
  }
    }
  });
