import {ITours} from "../models/tours";
import {images} from "@services/img/img";


// указать возвращающий тип и тип для параметра
export function getTourTemplate(obj, i:number):string {
    const tmpl = ` 
       <div  data-tour-item-index=${i} class="tour-block">
           <h2 class="tour-title">${obj.name}</h2>
           <img class='tour-pic' src="${obj.img}"
           <div class="ticket-description">${obj.description}</div>
           <p class="tour-price">${obj.price}</p>
       </div>
    `
   return tmpl;
}