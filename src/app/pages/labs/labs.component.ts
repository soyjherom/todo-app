import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicacion de Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear el proyecto',
    'Crear componentes'
  ]
}
