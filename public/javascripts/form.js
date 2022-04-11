const element =(
  <div>
    <form method="post" id="form">
        <label> Enter your first name </label><br />
        <input type="text" id="first" placeholder="Enter your first name"></input><br />
        <label> Enter your last name</label> <br />
        <input type="text" id="last" placeholder="Enter your last name"></input> <br /><br />
        <input type="submit" value="Post something"></input>
    </form>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('container')
);

let xhttp = new XMLHttpRequest(); 

function sendStuff(event) {
  xhttp.addEventListener("load",success); 
  xhttp.addEventListener("error",error);  
  xhttp.open("POST", "/form", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  let formData = {} // initialize object formData
  // for loop: go through all form inputs (title and paragraph) and build object formData
  // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
  // https://www.w3schools.com/jsref/met_element_getattribute.asp
  document.querySelectorAll("input[type='text']").forEach(function(element){
    formData[element.getAttribute("id")] = element.value;
  });
  xhttp.send(JSON.stringify(formData));

  /* // Alternative 
  let formData = {
    "first": document.getElementById("first").value,
    "last": document.getElementById("last").value
  };*/
  
  // reference: https://www.w3schools.com/jsref/event_preventdefault.asp
  event.preventDefault(); // prevent form default event which refreshes the page
}
  
function success(){
  let data = JSON.parse(xhttp.response);
  let echo = (
    <div>
      <p><strong> Your first name is </strong> {data.first}</p>
      <p><strong> Your last name is </strong> {data.last}</p>
    </div>
  );
  
  ReactDOM.render(
    echo,
    document.getElementById('echo')
  );
}
function error(){
  console.log(xhttp.readyState);
  console.log(xhttp.status);
  
}

document.getElementById("form").addEventListener("submit", sendStuff);