import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:any=[]
  image:any;
  title:any;
  price:any;
  stars:any;
  constructor(private _commonService:ServiceService){}

  ngOnInit(): void {
    this._commonService.getData().subscribe({
      next:(val:any)=>{
        this.products = val.products;
        console.log(this.products)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
