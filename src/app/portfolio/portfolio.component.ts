import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images:string[]=[
    "./assets/images/img (1).jpeg",
    "./assets/images/img (2).jpeg",
    "./assets/images/img (3).jpeg",
   
    
  
  ]

  show(image:string) {
    Swal.fire({
      imageUrl: image,
      imageWidth: '100%',
      showConfirmButton:false,
      
    });


    
  }
  
}



