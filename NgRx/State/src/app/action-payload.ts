import { Action } from '@ngrx/store';

export interface ActionPayLoad<T> extends Action {
    payload: T;
}