using AIIntegrations.Models;

namespace AIIntegrations.Services.ApplicationService;

public interface IApplicationService
{
    Task SaveApplicationAsync(ApplicationModel application);
}