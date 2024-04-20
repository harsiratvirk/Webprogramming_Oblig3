package oslomet.oblig3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import oslomet.oblig3.Models.Movies;
import oslomet.oblig3.Models.Ticket;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    TicketRepository rep;

    // Endpoint to save ticket data
    @PostMapping("/saveTickets")
    public void saveTickets(Ticket ticket) {
        rep.saveTicket(ticket);
    }

    // Retrieve a list of saved tickets
    @GetMapping("/getTickets")
    public List<Ticket> getTickets() {
        return rep.getTicket();
    }

    // Retrieve a list of available movies
    @GetMapping("/saveMovies")
    public List<Movies> getMovies() {
        return rep.getMovies();
    }

    // Delete all saved tickets
    @GetMapping("/deleteTickets")
    public void deleteTickets() {
        rep.deleteTickets();
    }
}