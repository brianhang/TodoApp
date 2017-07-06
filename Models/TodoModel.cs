using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TodoApp
{
    public class TodoContext : DbContext
    {
        public DbSet<TodoItem> Items { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=todo.db");
        }
    }
}