using EFInheritance.Models;
using Microsoft.AspNetCore.Mvc;

namespace EFInheritance.Controllers;

[ApiController]
[Route("[controller]")]
public class EFController : ControllerBase
{
    private readonly AppDbContext _context;
    public EFController(AppDbContext context){
        _context=context;
    } 
    [HttpPost("Register Employee")]
    public IActionResult AddEmployee(Employee employee){
        _context.Worker.Add(employee);
        _context.SaveChanges();
        return Ok(employee);
    }
    [HttpPost("Register Trainee")]
    public IActionResult AddTrainee(Trainee trainee){
        _context.Worker.Add(trainee);
        _context.SaveChanges();
        return Ok(trainee);
    }
    [HttpGet("GetData")]
    public IActionResult GetData(){
        var data = _context.Worker.ToList();
        return Ok(data);
    }
}
