using Microsoft.AspNetCore.Mvc;

namespace AIIntegrations.Areas.Admin.Controllers;

public class ReviewController : BaseAdminController
{
    public IActionResult Index()
    {
        return View();
    }
}