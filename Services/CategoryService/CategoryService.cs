using AIIntegrations.Data;
using AIIntegrations.Models.Dtos;
using Microsoft.EntityFrameworkCore;
using AIIntegrations.Services.UserService;

namespace AIIntegrations.Services.CategoryService;

public class CategoryService : ICategoryService
{
    private readonly DataContext _context;
    
    public CategoryService(DataContext context)
    {
        _context = context;
    }
    
    public async Task<List<CategoryDto>> GetCategoriesAsync()
    {
        var categories = await _context.Categories
            .Where(c => c.IsAvailable)
            .Select(c => new CategoryDto
            {
                Id = c.Id,
                Name = c.Name,
                Description = c.Description,
                Image = c.Image,
                ImageThumbnail = c.ImageThumbnail,
                Order = c.Order,
                IsAvailable = c.IsAvailable
            }).ToListAsync();

        return categories;
    }
}