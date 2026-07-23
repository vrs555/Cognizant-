import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApiReturnsMockData() {

        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.isAvailable()).thenReturn(true);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        // Act
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);

        verify(mockApi, times(1)).isAvailable();
        verify(mockApi, times(1)).getData();
    }

    @Test
    public void testExternalApiUnavailable() {

        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.isAvailable()).thenReturn(false);

        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        assertEquals("Service Unavailable", result);

        verify(mockApi, never()).getData();
    }
}
