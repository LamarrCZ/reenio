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
        [HttpGet]
        public async Task<IActionResult> Test()
        {
            string apiKey = "TkNlDQQsB2eWGlcP6hA7SET41TwjJRjriJxetkUhKwyiXpztjgc2VuuYu8pk7o0R";

            ReenioApiClient client = new ReenioApiClient(apiKey);

            var reservations = await client.ListReservations();

            return new JsonResult(reservations);
        }

        /*[HttpPost]
        public async Task<IActionResult> Test(string name)
        {
            string apiKey = "TkNlDQQsB2eWGlcP6hA7SET41TwjJRjriJxetkUhKwyiXpztjgc2VuuYu8pk7o0R";

            ReenioApiClient client = new ReenioApiClient(apiKey);

            var reservations = await client.ListReservations();

            return new JsonResult(reservations);
            return new JsonResult(new {
                Data = name?.ToUpper(),
                Reservations = reservations
            });
        }*/
    }
}