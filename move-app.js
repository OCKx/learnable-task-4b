/* class Movie {
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
 */


// a simple Movie renting API that lets people rent movies from a movie store.
// Building project with
    // class
    // objects
    // properties
    // methods
 

    console.log("CALLISTUS MOVIE STORE");
    console.log("==================================");
    const readlineSync = require('readline-sync');
    
    class MovieStore {
        constructor(id, name, category, price, rented, available) {
            this.id = id;
            this.name = name;
            this.category = category;
            this.price = price;
            this.rented = rented;
            this.available = available;
        }
    
        getMovie() {
            return {
                id: this.id,
                name: this.name,
                category: this.category,
                price: this.price,
                rented: this.rented,
                available: this.available
            };
        }
    
        setMovie(newMovie) {
            this.id = newMovie.id;
            this.name = newMovie.name;
            this.category = newMovie.category;
            this.price = newMovie.price;
            this.rented = newMovie.rented;
            this.available = newMovie.available;
        }
    
        rentMovie() {
            if (!this.rented && this.available) {
                this.rented = true;
                this.available = false;
                console.log(`Movie "${this.name}" rented successfully.`);
            } else {
                console.log(`Movie "${this.name}" is not available for rent.`);
            }
        }
    
        searchMovie(criteria) {
            // Implement logic to search for movies based on criteria
            // For example, you can search by name, category, etc.
            // Return the matching movies
            if (this.name.toLowerCase().includes(criteria.toLowerCase())) {
                return this.getMovie();
            } else {
                return null;
            }
        }
    }

    // get movie
    displayMovie = () => {
        console.log("\n ALL MOVIES");
        const displayMovie1 = new MovieStore(1, "war lord", "action", 100, false, true);
        const displayMovie2 = new MovieStore(2, "true love", "romance", 3400, false, true);
        const displayMovie3 = new MovieStore(3, "blood king", "action", 90, true, false);
        console.log(displayMovie1);
        console.log(displayMovie2);
        console.log(displayMovie3);
    }
    
    // Function to set a new movie
    setNewMovie = () => {
        console.log("\nSET NEW MOVIE");
        let newID = 5;
        let newName = readlineSync.question("NAME: ");
        let newCategory = readlineSync.question("CATEGORY: ");
        let newPrice = readlineSync.questionFloat("PRICE: ");
        let newRent = false;
        let newAvailable = true;
        let myMovie = new MovieStore(newID, newName, newCategory, newPrice, newRent, newAvailable);
        console.log("Movie set successfully\n");
        return myMovie;
    };
    
    // Set and display a new movie
    
    // Rent a movie
    rentMovies = () => {
        console.log("\nRENT MOVIES \nselect movie by ID");
        let searchRent = readlineSync.questionInt("MOVIE ID: ") - 1;
        // Assuming you have an array of movies, you can rent the selected movie
        const movieToRent = movies[searchRent];
        movieToRent.rentMovie();
        console.log(movieToRent.getMovie());
    }
    

// menu
menu = () => {
    displayMovie();

    console.log("\n1 - Rent Movie \n2 - Set New Movie \n3 - Search for Movie");
    console.log("\nSELECT OPTION:");
    let menuSearch = readlineSync.questionInt();
    switch (menuSearch) {
        case 1:
            rentMovies()
            break;
        case 2:
            const newMovie = setNewMovie();
            console.log(newMovie.getMovie());
            break;
        case 3:
            break;
        default:
            console.log("invalid command");
            break;
    }
}

menu()