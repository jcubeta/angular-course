export class LikeComponent {

    constructor(private _likesCount: number, private _isSelected: boolean) {

    }
    
    onClick() { 
        if ( this._isSelected) { 
            this._likesCount--;
        } else {
            this._likesCount++;
        }
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount
    }

    get isSelected() { 
        return this._isSelected
    }

}