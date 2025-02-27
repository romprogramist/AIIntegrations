using AIIntegrations.Models;
using AIIntegrations.Models.Dtos;

namespace AIIntegrations.Services.EmailService;

public interface IEmailService
{
    Task SendEmailAsync(EmailDto request);
    string CreateBody(ApplicationModel application);
    string CreateBody(ReviewModel review);
}