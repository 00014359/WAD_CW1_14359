using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WAD_cw1_14359.Models;
using WAD_cw1_14359.Repositories;

namespace WAD_cw1_14359.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IRepository<Feedback> _repository;

        public FeedbackController(IRepository<Feedback> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Feedback>> GetAll()
        {
            return await _repository.GetAllAsync();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Feedback), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var feedback = await _repository.GetByIDAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }
            return Ok(feedback);

        }
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]

        public async Task<IActionResult> Create(Feedback feedback)
        {
            if (feedback == null)
            {
                return BadRequest();
            }

            await _repository.AddAsync(feedback);

            return CreatedAtAction(nameof(GetById), new { id = feedback.FeedbackId }, feedback);
        }
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, Feedback feedback)
        {
            if (!id.Equals(feedback.FeedbackId))
            {
                return BadRequest();
            }
            await _repository.UpdateAsync(feedback);
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
