class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        console.log(`"${this.title}" has been rented. Enjoy the movie!`);
      } else {
        console.log(`Sorry, "${this.title}" is currently unavailable.`);
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      console.log(`"${this.title}" has been returned. Thank you for using our service.`);
    }
  }
  

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movie = this.movies.find(m => m.title === title);
        if (movie) {
        movie.rentMovie();
        } else {
        console.log(`Movie "${title}" not found in the store.`);
        }
    }

    returnMovie(title) {
        const movie = this.movies.find(m => m.title === title);
        if (movie) {
        movie.returnMovie();
        } else {
        console.log(`Movie "${title}" not found in the store.`);
        }
    }

    displayAvailableMovies() {
        console.log('Available Movies:');
        this.movies.forEach(movie => {
        console.log(`- ${movie.title} (${movie.genre}) - Available Copies: ${movie.availableCopies}`);
        });
    }
}
  
  // Example usage
const movieStore = new MovieStore();

const movie1 = new Movie('Inception', 'Sci-Fi', 5);
const movie2 = new Movie('The Shawshank Redemption', 'Drama', 3);

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

movieStore.displayAvailableMovies();
movieStore.rentMovie('Inception');
movieStore.returnMovie('The Shawshank Redemption');

movieStore.displayAvailableMovies();
