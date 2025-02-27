using AIIntegrations.Models;
using AIIntegrations.Services.CategoryService;
using Microsoft.AspNetCore.Mvc;

namespace AIIntegrations.Controllers.API;

[ApiController]
[Route("api/category")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }
    
    [HttpGet]
    [Route("get")]
    public async Task<IActionResult> GetCategories()
    {
        var categoryDtos = await _categoryService.GetCategoriesAsync();
        var categories = categoryDtos.Select(p => new CategoryModel
        {
            Id = p.Id,
            Name = p.Name,
        }).OrderBy(p => p.Name);
        
        return Ok(categories);
    }
}