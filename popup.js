try {
  chrome.devtools.panels.create("Observable",
    "icon.png",
    "popup.html",
    function (panel) {}
  );
} catch (err) {
  console.log(err)
}

const test = {
    id: "5cab9ea485342b28eb563252",
    name: {
      first: "Dominique",
      last: "Colon"
    }
  }
function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
  if (isObjectEmpty(obj)) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.innerHTML = obj;
    ul.appendChild(li);
    return ul
  };
  var ul = document.createElement('ul');
  for (var key in obj) {
    var li = document.createElement('li');
    li.innerHTML = key;
    var childrenUl = createTreeDom(obj[key]);
    if (childrenUl) li.appendChild(childrenUl);
    ul.appendChild(li);
  }
  return ul;
}

function isObjectEmpty(obj) {
  console.log(typeof obj)
  if ( typeof obj !== 'object' ) return true
  return false;
}

var container = document.getElementById('container');
createTree(container, test);
