import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() image:any;
  @Input() title:any;
  @Input() price:any;
  @Input() rating:any;
  @Input() stars:any;
  
  ngOnInit(): void {
    console.log("stars",this.stars)
  }

  absoluteValue(val: any) {
    return Math.round(val)
  }


  convertArr(val: number): number[] {
    const result = [];
    for(let i = 0; i < val; i++) {
      result.push(i);
    }
    return result;
  }
}
