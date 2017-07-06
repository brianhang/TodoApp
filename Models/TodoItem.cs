using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp
{
    public class TodoItem
    {
        [Key]
        // A numeric identifier for the to-do item.
        public int ItemId { get; set; }

        // A description of what needs to be done.
        public string Description { get; set; }

        // Whether or not this item has been completed.
        public bool Done { get; set; }
    }
}