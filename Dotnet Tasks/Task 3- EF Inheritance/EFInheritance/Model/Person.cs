using System.ComponentModel.DataAnnotations;

namespace EFInheritance.Models;

public class Person
{
    [Key]
    public int id { get; set; }

    public string? Name { get; set; }

    public int Age { get; set; }

    public string? Gender {get;set;}

}
public class Employee:Person{

    public int Hours {get;set;}
    public string? Practice {get;set;}
}
public class Trainee:Person{

    public int Sessions {get;set;}
}