using Microsoft.AspNetCore.Mvc;

namespace AIIntegrations.Areas.Admin.Controllers;

public class HomeController : BaseAdminController
{
    public IActionResult Index()
    {
        return RedirectToAction("Index", "Product");
    }
}