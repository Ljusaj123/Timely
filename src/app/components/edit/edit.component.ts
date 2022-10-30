import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ProjectService } from 'src/app/services/project-service.service'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input() project!: Project
  @Output() projectsUpdated = new EventEmitter<Project[]>()
  @Output() close = new EventEmitter<boolean>()

  errorMessage!: string

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  updateProject(project: Project, name: string) {
    if (!name) {
      this.errorMessage = 'Enter the name of the project'
      return
    }
    this.project.projectName = name
    this.projectService
      .updateProject(project)
      .subscribe((result: Project[]) => this.projectsUpdated.emit(result))
  }

  deleteProject(project: Project) {
    this.projectService
      .deleteProject(project)
      .subscribe((result: Project[]) => this.projectsUpdated.emit(result))
  }

  handleBack() {
    this.close.emit(false)
  }
}
