# 🌤️ Weather App

A modern and responsive Weather Application built using **React.js** and **Vite**. The application fetches real-time weather information from the **OpenWeatherMap API** and displays the current temperature, humidity, wind speed, location, and weather condition with dynamic weather icons.

## 🚀 Live Demo

Add your deployed Vercel link here:

```text
https://your-app.vercel.app
```

## 📸 Screenshot

Add a screenshot of your application here.

```
project-root/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Real-time temperature
* 💧 Humidity information
* 💨 Wind speed
* 🌍 Displays city name
* 🌤️ Dynamic weather icons
* ⚡ Fast UI using React + Vite
* 📱 Responsive Design

---

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* CSS3
* OpenWeatherMap API

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/NiranjansMaruthi/weather-app.git
```

### Navigate to the project

```bash
cd weather-app
```

### Install dependencies

```bash
npm install
```

### Create Environment Variable

Create a `.env` file in the root directory.

```env
VITE_APP_ID=YOUR_OPENWEATHER_API_KEY
```

Get your free API key from:

https://openweathermap.org/api

### Run the project

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
src
│
├── assets
│   ├── clear.png
│   ├── cloudy.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
│
├── components
│   ├── Weather.jsx
│   └── Weather.css
│
├── App.jsx
└── main.jsx
```

---

## 🌐 API

This project uses the **OpenWeatherMap Current Weather API** to fetch live weather data based on the city entered by the user. The API provides details such as temperature, humidity, wind speed, and weather conditions.

---

## 📚 What I Learned

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useRef`)
* Fetch API
* Environment Variables in Vite
* API Integration
* Conditional Rendering
* Component-based Architecture
* Error Handling
* Responsive UI Design

---

## 🔮 Future Improvements

* 📍 Current Location Weather
* 🌙 Dark / Light Mode
* 📅 5-Day Weather Forecast
* 🌡️ Celsius/Fahrenheit Toggle
* ⭐ Favorite Cities
* 🌎 Search History

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Niranjan S**

* GitHub: https://github.com/NiranjansMaruthi
* LinkedIn: Add your LinkedIn profile

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.

---

## 📄 License

This project is licensed under the MIT License.
