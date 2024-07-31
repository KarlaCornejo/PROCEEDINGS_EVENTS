import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripcion-component',
  templateUrl: './inscripcion-component.component.html',
  styleUrls: ['./inscripcion-component.component.css']
})
export class InscripcionComponentComponent {
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  ocupacion: string = '';
  correo: string = '';
  voucher: string = '';

  onSubmit() {
    const formData = {
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      ocupacion: this.ocupacion,
      correo: this.correo,
      voucher: this.voucher
    };
    console.log('Formulario enviado', formData);
    
  }
}
