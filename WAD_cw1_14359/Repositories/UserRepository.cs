using Microsoft.EntityFrameworkCore;
using WAD_cw1_14359.DAL;
using WAD_cw1_14359.Models;
using static System.Reflection.Metadata.BlobBuilder;

namespace WAD_cw1_14359.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly FeedbackDBContext _context;

        public UserRepository(FeedbackDBContext context)
        {
            _context = context;
        }
        public async Task AddAsync(User entity)
        {
            await _context.Users.AddAsync(entity);
            await _context.SaveChangesAsync();

        }

        public  async Task DeleteAsync(int id)
        {
            var item = await _context.Users.FirstOrDefaultAsync(x => x.UserId == id);
            if (item != null)
            {
                _context.Users.Remove(item);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetByIDAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(t => t.UserId == id);
        }

        public async Task UpdateAsync(User entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
