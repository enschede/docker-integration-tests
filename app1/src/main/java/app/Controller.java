package app;

import nl.marcenschede.dozerdemo.melding.v1_0.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.bind.JAXBException;

@RestController
public class Controller {

    @Autowired
    private BerichtVerzender berichtVerzender;

    @Autowired
    private ApplicationContext applicationContext;

    @RequestMapping("/json")
    @ResponseBody
    public Greeting greeting()
            throws JAXBException {

        nl.marcenschede.dozerdemo.melding.v1_0.Melding melding = new nl.marcenschede.dozerdemo.melding.v1_0.Melding();
        melding.setResult(Result.OVERDRACHT_OK);

        berichtVerzender.verzendBericht(melding);

        return new Greeting(10L, "Hallo!");
    }

    @RequestMapping("/env")
    public String env()
            throws JAXBException {

        StringBuilder sb = new StringBuilder();
        for (String item : applicationContext.getBeanDefinitionNames())
            sb.append(item + "<br>");
        return sb.toString();
    }

    class Greeting {

        private final long id;
        private final String content;

        public Greeting(long id, String content) {
            this.id = id;
            this.content = content;
        }

        public long getId() {
            return id;
        }

        public String getContent() {
            return content;
        }
    }

}
