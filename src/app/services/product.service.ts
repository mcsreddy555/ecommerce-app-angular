import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from 'src/app/config/api';

// const apiUrl="http://localhost:3000/products"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //todo: populate from an api
  // products: Product[]=[
  //   new Product(1,'Samsung A50', "Samsung a50 mobile 4gb |64gb Blue Color",1500,'https://cdn.dxomark.com/wp-content/uploads/medias/post-30837/samsung_galaxy_a50-1024x768.jpg'),
  //   new Product(2,'Samsung A51', "Samsung a51 mobile 4gb |64gb Blue Color",1501,),
  //   new Product(3,'Samsung A52', "Samsung a52 mobile 4gb |64gb Blue Color",1502,),
  //   new Product(4,'Samsung A53', "Samsung a53 mobile 4gb |64gb Blue Color",1503,),
  //   new Product(5,'Samsung A54', "Samsung a54 mobile 4gb |64gb Blue Color",1504,),
  //   new Product(6,'Samsung A55', "Samsung a55 mobile 4gb |64gb Blue Color",1505,),
  //   new Product(7,'Samsung A56', "Samsung a56 mobile 4gb |64gb Blue Color",1506,),
  //   new Product(8,'Samsung A57', "Samsung a57 mobile 4gb |64gb Blue Color",1507,),
  //   new Product(9,'Samsung A58', "Samsung a58 mobile 4gb |64gb Blue Color",1508,),
  //   new Product(10,'Samsung A59', "Samsung a59 mobile 4gb |64gb Blue Color",1509,),
  //   new Product(11,'Samsung A70', "Samsung a70 mobile 4gb |64gb Blue Color",1510,),
  //   new Product(12,'Samsung A50s', "Samsung a50s mobile 4gb |64gb Blue Color",1511,)
    
  // ]


  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl)
  }
}
