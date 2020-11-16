import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { DataService } from './data.service';
import { Post } from './models/post.model';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería recibir los posts dede el api via Get', () => {
    const dummyPosts: Post[] = [
      {userId: 1, id: 3, title: 'testing 1', body: 'Hola mundo'},
      {userId: 2, id: 2, title: 'testing 2', body: 'Hola mundo'}, 
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });
});
