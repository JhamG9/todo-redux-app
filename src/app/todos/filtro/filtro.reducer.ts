import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { filtrosValidos, setFiltro } from "./filtro.action";

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos>(initialState,
    on(setFiltro, (state: filtrosValidos, {filtro}) => filtro)
);

export function filtroReducer(state:any, action:any): filtrosValidos {
    return _filtroReducer(state, action);
}
