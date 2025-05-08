# 💸 money-money

A simple and responsive currency converter app that allows users to convert between various currencies in real-time using an external API.

## 🌍 Features

- Real-time currency conversion
- Input validation for positive numbers
- Dropdowns to select currencies (from / to)
- Shows the current exchange rate (1 FROM = RATE TO)
- Theme switcher (Green / Pink)
- LocalStorage support to remember previous selections



## 🛠 Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Node.js (Express for backend)
- External currency API
- LocalStorage



## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm

### Installation

#### 1. Clone the repository:

```git clone https://github.com/your-username/money-money.git```

#### 2. Navigate into the project folder: 

```cd money-money```


#### 3. Install dependencies:

```npm install```


#### 4. Start the development server:

```npm start```


#### 5. Open your browser and go to:

```http://localhost:3000```
   

## 📁 Project Structure
 ```money-money/
├── public/
│   └── index.html
├── src/
│   ├── main.js
│   └── style.css
├── server.js
├── .env
└── README.md``` 


## 🧪 Notes
The app uses fetch('/api/...') to access currency data from a backend route.

Your API key is stored in .env and used server-side for security.