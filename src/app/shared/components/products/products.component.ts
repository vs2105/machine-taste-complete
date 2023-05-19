import { Component, OnInit } from '@angular/core';
import { MedicineArrayService } from '../../services/medicine-array.service';
import { medicinArr } from '../../models/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ProdutArr :Array<medicinArr> = []
  filterArray:Array<medicinArr>=[]
  isexpired:boolean=false

  constructor(private _medicineArrayService:MedicineArrayService) { }

  ngOnInit(): void {
   this.ProdutArr = this._medicineArrayService.getAllmedicineinfo()
   this.filterArray = this._medicineArrayService.getAllmedicineinfo()
  }

  onexpired(){
    this.isexpired = !this.isexpired
    if(this.isexpired){
      this.ProdutArr = this.ProdutArr.filter((ele)=>new Date(ele.expiryDate).getTime()<Date.now())
    }else{
      console.log(this.isexpired);
      this.ProdutArr = this.filterArray
    }
    return this.ProdutArr
  }

  lowstock(){
   this.isexpired = !this.isexpired
     if(this.isexpired){
      this.ProdutArr = this.ProdutArr.filter((ele)=>ele.stock<100)
     }else{
      this.ProdutArr = this.filterArray
     }
     
  }

}
