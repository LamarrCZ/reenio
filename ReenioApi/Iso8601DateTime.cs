using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReenioApi
{
    public static class Iso8601DateTime
    {

        public static string ToString(DateTime date)
        {
            // Využijeme JSON converter.
            string str = JsonConvert.SerializeObject(date);
            return str.Substring(1, str.Length - 2);

        }

    }
}
