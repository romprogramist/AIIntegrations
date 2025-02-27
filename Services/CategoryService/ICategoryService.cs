using AIIntegrations.Models.Dtos;

namespace AIIntegrations.Services.CategoryService;

public interface ICategoryService
{
    Task<List<CategoryDto>> GetCategoriesAsync();
}