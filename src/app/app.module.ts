import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ButtonComponent } from './components/button/button.component'
import { DialogComponent } from './components/dialog/dialog.component'
import { TableComponent } from './components/table/table.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProjectsComponent } from './components/projects/projects.component'
import { EditComponent } from './components/edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DialogComponent,
    TableComponent,
    ProjectsComponent,
    EditComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*TO DO:

1. FIX ON START BUTTON TO UPDATE TABLE
2. PAGINATION
3. EXPORT TO EXCEL
*/
