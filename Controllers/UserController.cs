using Microsoft.AspNetCore.Mvc;

namespace AIIntegrations.Controllers;

public class UserController : Controller
{
    // GET
    public IActionResult Login()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }
}