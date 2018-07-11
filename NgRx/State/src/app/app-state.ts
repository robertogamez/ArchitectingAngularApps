import { Jedi } from './jedi/jedi.model';

export interface AppState {
    counter: number;
    jediList: Array<Jedi>
}