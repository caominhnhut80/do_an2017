using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(xitrum_shop.Startup))]
namespace xitrum_shop
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
