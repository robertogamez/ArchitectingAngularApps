import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Jedi } from '../jedi.model';
import { Observable } from 'rxjs/Observable';

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
        this.store.dispatch({
            type: 'ADD_JEDI',
            payload: {
                id: this.counter++,
                name: this.newJedi
            }
        });
        this.newJedi = '';
    }

    remove(id) {
        this.store.dispatch({
            type: 'REMOVE_JEDI',
            payload: { id }
        })
    }

    clear() {
        this.store.dispatch({
            type: 'LOAD_JEDIS',
            payload: []
        });
        this.counter = 0;
    }

    ngOnInit() {
    }

}
