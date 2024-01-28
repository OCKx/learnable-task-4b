
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
    
        static searchMovie(movies, criteria) {
            // Implement logic to search for movies based on criteria
            // For example, you can search by name, category, etc.
            // Return the matching movies
            const matchingMovies = movies.filter(movie => movie.name.toLowerCase().includes(criteria.toLowerCase()));
            return matchingMovies;
        }
    }
    
    // Array to store movies
    const movies = [];
    
    // Function to display movies
    const displayMovies = () => {
        console.log("\nALL MOVIES:");
        movies.forEach(movie => {
            console.log(movie.getMovie());
        });
    };
    
    // Function to set a new movie
    const setNewMovie = () => {
        console.log("\nSET NEW MOVIE");
        let newID = movies.length + 1;
        let newName = readlineSync.question("NAME: ");
        let newCategory = readlineSync.question("CATEGORY: ");
        let newPrice = readlineSync.questionFloat("PRICE: ");
        let newRent = false;
        let newAvailable = true;
        let myMovie = new MovieStore(newID, newName, newCategory, newPrice, newRent, newAvailable);
        movies.push(myMovie); // Add the new movie to the array
        console.log("Movie set successfully\n");
        return myMovie;
    };
    
    // Function to rent a movie
    const rentMovie = () => {
        displayMovies();
        console.log("\nRENT MOVIES \nSelect a movie by ID");
        let searchRent = readlineSync.questionInt("MOVIE INDEX: ") - 1;
    
        if (movies[searchRent]) {
            const movieToRent = movies[searchRent];
            movieToRent.rentMovie();
            console.log(movieToRent.getMovie());
            console.log("Movie rented successfully");
        } else {
            console.log("Invalid movie index. Please select a valid movie.");
        }
    };
    
    // Main menu function
    const menu = () => {
        console.log("\nMENU");
        console.log("1 - Rent Movie \n2 - Set New Movie \n3 - Search for Movie \n4 - Exit");
    
        let menuChoice = readlineSync.questionInt("SELECT OPTION: ");
    
        switch (menuChoice) {
            case 1:
                rentMovie();
                break;
    
            case 2:
                const newMovie = setNewMovie();
                console.log(newMovie.getMovie());
                break;
    
            case 3:
                console.log("\nSEARCH MOVIES");
                let searchCriteria = readlineSync.question("Enter search criteria: ");
                const searchResult = MovieStore.searchMovie(movies, searchCriteria);
                if (searchResult.length > 0) {
                    console.log("Matching Movies:");
                    searchResult.forEach(movie => {
                        console.log(movie.getMovie());
                    });
                } else {
                    console.log("No matching movies found.");
                }
                break;
    
            case 4:
                console.log("Exiting...");
                break;
    
            default:
                console.log("Invalid command");
                break;
        }
    };
    
    // Run the menu in a loop until the user chooses to exit
    while (true) {
        menu();
        let continueMenu = readlineSync.keyInYNStrict("Do you want to continue?");
        if (!continueMenu) {
            break;
        }
    }
    