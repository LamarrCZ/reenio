using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReenioApi.Responses
{
    public class Ticket
    {
        public short Id { get; set; }
        public (string Label, string Value)[] StructuredLabel { get; set; }
        public string Code { get; set; }
        public bool IsChecked { get; set; }
    }
}
