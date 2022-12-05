import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { BarnavegacionComponent } from './componentes/barnavegacion/barnavegacion.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ExplaboralComponent } from './componentes/explaboral/explaboral.component';
import { FormAcademicaComponent } from './componentes/form-academica/form-academica.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormacademicaComponent } from './componentes/formacademica/formacademica.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    BarnavegacionComponent,
    BienvenidaComponent,
    ExplaboralComponent,
    FormAcademicaComponent,
    SkillsComponent,
    ProyectosComponent,
    FormacademicaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
