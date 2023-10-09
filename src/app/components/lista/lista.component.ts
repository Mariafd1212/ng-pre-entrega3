import { Component, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  alumnos: Alumno[] = [
    {
      nombre: 'Axel',
      edad: 23 + ' ' + 'años',
      curso: 'Ingles',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Samanta',
      edad: 30 + ' ' + 'años',
      curso: 'Chino',
      nivel: 'B2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Peter',
      edad: 25 + ' ' + 'años',
      curso: 'Frances',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Matias',
      edad: 27 + ' ' + 'años',
      curso: 'Portugues|Frances',
      nivel: 'B1 | A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Lucas',
      edad: 32 + ' ' + 'años',
      curso: 'Portugues|Ingles',
      nivel: 'B1|C1',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Axel',
      edad: 23 + ' ' + 'años',
      curso: 'Ingles',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Samanta',
      edad: 30 + ' ' + 'años',
      curso: 'Chino',
      nivel: 'B2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Peter',
      edad: 25 + ' ' + 'años',
      curso: 'Frances',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Matias',
      edad: 27 + ' ' + 'años',
      curso: 'Portugues|Frances',
      nivel: 'B1 | A2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Lucas',
      edad: 32 + ' ' + 'años',
      curso: 'Portugues|Ingles',
      nivel: 'B1|C1',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Matias',
      edad: 27 + ' ' + 'años',
      curso: 'Portugues|Frances',
      nivel: 'B1 | A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Lucas',
      edad: 32 + ' ' + 'años',
      curso: 'Portugues|Ingles',
      nivel: 'B1|C1',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Axel',
      edad: 23 + ' ' + 'años',
      curso: 'Ingles',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Samanta',
      edad: 30 + ' ' + 'años',
      curso: 'Chino',
      nivel: 'B2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Peter',
      edad: 25 + ' ' + 'años',
      curso: 'Frances',
      nivel: 'A2',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
    {
      nombre: 'Matias',
      edad: 27 + ' ' + 'años',
      curso: 'Portugues|Frances',
      nivel: 'B1 | A2',
      fechaInscripcion: new Date(),
      esRegular: true,
    },
    {
      nombre: 'Lucas',
      edad: 32 + ' ' + 'años',
      curso: 'Portugues|Ingles',
      nivel: 'B1|C1',
      fechaInscripcion: new Date(),
      esRegular: false,
    },
  ];
  mostrarAlumnos = false;
  clickEv2 = new EventEmitter<void>();
  toggleAlumnos() {
    this.mostrarAlumnos = !this.mostrarAlumnos;
  }
  esRegularAlumno(alumno: Alumno): boolean {
    this.clickEv2.emit();
    return alumno.esRegular;
  }
}
interface Alumno {
  nombre: string;
  edad: string;
  curso: string;
  nivel: string;
  fechaInscripcion: Date;
  esRegular: boolean;
}
