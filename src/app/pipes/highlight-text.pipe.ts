import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  transform(value: string, args: string): any {
    if (args && value) {
      value = String(value);
      const startIndex = value.toLowerCase().indexOf(args.toLowerCase());

      const endLength = args.length;
      const matchingString = value.substr(startIndex, endLength);
      // return value.replace(matchingString, `<a><u><strong>${matchingString}</strong></u></a>`);
      return value.replace(matchingString, `<span class="text-info font-weight-bold">${matchingString}</span>`);

    }
    return value;
  }

}
