import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limipiarCompletados, toggle, toggleAll } from './todo.actions';

const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo de Capitán América')
];

export const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        // map crea un nuevo arreglo
        // si se actualiza el valor normalmente se muta el valor
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        // map crea un nuevo arreglo
        // si se actualiza el valor normalmente se muta el valor
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    }),
    on(borrar, (state, { id }) => {
        return state.filter(todo => todo.id !== id);
    }),
    on(toggleAll, (state, { completado }) => {

        return state.map(todo => {
            return {
                ...todo,
                completado: completado
            }
        });
    }),
    on(limipiarCompletados, (state: Todo[]) => {
        return state.map(todo => {
            if (todo.completado) {
                return {
                    ...todo,
                    completado: false
                }
            }
            return todo;
        });
    })

);


export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}


