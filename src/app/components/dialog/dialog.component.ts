import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Output() projectName = new EventEmitter<string>()
  project!: string

  faTimes = faTimes
  errorMessage = ''

  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    const dialog = document.querySelector(
      '.dialog-container',
    ) as HTMLElement | null
    if (dialog != null) dialog.style.display = 'none'
    this.project = ''
  }

  handleDialog(name: string) {
    if (name == '') {
      this.errorMessage = 'Enter the name of the project'
      return
    }

    this.errorMessage = ''
    this.closeDialog()
    this.projectName.emit(name)
  }
}
