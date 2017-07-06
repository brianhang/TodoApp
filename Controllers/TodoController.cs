using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace TodoApp
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoContext _todoContext = new TodoContext();

        [HttpGet]
        public List<TodoItem> Get()
        {
            return _todoContext.Items.ToList();
        }

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(int id)
        {
            TodoItem item = _todoContext.Items.FirstOrDefault(x => x.ItemId == id);

            if (item == null)
            {
                return new NotFoundResult();
            }

            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] TodoItem item)
        {
            if (ModelState.IsValid)
            {
                _todoContext.Items.Add(item);
                _todoContext.SaveChanges();

                return CreatedAtRoute("GetById", new { id = item.ItemId }, item);
            }
            
            return BadRequest();
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id)
        {
            TodoItem item = _todoContext.Items.FirstOrDefault(x => x.ItemId == id);

            if (!ModelState.IsValid)
            {
                return new BadRequestResult();
            }

            if (item == null)
            {
                return new NotFoundResult();
            }

            _todoContext.Items.Attach(item);
            item.Done = !item.Done;
            _todoContext.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            TodoItem item = _todoContext.Items.FirstOrDefault(x => x.ItemId == id);
            
            if (item == null)
            {
                return Ok();
            }

            _todoContext.Items.Remove(item);
            _todoContext.SaveChanges();

            return Ok();
        }
    }
}