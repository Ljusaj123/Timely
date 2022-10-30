import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { elementAt } from 'rxjs'
import { ProjectService } from 'src/app/services/project-service.service'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Output() projectUpdated = new EventEmitter<Project[]>()

  startedCountingTime: boolean = false
  stopedCountingTime: boolean = false

  buttonName: string = 'Start'

  startDate!: Date

  projectToUpdate!: Project

  projects: Project[] = []

  project!: Project
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((result: Project[]) => (this.projects = result))
  }

  openProjects(element: any) {
    if (element.textContent == 'Start') {
      this.buttonName = 'Stop'
      this.project = new Project()
      this.startCounting()
      this.createProject()
      this.startedCountingTime = true
      this.stopedCountingTime = false
    } else {
      this.stopedCountingTime = true
    }
  }

  setButtonName(name: string) {
    this.buttonName = name
  }

  createProject() {
    this.projectService
      .createProject(this.project)
      .subscribe((result: Project[]) => (this.projects = result))
  }

  setClose(event: boolean) {
    this.stopedCountingTime = event
  }

  startCounting() {
    this.startDate = new Date()
    this.formatStartTime()
  }

  formatStartTime() {
    this.project.startDateString = `${this.startDate.getDate()}.${
      this.startDate.getMonth() + 1
    }.${this.startDate.getFullYear()} ${this.startDate
      .toString()
      .slice(16, 21)}`
  }

  exportTableToExcel(): void {
    const downloadLink = document.createElement('a')
    const dataType = 'application/vnd.ms-excel'
    const table = document.getElementById('table')
    const tableHtml = table?.outerHTML.replace(/ /g, '%20')
    document.body.appendChild(downloadLink)
    downloadLink.href = `Data: ${dataType} ,${tableHtml}`
    downloadLink.download = 'table.xls'
    downloadLink.click()
  }
}
