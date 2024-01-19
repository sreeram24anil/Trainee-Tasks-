using EFInheritance.Models;
using Microsoft.EntityFrameworkCore;

public class AppDbContext:DbContext{
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options){

    }
    public DbSet<Person>? Worker { get; set; }
    public DbSet<Employee>? Employee { get; set; }
    public DbSet<Trainee>? Trainee { get; set; }
}
