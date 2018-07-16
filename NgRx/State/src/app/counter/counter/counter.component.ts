import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app-state';
import { increment, decrement } from './counter.actions';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    counter$;

    constructor(
        private store: Store<AppState>
    ) {
        this.counter$ = this.store.select(state => state.counter.data);
    }

    incrementCount() {
        this.store.dispatch(increment());
    }

    decrementCount() {
        this.store.dispatch(decrement());
    }

    ngOnInit() {
    }

}
