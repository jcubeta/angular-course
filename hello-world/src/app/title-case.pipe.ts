import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;


    let words = value.split(' ');
    for (let i = 0; i < words.length; i++ ){
      if (i > 0 && this._isPrep(words[i])) { 
        words[i] = words[i].toLowerCase();
      }
      else { 
        words[i] = this._toTitleCase(words[i]);
      }
    }
    return words.join(' ');
  }

  private _isPrep(word:string): boolean { 
    let preps = ['of', 'the'];
    return preps.includes(word.toLowerCase());
  }

  private _toTitleCase(word:string): string { 
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }

}
