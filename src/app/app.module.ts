import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ButtonComponent } from './components/button/button.component'
import { DialogComponent } from './components/dialog/dialog.component'
import { TableComponent } from './components/table/table.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProjectsComponent } from './components/projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DialogComponent,
    TableComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
