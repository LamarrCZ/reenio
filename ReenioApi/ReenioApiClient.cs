using Newtonsoft.Json;
using ReenioApi.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ReenioApi
{
    public class ReenioApiClient
    {

        private static readonly string BASE_URL = "https://reenio.cz/cs/api/v1/";

        private readonly string apiKey;


        public ReenioApiClient(string accessToken) {
            this.apiKey = accessToken;
        }


        private string SerializeUrl(string url, Dictionary<string, string>  queryParams) {
            return url + "?" + string.Join("&", queryParams.Select(x => x.Key + "=" + WebUtility.UrlEncode(x.Value)));
        }

        public async Task<ReservationListResponse> ListReservations()
        {


            string url = BASE_URL + "admin/reservation/list";

            Dictionary<string, string> queryParams = new Dictionary<string, string>();
            queryParams.Add("start", Iso8601DateTime.ToString(DateTime.UtcNow.AddDays(-20)));
            queryParams.Add("end", Iso8601DateTime.ToString(DateTime.UtcNow.AddDays(20)));

            ReservationListResponse result = null;

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("X-Reenio-ApiKey", apiKey);

                var queryResult = await client.GetAsync(this.SerializeUrl(url, queryParams));
                if (!queryResult.IsSuccessStatusCode)
                {
                    throw new NotImplementedException();
                }
                string response = await queryResult.Content.ReadAsStringAsync();
                result = JsonConvert.DeserializeObject<ReservationListResponse>(response);
            }

            return result;
        }


    }
}
