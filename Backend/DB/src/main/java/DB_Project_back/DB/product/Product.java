package DB_Project_back.DB.product;

public class Product {
    private int uid;
    private String name;
    private String model_name;
    private String brand;
    private String category;
    private int price;
    private String description;

    // Getters, Setters
    public int getUid() { return uid; }
    public void setUid(int uid) { this.uid = uid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getModel_name() { return model_name; }
    public void setModel_name(String model_name) { this.model_name = model_name; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
