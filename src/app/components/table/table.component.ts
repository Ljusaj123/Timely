import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() projects!: Project[]
  @Output() projectsUpdated = new EventEmitter<Project[]>()

  open!: boolean
  projectToEdit!: Project

  constructor() {}

  ngOnInit(): void {}

  editProject(project: Project) {
    this.projectToEdit = project
    this.setClose(true)
  }

  updateProjectList(projects: Project[]) {
    this.projects = projects
    this.setClose(false)
  }

  setClose(event: boolean) {
    this.open = event
  }
}
