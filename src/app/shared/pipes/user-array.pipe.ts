import { Pipe, PipeTransform } from '@angular/core';
import { UserArr } from '../models/interface';

@Pipe({
  name: 'userArray'
})
export class UserArrayPipe implements PipeTransform {

  transform(value: Array<UserArr>,searchname:string): Array<UserArr> {
    if(!value){
      return[]
    }
    if(!searchname || searchname.length < 2){
      return value
    }
   
    let filterduser= value.filter(user=>{
      return user.fullName.toLocaleLowerCase().startsWith(searchname.toLocaleLowerCase()) 
    })
    return filterduser
  }

}
