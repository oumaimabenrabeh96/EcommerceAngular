import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Listproducts: any = [
    new Product(1, 'Gamer 1',3500,"pc1.jpg"),
    new Product(3, 'Gamer 2',2500, "pc2.jpg"),
    new Product(2, 'Gamer 3',1500,"pc1.jpg"),
    ];
    result:any;
  constructor(private router : Router) { 
    const navigation =this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      id: number
    }
   
    this.result = this.Listproducts.filter(item => item.id ===state.id);
    console.log(this.result)
  }

  ngOnInit(): void {
    console.log(this.result)
  }

}
