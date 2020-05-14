import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, retry, retryWhen, tap } from 'rxjs/operators';
import { Dog } from '../interfaces/dog';
import { Cat } from '../interfaces/cat';

@Injectable({
  providedIn: 'root'
})
export class CatAndDogsHttpService {

  constructor(private http: HttpClient) { }

  private getDog(): Observable<Dog> {
    return this.http.get<Dog>('https://random.dog/woof.json').pipe(
      map(this.handleDogResponse),
      retryWhen(this.handleError)
    );
  }

  private getCat(): Observable<Cat> {
    return this.http.get<Cat>('https://aws.random.cat/meow');
  }

  public catAndDogRequest() {
    return forkJoin([this.getCat(), this.getDog()]);
  }

  private handleDogResponse(dog: Dog): Dog {
    if (!dog.url.endsWith('.mp4')) {
      return dog;
    }
    throw new Error('.mp4 file not supported');
  }

  private handleError(error: Observable<any>): Observable<void> {
    return error.pipe(
      tap(() => console.warn('💩 oh oh', error))
    );
  }
}
