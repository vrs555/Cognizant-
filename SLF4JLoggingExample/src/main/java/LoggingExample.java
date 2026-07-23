import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.info("Application started.");

        String username = "admin";
        logger.debug("Current user: {}", username);

        try {
            int result = 100 / 0;
            logger.info("Result: {}", result);
        } catch (ArithmeticException e) {
            logger.error("Exception occurred while performing division.", e);
        }

        int availableMemory = 15;

        if (availableMemory < 20) {
            logger.warn("Available memory is below the recommended threshold: {} MB", availableMemory);
        }

        logger.info("Application execution completed.");
    }
}
