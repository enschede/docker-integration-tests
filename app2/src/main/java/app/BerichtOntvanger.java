package app;

import nl.marcenschede.dozerdemo.utils.marshallUtils;
import nl.marcenschede.dozerdemo.melding.v1_0.Melding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.xml.bind.JAXBException;

/**
 * Created by marc on 15/01/15.
 */
@Component
@Transactional
public class BerichtOntvanger {

    @Autowired
    private MeldingRepository meldingRepository;

    @ServiceActivator(inputChannel = "BerichtIn")
    public void verwerker(Message<String> msg)
            throws JAXBException {
        
        System.out.println("Bericht ontvangen: " + msg);
        
        Melding melding = (Melding) marshallUtils.unmarshalStringToObject(msg.getPayload(), Melding.class);
        System.out.println("Bericht nl.marcenschede.dozerdemo.datadefs.melding: " + melding.getResult());

        app.Melding appMelding = new app.Melding(melding);
        meldingRepository.save(appMelding);
    }
}
