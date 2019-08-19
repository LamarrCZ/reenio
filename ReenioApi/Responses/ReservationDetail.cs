using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReenioApi.Responses
{
    public class ReservationDetail
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? ServiceId { get; set; }
        public long? PlaceId { get; set; }

        public long? EmployeeId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Code { get; set; }
        public int State { get; set; }
        public int[] PossibleNewStates { get; set; }
        public double? Price { get; set; }
        public string CurrencySymbol { get; set; }
        public bool IsPaid { get; set; }
        public short Capacity { get; set; }
        public object Customer { get; set; }
        /* = new {
            Id = x.CustomerId,
            Name = CustomerHelper.FormatFullName(x.CustomerFirstName, x.CustomerLastName, x.CustomerDegree)
        },*/


        public string CustomerNote { get; set; }
        public string InternalNote { get; set; }
        public string Color { get; set; }

        public List<Ticket> Tickets { get; set; }
    }
}
