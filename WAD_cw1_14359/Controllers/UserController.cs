using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WAD_cw1_14359.Models;
using WAD_cw1_14359.Repositories;

namespace WAD_cw1_14359.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRepository<User> _repository;

        public UserController(IRepository<User> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetAll()
        {
            return await _repository.GetAllAsync();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _repository.GetByIDAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);

        }
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]

        public async Task<IActionResult> Create(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            await _repository.AddAsync(user);

            return CreatedAtAction(nameof(GetById), new { id = user.UserId }, user);
        }
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, User user)
        {
            if (!id.Equals(user.UserId))
            {
                return BadRequest();
            }
            await _repository.UpdateAsync(user);
            return NoContent();

        }
        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
