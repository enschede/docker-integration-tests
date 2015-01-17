package app;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.connection.CachingConnectionFactory;
import org.springframework.jms.listener.DefaultMessageListenerContainer;

import javax.jms.ConnectionFactory;

@Configuration
public class Configurator {
    
    @Bean()
    public BerichtOntvanger berichtOntvanger() {
        return new BerichtOntvanger();
    }

    @Bean
    public ConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory activeMQConnectionFactory = new ActiveMQConnectionFactory();
        activeMQConnectionFactory.setBrokerURL("tcp://localhost:61616");
        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory(activeMQConnectionFactory);
        cachingConnectionFactory.setCacheProducers(false);
        cachingConnectionFactory.setSessionCacheSize(10);
        return cachingConnectionFactory;
    }
    
//    @Bean
//    public DefaultMessageListenerContainer defaultMessageListenerContainer() {
//        
//    } 


}
