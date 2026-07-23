public class MyService {

    private final ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData(String userId) {
        api.logRequest(userId);
        return api.getData(userId);
    }
}
