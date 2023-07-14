using api_concesionario.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_concesionario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        public readonly ConcesionarioContext _context;

        public EmployeesController(ConcesionarioContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] Empleado request)
        {
            Empleado employee = await _context.Empleados.FirstOrDefaultAsync(e => e.Usuario == request.Usuario && e.Contrasena == request.Contrasena);
            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                return StatusCode(StatusCodes.Status200OK, employee);
            }
        }
    }
}
