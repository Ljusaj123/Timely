import { Component, EventEmitter, OnInit, Output } from '@angular/core'
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

  startDate!: Date
  stopDate!: Date

  projects: Project[] = []

  project!: Project
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((result: Project[]) => (this.projects = result))
  }

  openProjects(element: any) {
    if (element.textContent === 'Stop') {
      this.stopCounting()
      element.textContent = 'Start'
      this.stopedCountingTime = true
    } else {
      this.project = new Project()
      this.startCounting()
      this.startedCountingTime = true
      this.stopedCountingTime = false
      element.textContent = 'Stop'
    }
  }

  createProject(name: string) {
    this.project.projectName = name
    this.projectService
      .createProject(this.project)
      .subscribe((result: Project[]) => (this.projects = result))
  }

  startCounting() {
    this.startDate = new Date()
    this.formatStartTime()
  }
  stopCounting() {
    this.stopDate = new Date()
    this.formatStopTime()
    this.countTime()
  }

  countTime() {
    const miliseconds = this.stopDate.getTime() - this.startDate.getTime()
    this.project.duration = new Date(miliseconds).toUTCString().slice(17, 22)
  }

  formatStartTime() {
    this.project.startDateString = `${this.startDate.getDate()}.${
      this.startDate.getMonth() + 1
    }.${this.startDate.getFullYear()} ${this.startDate
      .toString()
      .slice(16, 21)}`
  }

  formatStopTime() {
    this.project.stopDateString = `${this.stopDate.getDate()}.${
      this.stopDate.getMonth() + 1
    }.${this.stopDate.getFullYear()} ${this.stopDate.toString().slice(16, 21)}`
  }
}
