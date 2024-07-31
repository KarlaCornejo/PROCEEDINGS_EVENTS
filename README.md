# Cookbook

## Descripción

Este proyecto implementa un footer o pie de pagina para ser reutilizado en cada uno de las paginas que hubiera. Entonces podríamos crear una receta que describa cómo construir y reutilizar un componente de pie de página (footer) en una aplicación Angular.

## ¿Qué es el Error/Exception Handling?

El **CookBook** se refiere a una colección de soluciones a problemas comunes, organizadas de manera sistemática. Cada "receta" en un cookbook describe un problema y proporciona una solución paso a paso.

## Implementación en el Código

En el codigo del componente de footer, se implemento este componente para ser reutilizado cuantas veces se quiera.

### HTML 

Seria el codigo que se utilizara como plantilla en cualquier caso que se quiera usar:

```<footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="footer-info">Nombre Apellido</p>
          <p class="footer-info">Desarrollador</p>
          <p class="footer-info">Nombre de la Universidad</p>
          <p class="footer-info">Nombre de la Carrera</p>
          <p class="footer-info">Calle Ejemplo 123</p>
          <a class="footer-link" href="mailto:correo&#64;example.com">correo&#64;example.com</a>
          <div class="social-icons">
            <a class="social-icon-link" href="https://facebook.com" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="social-icon-link" href="https://twitter.com" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="social-icon-link" href="https://linkedin.com" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</footer>
```

# Estilo de Diseño: Things

## Descripción

**Things** es un enfoque de diseño basado en componentes que organiza la interfaz de usuario en partes modulares y reutilizables. Cada componente encapsula su propio HTML, CSS y lógica, lo que facilita la creación, el mantenimiento y la reutilización de elementos de la interfaz.

## ¿Qué es Things?

El estilo **Things** se basa en la idea de dividir la interfaz de usuario en componentes independientes. Cada componente maneja una sección específica de la interfaz, proporcionando encapsulación y reutilización. Este enfoque modular permite un desarrollo más organizado y escalable.

## Implementación del Código

### HTML del Encabezado

```html
<header class="header-container">
    <img src="assets/images/Escuela.png" class="img-opaca" alt="Escuela Fondo">
    <div class="header-upper">{{ universityName }}</div>
    <div class="header-text">
      <div class="header-lower">
        <div class="header-title">{{ title1 }}</div>
        <div class="header-title">{{ title2 }}</div>
        <div class="header-description">{{ description }}</div>
      </div>
    </div>
    <app-buttons-component></app-buttons-component>
  </header>
  <app-about-us-component></app-about-us-component>
```

### Explicación de la Implementación

1. **Componentes Personalizados**:
   - **`<app-buttons-component>`** y **`<app-about-us-component>`** son ejemplos de componentes personalizados creados en Angular. Estos componentes encapsulan la funcionalidad y el estilo específico para los botones y la sección "Acerca de Nosotros".
   - Estos componentes se integran en la plantilla principal del encabezado (`<header>`) para mejorar la modularidad y la reutilización del código.

2. **Estructura Modular**:
   - **`<header>`**: La sección de encabezado incluye una imagen, y varias secciones de texto dinámico (`{{ universityName }}`, `{{ title1 }}`, etc.).
   - **Componentes de Botones**: El componente `<app-buttons-component>` maneja la lógica y el estilo de los botones.
   - **Sección "Acerca de Nosotros"**: El componente `<app-about-us-component>` muestra información adicional sobre la institución o entidad.

### Fragmento del Código de un Componente

**HTML del Componente de Botones (`buttons.component.html`)**:

```html
<div class="header-buttons">
  <button type="button" class="btn btn-transparent">Home</button>
  <button type="button" class="btn btn-transparent">About</button>
  <button type="button" class="btn btn-transparent">Contact</button>
</div>
```

**CSS del Componente de Botones (`buttons.component.css`)**:

```css
.header-buttons {
  display: flex;
  gap: 10px;
}

.btn-transparent {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: 'GlacialIndifference', sans-serif;
  font-size: 2vw;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-transparent:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ddd;
}
```

**TypeScript del Componente de Botones (`buttons.component.ts`)**:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-component',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  // Lógica del componente, si la hay.
}
```

## Explicación de la Implementación

1. **Modularidad**:
   - Cada componente (`<app-buttons-component>` y `<app-about-us-component>`) se encarga de una parte específica de la interfaz de usuario, lo que permite un desarrollo más organizado y un código más limpio.

2. **Encapsulación**:
   - Los estilos y la lógica están encapsulados dentro de cada componente. Por ejemplo, los estilos y la lógica para los botones están contenidos en `buttons.component.css` y `buttons.component.ts`, respectivamente.

3. **Reutilización**:
   - Los componentes pueden ser reutilizados en diferentes partes de la aplicación o en diferentes proyectos, lo que ahorra tiempo y esfuerzo en el desarrollo.

El enfoque **Things** permite una arquitectura más escalable y fácil de manejar, mejorando tanto el desarrollo como el mantenimiento de aplicaciones web complejas.




# Error/Exception Handling

## Descripción

Este proyecto implementa un formulario de inscripción en Angular. En este contexto, se ha utilizado el manejo de errores y excepciones para mejorar la robustez y la experiencia del usuario, garantizando que el formulario funcione correctamente incluso en caso de problemas durante su uso.

## ¿Qué es el Error/Exception Handling?

El **Error/Exception Handling** es una técnica utilizada en la programación para anticipar, detectar y manejar situaciones anómalas que pueden ocurrir durante la ejecución de un programa. Estas situaciones pueden incluir errores de entrada del usuario, fallos en la conexión con el servidor, o errores inesperados que pueden hacer que una aplicación se comporte de manera inesperada.

## Implementación en el Código

En el código del componente de inscripción, se ha implementado el manejo de errores a nivel de la interfaz de usuario mediante la validación de los campos del formulario. A continuación se detalla cómo se ha implementado:

### HTML

En el HTML del formulario, se utiliza la directiva `ngIf` junto con las directivas de Angular para mostrar mensajes de error en función de la validez de los campos del formulario. Los mensajes de error se muestran sólo cuando el campo es inválido y ha sido modificado o tocado por el usuario. Aquí está el fragmento relevante del código:

```html
<div class="form-group" [ngClass]="{ 'has-error': nombre.invalid && (nombre.dirty || nombre.touched) }">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" [(ngModel)]="nombre" name="nombre" #nombre="ngModel" required />
  <div *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)" class="error">
    El nombre es requerido.
  </div>
</div>
```

### CSS

El CSS incluye estilos para los mensajes de error y para resaltar los campos del formulario que tienen errores. Aquí está el estilo relevante:

```css
.has-error input {
  border-color: red; /* Resalta los campos con errores */
}

.error {
  color: red;
  font-size: 0.875rem;
}
```

### Explicación de la Implementación

1. **Validación de Campos**: Se utiliza la propiedad `ngModel` para enlazar los campos del formulario con las propiedades del componente y se aplican validaciones requeridas.
2. **Mostrar Errores**: La directiva `ngIf` se usa para mostrar mensajes de error cuando los campos del formulario son inválidos y han sido tocados o modificados por el usuario. Esto ayuda a proporcionar retroalimentación inmediata sobre los problemas en los datos ingresados.
3. **Estilos de Error**: Se aplican estilos CSS para destacar los campos con errores y mostrar mensajes de error en rojo, asegurando que el usuario pueda identificar fácilmente qué información necesita corregir.
