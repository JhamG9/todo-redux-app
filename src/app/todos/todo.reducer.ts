import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

const estadoInicial:Todo[] = [];

export const todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, props) => [...state, new Todo(props.type)])
);



