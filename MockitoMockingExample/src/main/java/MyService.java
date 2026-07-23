public class MyService {
    private ExternalApi api;
    public MyService(ExternalApi api){
        this.api = api;
    }

    public String fetchData(){
        if(api.isAvailable()){
            return api.getData();
        }
        return "Service Unavailable";
    }
}
