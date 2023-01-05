import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // const product = Array<{identifiant: number, name: string, price: number}>;
    id : number;
   Listproducts: any = [
    new Product(1, 'Gamer 1',3500,"https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    new Product(3, 'Gamer 2',2500, "https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    new Product(2, 'Gamer 3',1500,"https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    new Product(4, 'Pc Gamer 4',3500,"https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    new Product(5, 'PC Gamer 5',4500, "https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    new Product(6, 'PC Gamer 6',2700,"https://www.wiki.tn/28372-large_mobi_default/pc-gamer-viper-51052.jpg"),
    ];
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }
   addToCart(id){
      console.log("id",id)

const result = this.Listproducts.filter(item => item.id ===id);

this.router.navigate(['/cart'],{ state: { id:id } })
  }
  


}
