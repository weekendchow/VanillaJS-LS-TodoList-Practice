  (() => {
  const form = document.getElementById('form');
  const input = document.getElementById('newTodo');
  const btn = document.getElementById('btn');
  const list = document.getElementById('list');


  btn.addEventListener('click', e => {
    if(input.value === ''){
      alert('No input value!');
    }else{
      list.innerHTML += '<li>' + input.value + '</li>';
      store();
      input.value = "";
    }  
  })

  list.addEventListener('click', e => {
    let t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  })

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function retrieve() {
    let storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Let us make a to do list</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }

  retrieve();

  })();
