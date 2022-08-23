let box1 = document.getElementById('project1');
let box2 = document.getElementById('project2');
let box3 = document.getElementById('project3');
let box4 = document.getElementById('project4');

function yellow(){
  box1.style.backgroundColor = 'hsla(75, 100%, 64%, 0.505)'
  box2.style.backgroundColor = 'hsla(120, 100%, 64%, 0.505)';
  box3.style.backgroundColor = 'hsla(171, 100%, 64%, 0.505)';
  box4.style.backgroundColor = 'hsla(221, 100%, 64%, 0.505)';
}

function back(){
  box1.style.backgroundColor = ''
  box2.style.backgroundColor = '';
  box3.style.backgroundColor = '';
  box4.style.backgroundColor = '';
 }

box1.addEventListener('mouseover', yellow)
box1.addEventListener('mouseout', back)

box2.addEventListener('mouseover', yellow)
box2.addEventListener('mouseout', back)

box3.addEventListener('mouseover', yellow)
box3.addEventListener('mouseout', back)

box4.addEventListener('mouseover', yellow)
box4.addEventListener('mouseout', back)