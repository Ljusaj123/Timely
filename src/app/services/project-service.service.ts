import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Project } from 'src/model/project'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = 'Project'

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/${this.url}`)
  }
}
