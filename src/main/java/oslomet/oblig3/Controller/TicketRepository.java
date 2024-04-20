package oslomet.oblig3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import oslomet.oblig3.Models.Movies;
import oslomet.oblig3.Models.Ticket;

import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;

    public void saveTicket(Ticket ticket) {
        String sql = "INSERT INTO Ticket (movies, number, fname, sname, tel, email) VALUES(?,?,?,?,?,?)";
        db.update(sql, ticket.getMovies(), ticket.getNumber(), ticket.getFname(),
                ticket.getSname(),ticket.getTel(), ticket.getEmail());
    }

    public List<Ticket> getTicket() {
        String sql = "SELECT * FROM Ticket ORDER BY sname";
        return db.query(sql, new BeanPropertyRowMapper(Ticket.class));
    }

    public List<Movies> getMovies() {
        String sql = "SELECT * FROM Movies";
        return db.query(sql, new BeanPropertyRowMapper(Movies.class));
    }

    public void deleteTickets () {
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }

}
