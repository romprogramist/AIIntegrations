using AIIntegrations.Models;

namespace AIIntegrations.Services.ReviewService;

public interface IReviewService
{
    Task SaveNewReviewAsync(ReviewModel application);
    Task<IEnumerable<ReviewModel>> GetApprovedReviewsAsync();
    Task<IEnumerable<ReviewModel>> GetAllReviewsAsync();
    Task<bool> ApproveReviewAsync(int id);
}