using Microsoft.EntityFrameworkCore;
using WAD_cw1_14359.DAL;
using WAD_cw1_14359.Models;

namespace WAD_cw1_14359.Repositories
{
    public class FeedbackRepository : IRepository<Feedback>
    {
        private readonly FeedbackDBContext _context;

        public FeedbackRepository(FeedbackDBContext context)
        {
            _context = context;
        }
        public async Task AddAsync(Feedback entity)
        {
            await _context.Feedbacks.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var item = await _context.Feedbacks.FirstOrDefaultAsync(x => x.FeedbackId == id);
            if (item != null)
            {
                _context.Feedbacks.Remove(item);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Feedback>> GetAllAsync()
        {
            return await _context.Feedbacks.Include(t => t.User).ToListAsync();
        }

        public async  Task<Feedback> GetByIDAsync(int id)
        {
            return await _context.Feedbacks.Include(t => t.User).FirstOrDefaultAsync(t => t.FeedbackId == id);
        }

        public async Task UpdateAsync(Feedback entity)
        {
             _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
