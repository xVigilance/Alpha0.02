/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
         {
               module: 'MMM-History',
              position: 'bottom_bar',
              config: {
            maxWidth: "300px"  // Increase to maximum px or 100% to stretch across mirror. See Examples above.
              }
        }
	 {
    module: 'googlemap',
    position: 'position',
    config: {
        apikey: 'your_api_key',
	    origin: 'your_origin_here',
	    destination: 'your_destination_here',
    }
}

		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]
	{
		module: 'stocks',
        position: 'bottom_bar',
		config: {
			stocks: '.DJI,MSFT,AAPL,GOOG,INTC,CICS,TSLA,FB', // stock symbols
            updateInterval: 37000 // update interval in milliseconds
		}
	}
{
	    module: 'internet-monitor',
            position: 'top_center',
            header: 'Internet Monitor',
            config:{
                type: '',
                maxTime: 20000,
                updateInterval: 0,
                verbose: false,
                displayStrength: true,
                displaySpeed: true,
                strengthIconSize: 80,
                maxGaugeScale: 100,
            },
	}

        {
		module: 'MMM-Screencast',
		position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
		config: {
			position: 'bottomRight',
			height: 300,
			width: 500,
		}
        }
    ]
}
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
