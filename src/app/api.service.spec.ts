import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController; //declaration de la future instance de HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Module pour simuler les requêtes HTTP
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController); //Instanciation de HttpClientTestingModule:
    // outil de mockage des requêtesHTTP
  });


  afterEach(() => {
    httpMock.verify(); // Vérifie qu'aucune requête non attendue n'a été effectuée
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts', () => {
    //variable retournée par le mock de l'appel HTTP
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'This is post 1' },
      { id: 2, title: 'Post 2', body: 'This is post 2' },
    ];
    //Test de la méthode getPosts()
    service.getPosts().subscribe((posts) => {
      //les tests sont effectués quand la réponse est émise
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });
    // Simule une requête GET et émet une réponse
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts); // Retourne la réponse simulée
  });
});


