import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string) {
      if(!value ||value.length===0 || !filterString){
        return value;
      }
      const users=[];
      for(const user of value){
        if(user['state']===filterString || user['']){
          users.push(user);
        }
      }
      return users;
  }

}
