import { Action } from "@ngrx/store";

export interface appState {
  texto: string
}

export const initialState = {
  texto: 'Codigo'
}

export function miReducer(state: appState = initialState, action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return { ...state, texto: 'Hola Mundo' }
    case 'ENGLISH':
      return { ...state, texto: 'Hello World' }
    default:
      return state
  }
}