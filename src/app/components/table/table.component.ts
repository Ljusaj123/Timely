import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ProjectService } from 'src/app/services/project-service.service'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() projects: Project[] = []
  @Output() projectsUpdated = new EventEmitter<Project[]>()
  open!: boolean

  projectToEdit!: Project

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  editProject(project: Project) {
    this.projectToEdit = project
    this.open = true
  }

  updateProjectList(projects: Project[]) {
    this.projects = projects
    this.setClose()
  }

  setClose() {
    this.open = false
  }
}
