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

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  updateHero(project: Project) {
    this.projectService
      .updateProject(project)
      .subscribe((result: Project[]) => this.projectsUpdated.emit(result))
  }

  deleteHero(project: Project) {
    this.projectService
      .deleteProject(project)
      .subscribe((result: Project[]) => this.projectsUpdated.emit(result))
  }
}
