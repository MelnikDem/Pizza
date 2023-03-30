const form = document.querySelector(".pizza-size"),
    priceResult = document.querySelector('.result__price'),
    spanResult = document.querySelector('.result__span');
    
let price = 0;
function Pizza(size) {
    this.size = size;
}

//Drag & drop
const img = document.querySelectorAll('.drag_drop'),
    container = document.querySelector("ingridient"),
    cake =document.querySelector("pizza-constuctor__image")
    poligon = document.querySelector('.pizza-constuctor__thumb');

    cake.addEventListener('dragover', preventEvent);
    baseposition.addEventListener('dragover', preventEvent);

    function preventEvent(e){
	e.preventDefault();
    }

    cake.addEventListener('drop', dropElement);
    baseposition.addEventListener('drop', dropElement);

    function dropElement(e){
		this.appendChild(img)
		img.style.left = e.clientX - img.offsetWidth / 2 + "px";
        img.style.top = e.clientY - img.offsetHeight / 2 + "px";
    }

// img.forEach((element, i) => {
//     ael.addEventListener("mousedown", (e) => {
//         console.log(e)

//         let shiftX = e.clientX - element.getBoundingClientRect().left;
//         let shiftY = e.clientY - element.getBoundingClientRect().top;
//         if (window.getComputedStylemente(element)["position"] === "absolute") {
//             setCakeSize()
//         } else {
//             setIngSize(element)
//             element.style.width = "auto";
//         }

//         el.style.position = 'absolute';
//         el.style.zIndex = 100;

//         document.body.append(el);

//         moveAt(e.pageX, e.pageY);

//         function moveAt(pageX, pageY) {
//             el.style.left = pageX - shiftX + 'px';
//             el.style.top = pageY - shiftY + 'px';
//         }

//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);

//             el.hidden = true;
//             let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//             el.hidden = false;

//             if (!elemBelow) return;
//             let droppableBelow = elemBelow.closest('.droppable');

//             if (currentDroppable != droppableBelow) {

//                 if (currentDroppable) {
//                     leaveDroppable(currentDroppable);
//                 }
//                 currentDroppable = droppableBelow;
//                 if (currentDroppable) {
//                     enterDroppable(currentDroppable);
//                 }
//             }
//         };

//         document.addEventListener('mousemove', onMouseMove);

//         function onMouseUp() {
//             if (currentDroppable) {
//                 setCakeSize()
//                 for (i = 0; i < f0.elements.length; i++) {
//                     if (f0.elements[i].checked === true) {
//                         switch (i) {
//                             case 0:
//                                 {
//                                     el.style.transform = "scale(0.8)";
//                                     break;
//                                 }
//                             case 1:
//                                 {
//                                     el.style.transform = "scale(0.9)";
//                                     break;
//                                 }
//                             case 2:
//                                 {
//                                     el.style.transform = "scale(1)";
//                                 }
//                         }
//                     }
//                 }
//                 el.style.left = "1px";
//                 el.style.top = "2px";
//                 el.style.opacity = "1";
//                 goal.style.position = 'relative'
//                 goal.append(el);
//                 goal.style.background = "";
//                 ingDetermination(ind)
//             } else {
//                 elementClones[ind].remove()
//                 elementClones[ind] = null
//                 setIngSize(el)
//                 el.style.width = "100%";
//                 el.style.position = "inherit"
//                 ingridientContainers[ind].prepend(el)
//                 ingDelete(ind)
//             }
//             document.removeEventListener('mousemove', onMouseMove);
//             el.onmouseup = null;
//         };

//         el.addEventListener("mouseup", onMouseUp)

//         if (elementClones[ind] === null) {
//             elementClones[ind] = el.cloneNode(true)
//             elementClones[ind].style.position = "inherit"
//             ingridientContainers[ind].prepend(elementClones[ind])
//         }
//     })
    
// })

//return
// gate1.addEventListener("mouseleave", returnBallCenter);
// gate2.addEventListener("mouseleave", returnBallCenter);
  
// function returnBallCenter(e) {
//     ball.style.top = 50 + "vh";
//     ball.style.left = 50 + "%";
// }