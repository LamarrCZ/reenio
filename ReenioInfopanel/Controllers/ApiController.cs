using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReenioApi;

namespace ReenioInfopanel.Controllers
{
    public class ApiController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Test(string name)
        {
            string apiKey = "TkNrjTpWc9D3bzAfMM5RZyO3SidReT1SHPCNLJi7cdwVbhSnSwRZfpDgW5X5N6Zt";


            ReenioApiClient client = new ReenioApiClient(apiKey);

            var reservations = await client.ListReservations();

            return new JsonResult(new {
                Data = name?.ToUpper(),
                Reservations = reservations
            });
        }
    }
}