let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600;
ctx.fillRect(0,0,canvas.width,canvas.height);
const ARR_LENGDE = 50;
let mergeSortArray = [];

for (let i = 0; i < ARR_LENGDE; i++){
  mergeSortArray[i] = Math.floor(Math.random()*canvas.height);
  }

console.log(mergeSortArray);
draw(mergeSortArray);

function sort(array,left,right){
  if (left < right){
    let m = Math.floor(left+(right-left)/2);
    sort(array,left,m);
    sort(array,m+1,right);
    merge(array,left,m,right);
    }
  }

function merge(array,left,m,right){
  let lengde1 = m-left+1;
  let lengde2 = right-m;
  let tempArr1 = [];
  let tempArr2 = [];
  for (let i = 0; i < lengde1; i++){
    tempArr1.push(array[left+i]);
    }
  for (let j = 0; j < lengde2; j++){
    tempArr2.push(array[m+1+j]);
    }
  let k = left;
  let i = 0;
  let j = 0;
  while (i < lengde1 && j < lengde2){
    if (tempArr1[i] <= tempArr2[j]){
      array[k] = tempArr1[i];
      i++
    } else {
      array[k] = tempArr2[j];
      j++
      }
    k++
    }
  while (i < lengde1){
    array[k] = tempArr1[i];
    i++;
    k++;
    }
  
  while (j < lengde2){
    array[k] = tempArr2[j];
    j++;
    k++;
    }
  }
        
function draw(array){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "white";
  let posX = (canvas.width/ARR_LENGDE)-((canvas.width/ARR_LENGDE)/2);
  for (let i = 0 ; i < ARR_LENGDE; i++){
    ctx.beginPath();
    ctx.moveTo(posX, canvas.height);
    ctx.lineTo(posX, canvas.height-mergeSortArray[i]);
    ctx.stroke();
    posX = (posX + (canvas.width/ARR_LENGDE));
    }
  }

function show(){
  sort(mergeSortArray,0,mergeSortArray.length-1);
  draw(mergeSortArray);
}
