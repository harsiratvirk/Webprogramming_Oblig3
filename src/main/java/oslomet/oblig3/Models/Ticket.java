package oslomet.oblig3.Models;

public class Ticket {
    private int id;
    private String movies;
    private String number;
    private String fname;
    private String sname;
    private String tel;
    private String email;

    public Ticket(int id, String movies, String number, String fname, String sname, String tel, String email) {
        this.id = id;
        this.movies = movies;
        this.number = number;
        this.fname = fname;
        this.sname = sname;
        this.tel = tel;
        this.email = email;
    }

    public Ticket() {
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

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}