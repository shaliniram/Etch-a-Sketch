// let n;

// let but = document.getElementById('resize');
// but.addEventListener('click',()=>{
// n=prompt("Select grid size: 16 , 32 ,64",16);

// })

createGrid(16);

function createGrid(size) {
for (let i = 0; i < 16; i++) {
    
    let div_element= document.createElement('div');
    div_element.classList.add('container');
    div_element.setAttribute('id',i);
    document.getElementById('main').appendChild(div_element);
    for (let j = 0; j < 16; j++) {
        
        const div_child= document.createElement('div');
        div_child.classList.add('container_items');
        let div_parent=document.getElementById(i);
        div_parent.appendChild(div_child);
        div_child.classList.add('container_items');
        // div_child.setAttribute('id',"div"+i+j);
    
        div_child.addEventListener("mouseover",function(){
                    this.classList.add("add_color");
                    })
    
          }
    
      }}


      let but = document.querySelector('.reset');
      but.addEventListener('click',()=>{
        document.getElementById('main').replaceChildren();
        createGrid(16);
      })