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
      last: {
        hui: ['Pizda', 'Rigat']
      }
    }
  }
function createTree(container, obj) {
  container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj, flag) {
  if (isObjectEmpty(obj)) {
    var span = document.createElement('span');
    span.innerHTML = Array.isArray(obj) ? `[ ${obj.join(', ')} ]` : obj;
    span.style.paddingLeft = '15px';
    span.style.color = 'blue';
    return span
  };
  var ul = document.createElement('ul');
  if (flag) ul.style.display = 'none';
  for (var key in obj) {
    var li = document.createElement('li');
    li.innerHTML = key;
    var childrenUl = createTreeDom(obj[key], true);
    li.appendChild(childrenUl)
    if (li.children[0].tagName !== 'SPAN')
    {
      li.addEventListener('click', (ev) => {
        ev.stopPropagation()
        var firstChild = ev.target.children[0]
        if (firstChild.tagName === 'span') return;
        firstChild.style.display = firstChild.style.display === 'none' ? '' : 'none'
      })
    }
    if (childrenUl) 
    ul.appendChild(li);
  }
  return ul;
}

function isObjectEmpty(obj) {
  if ( typeof obj !== 'object' || Array.isArray(obj)) return true
  return false;
}

var container = document.getElementById('container');
createTree(container, test);
