package oslomet.oblig3.Models;

public class Movies {
    private int id;
    private String movies;

    public Movies(int id, String movies) {
        this.id = id;
        this.movies = movies;
    }

    public Movies() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovies() {
        return movies;
    }

    public void setMovies(String movies) {
        this.movies = movies;
    }
}