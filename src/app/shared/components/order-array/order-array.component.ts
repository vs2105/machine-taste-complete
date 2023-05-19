import { Component, OnInit } from '@angular/core';
import { orderArr } from '../../models/interface';
import { OrderArrayService } from '../../services/order-array.service';

@Component({
  selector: 'app-order-array',
  templateUrl: './order-array.component.html',
  styleUrls: ['./order-array.component.scss']
})
export class OrderArrayComponent implements OnInit {
  orderArr:Array<orderArr>=[]
  NewArr!:Array<orderArr>
  isboolean:boolean=false
  constructor(private _orderArrayService:OrderArrayService) { }

  ngOnInit(): void {
    this.orderArr =this._orderArrayService.getAllorderdata()
    console.log(this.orderArr);
    
  }

  Allstatus(){
  this.NewArr = this.orderArr
  console.log(this.NewArr);
  
  }

  status(sta:string){
    this.isboolean = !this.isboolean
    if(this.isboolean){
      this.NewArr = this.orderArr.filter((ele)=>ele.orderStatus === sta);
      console.log(this.NewArr)
    }else{
      this.NewArr=this.orderArr.filter((ele)=>ele.orderStatus !== sta)
      console.log(this.NewArr);
    }
  }

}
