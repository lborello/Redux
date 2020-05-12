import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggle, editar, borrar } from '../todo.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico', { static: false }) txtinputFisico: ElementRef;
  chkCompletado: FormControl;
  txtinput: FormControl;
  editando = false;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtinput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(dato => this.store.dispatch(toggle({ id: this.todo.id })));
  }
  editar() {
    this.editando = true;
    this.txtinput.setValue(this.todo.texto);
    console.log(this.editando);
    console.log(this.txtinputFisico.nativeElement);
    setTimeout(() => {
      this.txtinputFisico.nativeElement.select();
    }, 1);

  }
  terminarEdicion() {
    this.store.dispatch(editar({ id: this.todo.id, texto: this.txtinput.value }));
    this.editando = false;
  }
  borrar() {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
