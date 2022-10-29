import { TestBed } from '@angular/core/testing'

import { ProjectSrviceService } from './project-service.service'

describe('ProjectSrviceService', () => {
  let service: ProjectSrviceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ProjectSrviceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
