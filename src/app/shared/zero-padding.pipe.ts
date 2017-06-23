import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {

  transform(value: any, padding: number): any {
    if (value == null || !padding || typeof value !== 'number') { return value; }

    let zeros: string = new Array(padding).join('0');
    return (zeros + value).slice(-1 * padding);
  }

}
