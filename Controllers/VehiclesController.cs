using api_concesionario.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiConcesionario.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        public readonly ConcesionarioContext _context;

        public VehiclesController(ConcesionarioContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> GetVehicles()
        {
            List<Vehiculo> list = await _context.Vehiculos.OrderByDescending(c => c.IdAutomovil).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateVehicle([FromBody] Vehiculo request)
        {
            await _context.Vehiculos.AddAsync(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> UpdateVehicle([FromBody] Vehiculo request)
        {
            _context.Vehiculos.Update(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            Vehiculo vehicle = _context.Vehiculos.Find(id);

            _context.Vehiculos.Remove(vehicle);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
