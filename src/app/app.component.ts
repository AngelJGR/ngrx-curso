import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { appState } from "./app.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso';
  dato$: Observable<any>;

  constructor(private store: Store<appState>) {
    this.dato$ = store.select('texto');
  }

  mensajeEspanol() {
    this.store.dispatch({
      type: "SPANISH"
    })
  }

  englishMessage() {
    this.store.dispatch({
      type: "ENGLISH"
    })
  }
}
