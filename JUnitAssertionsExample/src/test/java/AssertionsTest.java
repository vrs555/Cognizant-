import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAssertions() {

        // Assert Equals
        assertEquals(5, calculator.add(2,3));
        assertEquals(7, calculator.subtract(10,3));
        assertEquals(20, calculator.multiply(4,5));
        assertEquals(5, calculator.divide(25,5));

        // Assert True
        assertTrue(calculator.isPositive(10));
        assertTrue(15 > 8);

        // Assert False
        assertFalse(calculator.isPositive(-2));
        assertFalse(5 < 3);

        // Assert Null
        String value = null;
        assertNull(value);

        // Assert Not Null
        assertNotNull(calculator);
        assertNotNull(new Object());

        // Assert Same
        Calculator c1 = calculator;
        Calculator c2 = c1;
        assertSame(c1, c2);

        // Assert Not Same
        Calculator c3 = new Calculator();
        assertNotSame(c1, c3);

        // Assert Array Equals
        int[] expected = {1,2,3,4,5};
        int[] actual = {1,2,3,4,5};
        assertArrayEquals(expected, actual);

        // Assert Equals for String
        assertEquals("JUnit Assertions", calculator.getMessage());
    }
}
