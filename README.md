# Deployment

[See the deployed application](https://5ffd352b26f6437ffb17640c--givemelocalnews.netlify.app/) 



# Development

* Clone the repo

  `$ https://github.com/anoopano/Local-news-application.git`

* Install dependencies

  `$ npm install`

* Run scripts

Action  | Usage
--------|-------
Start development mode |`npm start`
Build for production| `npm run build`
Run tests| `npm run test`
Eject from create-react-app| `npm run eject`


# Apis used 

* `GNews Api`

[GNews](https://gnews.io/) is an API to search for articles from a variety of sources, including Google News. We also provide top headlines from which you can filter by topic such as world, business, sports.

* `OpenWeatherMap Api`

[OpenWeatherMap](https://openweathermap.org/api) is an online service, owned by OpenWeather Ltd, that provides global weather data, including current weather data, forecasts, nowcasts and historical data (starting from 1979), utilising meteorological broadcast services and raw data from airport weather stations, radar stations and other weather stations.



# External Libraries used are

### `react-bootstrap`

[React-Bootstrap](https://react-bootstrap.github.io/) is a great library which creates React components for you. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

### `Bootstrap`

[Bootstrap](https://getbootstrap.com/) Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

### `axios`

[Axios](https://www.npmjs.com/package/axios) is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node. js. Making HTTP requests to fetch or save data is one of the most common tasks a client-side JavaScript application will need to do.


# Folder structure inside the src folder


```bash
├── App.css
├── App.js
├── assets
│   └── constants.js
├── components
│   ├── Header.css
│   ├── Header.js
│   ├── NewsCard.css
│   ├── NewsCard.js
│   ├── NewsList.css
│   ├── NewsList.js
│   ├── SearchNews.css
│   ├── SearchNews.js
│   └── WeatherInfo.js
├── DataFetch
│   ├── useFetchNews.js
│   └── useSearchNews.js
└── index.js
```

# Application design

The root component is the App component. It will render the Header, SearchNews and NewsList component. App component takes data from the useFetchNews hooks and pass it to the NewsList component.

In the Header component, there is a logo, the weather details from the WeatherInfo component and an option to select language of your choice. For the testing purpose of the application, I only include four languages (can include all language supported by the GNews Api if needed).

The NewsList component takes the 3 arguments which includes the news, loading status and the error. And maps the news to NewsCard components to display as individual news cards.

The SearchNews component takes data from the useSearchNews hook and map it to the NewsList component.
