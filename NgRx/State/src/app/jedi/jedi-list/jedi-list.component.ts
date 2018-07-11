import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app-state';
import {
    addJedi,
    removeJedi,
    loadJedis
} from './jedi-list-actions';
import {
    Jedi
} from '../jedi.model';

@Component({
    selector: 'app-jedi-list',
    templateUrl: './jedi-list.component.html',
    styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent implements OnInit {

    list$: Observable<Array<Jedi>>;
    counter = 0;
    newJedi = '';

    constructor(
        private store: Store<AppState>
    ) {
        this.list$ = store.select('jediList');
    }


    add() {
        this.store.dispatch(addJedi(this.newJedi));
        this.newJedi = '';
    }

    remove(id) {
        this.store.dispatch(removeJedi(id));
    }

    clear() {
        this.store.dispatch(loadJedis([]));
        this.counter = 0;
    }

    ngOnInit() {
    }

}
