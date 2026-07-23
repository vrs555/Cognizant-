import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteractionWithSpecificArguments() {

        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData("USER101")).thenReturn("Employee Details");

        MyService service = new MyService(mockApi);

        // Act
        String result = service.fetchData("USER101");

        // Assert
        assertEquals("Employee Details", result);

        verify(mockApi, times(1)).logRequest("USER101");
        verify(mockApi, times(1)).getData("USER101");
        verifyNoMoreInteractions(mockApi);
    }

    @Test
    public void testVerifyMultipleCalls() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData("ADMIN")).thenReturn("Admin Data");

        MyService service = new MyService(mockApi);

        service.fetchData("ADMIN");
        service.fetchData("ADMIN");

        verify(mockApi, times(2)).logRequest("ADMIN");
        verify(mockApi, times(2)).getData("ADMIN");
    }
}
