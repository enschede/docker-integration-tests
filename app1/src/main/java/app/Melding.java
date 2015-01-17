package app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import java.util.Date;

/**
 * Test entity
 */
@Entity
public class Melding {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Version
    private Long version;
    private String result;
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    public Melding() {
    }
    
    public Melding(nl.marcenschede.dozerdemo.melding.v1_0.Melding melding) {
        this.result = melding.getResult().value();
        this.timestamp = new Date(System.currentTimeMillis());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Melding{" +
                "id=" + id +
                ", result='" + result + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}
