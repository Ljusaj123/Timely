import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ProjectService } from 'src/app/services/project-service.service'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Output() buttonName = new EventEmitter<string>()
  @Output() isDialogOpen = new EventEmitter<boolean>()

  @Input() projects!: Project[]
  @Input() startDate!: Date
  @Input() stopedCountingTime!: boolean

  projectName!: string
  project!: Project
  stopDate!: Date
  errorMessage!: string

  faTimes = faTimes

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  closeDialog() {
    this.projectName = ''
    this.isDialogOpen.emit(false)
  }

  handleDialog(name: string) {
    if (name == '') {
      this.errorMessage = 'Enter the name of the project'
      return
    }
    this.stopCounting()
    this.project.projectName = name
    this.errorMessage = ''
    this.buttonName.emit('Start')
    this.updateProject()
    this.closeDialog()
  }

  updateProject() {
    this.projectService
      .updateProject(this.project)
      .subscribe((result: Project[]) => (this.projects = result))
  }

  stopCounting() {
    this.project = this.projects[this.projects.length - 1]
    this.stopDate = new Date()

    this.project.stopDateString = `${this.stopDate.getDate()}.${
      this.stopDate.getMonth() + 1
    }.${this.stopDate.getFullYear()} ${this.stopDate.toString().slice(16, 21)}`

    this.countTime()
  }

  countTime() {
    const miliseconds = this.stopDate.getTime() - this.startDate.getTime()
    this.project.duration = new Date(miliseconds).toUTCString().slice(17, 22)
  }
}
