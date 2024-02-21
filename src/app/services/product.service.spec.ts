import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService} from "./product.service";
import { Product } from "../models/product.model";
import { environment } from "src/environments/environment";

fdescribe('ProductsService', () => {
  let productService: ProductsService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
   providers:[
    ProductsService
  ]
  });
    productService = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

    it("should be created", () => {
      expect(productService).toBeTruthy();
    });

    describe('test for getAllSimple', ()=> {
      it("should return an array of products", (doneFn) =>{
        //Arrange
        const mockProductList: Product []= [
          {
            id:'123',
            title: 'tiltle',
            price: 12,
            description: 'blbla',
            category: {
              id:12,
              name:"category",
            },
            images: ['img', 'img']
          }
        ];
        //Act
        productService.getAllsimple().subscribe((data)=>{
          //Assert
          expect(data.length).toEqual(mockProductList.length);
          expect(data).toEqual(mockProductList);
          doneFn();
      });
        //http config
        //Cuendo encuentre que debe hacer la petición a un URL en sspecifico, no haga si no que haga el mock...
        const url = `${environment.API_URL}/api/v1/products`;
        const req= httpController.expectOne(url);
        req.flush(mockProductList);
        httpController.verify();
    });
  });
});
