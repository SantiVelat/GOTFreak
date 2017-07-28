# [GOTFreak](https://github.com/SantiVelat/GOTFreak)

[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  [![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  [![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  
 
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

---

### Description

GOTFreak is a site to search information related to all the characters from the Games of Thrones world. The user can search for a name and obtain all the characters with that name.
For each character selected it will show some extra information like his House, the coat of arms and the culture it belongs.
This is possible thanks to the API made available at: (https://api.got.show/doc/).

---

### Screenshots 

##### Home screenshot: 

![Screenshot](img/home.png)

##### Search results screenshot:

![Screenshot](img/search.png)

##### Card Event Info:

![Screenshot](img/eventCard.png)

---

### Getting Started

This is a set of directives and services for AngularJS `1.6.3`

### Dependencies

The following dependencies where use to make the Web application

- `AngularJS 1.6.3`

- `AngularJS route 1.6.3`

- `ngMap | AngularJS directives for google maps`

---

### Google Maps API
To run the map from google you need to request an API key in the next link: [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=#key), then you need to add it into the your index.html file in a script tag.
(Reference line 91 from index.html you add **?key=<%GOOGLE-API%>**, where you need to replace **_<%GOOGLE-API%>_** with your Api-key )



## API
This application relies on external API services for geolocalitzation and events information:

* [Ticket Master](http://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* [FreeGeoIp](https://freegeoip.net)

---

## Authors

- [Catalina Buades](https://github.com/catabuades)
- [Humberto Acea](https://github.com/KV-Disco)
- [Joan Albert Segura](https://github.com/jalbertsr)