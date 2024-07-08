using System;
using System.Collections.Generic;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Stripe;

namespace StripeExample
{
  public class Program
  {
    public static void Main(string[] args)
    {
      WebHost.CreateDefaultBuilder(args)
        .UseUrls("http://0.0.0.0:4242")
        .UseWebRoot("public")
        .UseStartup<Startup>()
        .Build()
        .Run();
    }
  }

  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().AddNewtonsoftJson();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      // This is your test secret API key.
      StripeConfiguration.ApiKey = "sk_test_51PZzciCyC8OWGlHKE542bwYjZnBTEmCd4nTubWatfDsfQUWXV3pNVe6MDhhYLSJWjwR4CZ9FYNAVCE56cfbIpP2Z00uh7EeZOl";

      if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
      app.UseRouting();
      app.UseStaticFiles();
      app.UseEndpoints(endpoints => endpoints.MapControllers());
    }
  }

  [Route("create-payment-intent")]
  [ApiController]
  public class PaymentIntentApiController : Controller
  {
    [HttpPost]
    public ActionResult Create(PaymentIntentCreateRequest request)
    {
      var paymentIntentService = new PaymentIntentService();
      var paymentIntent = paymentIntentService.Create(new PaymentIntentCreateOptions
      {
        Amount = CalculateOrderAmount(request.Items),
        Currency = "gbp",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions
        {
          Enabled = true,
        },
      });

      return Json(new { clientSecret = paymentIntent.ClientSecret });
    }

    private int CalculateOrderAmount(Item[] items)
    {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return 1400;
    }

    public class Item
    {
      [JsonProperty("id")]
      public string Id { get; set; }
      [JsonProperty("Amount")]
      public string Amount { get; set; }
    }

    public class PaymentIntentCreateRequest
    {
      [JsonProperty("items")]
      public Item[] Items { get; set; }
    }
  }
}
