import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffects {
    @Effect() products: Observable<Action>;

    constructor(
        private actions$: Actions<Action>
    ) {
    }
}