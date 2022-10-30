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
  @Output() close = new EventEmitter<boolean>()
  @Input() projects!: Project[]
  @Input() startDate!: Date
  @Input() stopedCountingTime!: boolean
  name!: string
  project!: Project
  stopDate!: Date

  faTimes = faTimes
  errorMessage = ''

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  closeDialog() {
    this.name = ''
    this.buttonName.emit('Stop')
    this.close.emit(false)
  }

  handleDialog(name: string) {
    if (name == '') {
      this.errorMessage = 'Enter the name of the project'
      return
    }
    this.stopCounting()
    this.project.projectName = name
    this.updateProject()
    this.errorMessage = ''
    this.closeDialog()
    this.buttonName.emit('Start')
  }

  updateProject() {
    this.projectService
      .updateProject(this.project)
      .subscribe((result: Project[]) => (this.projects = result))
  }

  stopCounting() {
    this.project = this.projects[this.projects.length - 1]
    this.stopDate = new Date()
    this.formatStopTime()
    console.log(this.project.stopDateString)
    this.countTime()
  }

  countTime() {
    const miliseconds = this.stopDate.getTime() - this.startDate.getTime()
    this.project.duration = new Date(miliseconds).toUTCString().slice(17, 22)
  }

  formatStopTime() {
    this.project.stopDateString = `${this.stopDate.getDate()}.${
      this.stopDate.getMonth() + 1
    }.${this.stopDate.getFullYear()} ${this.stopDate.toString().slice(16, 21)}`
  }
}
