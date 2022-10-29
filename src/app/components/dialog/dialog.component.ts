import { Component, OnInit } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  faTimes = faTimes
  projectName: string = ''
  errorMessage = ''
  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    const dialog = document.querySelector(
      '.dialog-container',
    ) as HTMLElement | null
    if (dialog != null) dialog.style.display = 'none'
    this.projectName = ''
  }
  handleDialog(name: string) {
    if (name == '') {
      this.errorMessage = 'Enter the name of the project'
      return
    }
    this.errorMessage = ''
    this.closeDialog()
    this.projectName = name
  }
}
