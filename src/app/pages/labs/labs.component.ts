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
  ];
  disabled = true;
  developer = {
    name : 'Jherom',
    age : 38,
    photo_url : 'https://media.licdn.com/dms/image/v2/D4E03AQF8y85Ba9jrtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732926507451?e=1747267200&v=beta&t=lIfkBPNoZgy_DXBxYzkdr6t0O-FnNK9HwNo8h7Lvh10'
  }
}
