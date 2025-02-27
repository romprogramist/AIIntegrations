using AIIntegrations.Models.Dtos;

namespace AIIntegrations.Services.UserService;

public interface IUserService
{
    Task<bool> RegisterUserAsync(UserDto userDto);
    Task<UserDto?> GetUserAsync(string userName, string role);
}