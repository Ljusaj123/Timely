import { Component, OnInit, Input } from '@angular/core'
import { Project } from 'src/model/project'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() projects: Project[] = []

  constructor() {}

  ngOnInit(): void {}
}
