import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdicionEventoComponent } from './edicion-evento/edicion-evento.component';
import { ExpositorComponentComponent } from './edicion-evento/expositor-component/expositor-component.component';
import { InscripcionComponentComponent } from './edicion-evento/inscripcion-component/inscripcion-component.component';
import { ConvocatoriaORGComponentComponent } from './edicion-evento/convocatoria-orgcomponent/convocatoria-orgcomponent.component';
import { EventoComponentComponent } from './edicion-evento/evento-component/evento-component.component';
import { EdicionComponentComponent } from './edicion-evento/edicion-component/edicion-component.component';
import { ProgramaComponentComponent } from './edicion-evento/programa-component/programa-component.component';
import { FooterComponentComponent } from './edicion-evento/footer-component/footer-component.component';
import { AboutUsComponentComponent } from './edicion-evento/evento-component/about-us-component/about-us-component.component';
import { ButtonsComponentComponent } from './edicion-evento/evento-component/buttons-component/buttons-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicionEventoComponent,
    ExpositorComponentComponent,
    InscripcionComponentComponent,
    ConvocatoriaORGComponentComponent,
    EventoComponentComponent,
    EdicionComponentComponent,
    ProgramaComponentComponent,
    FooterComponentComponent,
    AboutUsComponentComponent,
    ButtonsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
