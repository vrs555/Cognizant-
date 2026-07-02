import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(104, "Laptop", "Electronics"),
                new Product(101, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(102, "Watch", "Accessories")
        };

        // Linear Search
        System.out.println("Linear Search:");
        Product p1 = LinearSearch.search(products, 103);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product Not Found");

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("\nBinary Search:");
        Product p2 = BinarySearch.search(products, 103);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product Not Found");
    }
}