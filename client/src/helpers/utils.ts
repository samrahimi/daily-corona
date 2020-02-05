
//Converts an in-memory JSON object into formatted text and 
//saves as a file to the user's local machine
export function jsonExport(filename, json) {
  var text = JSON.stringify(json, null, 2)
  
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  return false
}

export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}
