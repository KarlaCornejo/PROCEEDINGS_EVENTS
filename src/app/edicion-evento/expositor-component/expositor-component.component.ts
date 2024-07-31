import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expositor-component',
  templateUrl: './expositor-component.component.html',
  styleUrl: './expositor-component.component.css'
})
export class ExpositorComponentComponent {
  @Input() name: string = 'Nombres Apellidos';
  @Input() occupation: string = 'Profesor';
  @Input() email: string = 'correo@example.com';
}
