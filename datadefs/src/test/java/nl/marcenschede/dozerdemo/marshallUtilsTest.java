package nl.marcenschede.dozerdemo;

import nl.marcenschede.dozerdemo.utils.marshallUtils;
import nl.marcenschede.dozerdemo.melding.v1_0.Melding;
import nl.marcenschede.dozerdemo.melding.v1_0.Result;
import org.junit.Assert;
import org.junit.Test;

import javax.xml.bind.JAXBException;

/**
 * Created by marc on 15/01/15.
 */
public class marshallUtilsTest {

    @Test
    public void marshalTest()
            throws JAXBException {

        Melding melding = new Melding();
        melding.setResult(Result.OVERDRACHT_OK);

        String marshalled = marshallUtils.mashalObjectToString(melding);
        Assert.assertTrue(marshalled.contains(Result.OVERDRACHT_OK.value()));

        Melding out = (Melding) marshallUtils.unmarshalStringToObject(marshalled, Melding.class);
        Assert.assertEquals(Result.OVERDRACHT_OK, out.getResult());
    }
}
