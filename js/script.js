
function addPostedMessage(){
  var message = new Date()+' : '+document.getElementById('name').value+' of '
    + document.getElementById('customerType').value+' Customer type sent message : '
    + document.getElementById('message').value;
  
  var element = document.createElement('li');
  element.innerHTML = message;
  document.getElementById('postMessages').appendChild(element);
}