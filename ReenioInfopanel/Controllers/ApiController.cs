using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReenioInfopanel.Controllers
{
    public class ApiController : Controller
    {
        [HttpPost]
        public IActionResult Test(string name)
        {
            return new JsonResult(new {
                Data = name?.ToUpper()
            });
        }
    }
}