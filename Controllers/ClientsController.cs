using api_concesionario.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_concesionario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        public readonly ConcesionarioContext _context;

        public ClientsController(ConcesionarioContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> GetClients()
        {
            List<Cliente> list = await _context.Clientes.OrderByDescending(c => c.IdCliente).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateClient([FromBody] Cliente request)
        {
            await _context.Clientes.AddAsync(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateClient([FromBody] Cliente request)
        {
            _context.Clientes.Update(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            Cliente client = _context.Clientes.Find(id);

            _context.Clientes.Remove(client);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
