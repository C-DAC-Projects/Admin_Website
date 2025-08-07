using Admin_Backend.DTOs;
public class PetCreateDto
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
    public double Price { get; set; }
    public string Description { get; set; }
    public int BreedId { get; set; }

    public List<IFormFile> Images { get; set; } // back to basic list of images
}
