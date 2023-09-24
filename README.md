# 🌐 News Voice 🗣️

News Voice is a revolutionary 🚀 News App built with React.JS, leveraging the power of Alan AI 🤖 for voice recognition and NewsAPI 📰 for fetching the latest news from multiple sources. It provides a seamless and interactive user experience, allowing users to ask for news by source, term, or category, and even read headlines or open specific articles, all through voice commands.

## 🌟 Features

- **🗣️ Voice Recognition with Alan AI**: Enables users to interact with the app using voice commands.
- **📰 NewsAPI Integration**: Fetches the latest news from various sources.
- **🎨 Material UI**: Offers a sleek and responsive user interface.
- **🔍 Multi-Source News Retrieval**: Provides news from different sources or based on specific terms or categories.

## 🤖 Alan AI

The Alan AI script is designed to retrieve news articles using the News API based on user voice commands. The user can ask for news by source, by term, or by category, and the script fetches the relevant articles and presents them to the user. The user can also ask to read the headlines or open a specific article.

🎥 Demo

[![App demo](https://i9.ytimg.com/vi_webp/baHwrLGl63k/mq2.webp?sqp=CPjBwqgG-oaymwEmCMACELQB8quKqQMa8AEB-AHsCYAC0AWKAgwIABABGEcgSyhlMA8=&rs=AOn4CLBw-knQ2k2TIlis6yr7FAW9KrDGGQ)](https://youtu.be/baHwrLGl63k)

### 📂 Sections of the Script

1. **🎙️ Voice Command Controllers**: Define the voice commands for user interaction.
2. **🌐 Networking Functions**: Contain the function to call the News API and retrieve the articles.
3. **🛠️ Util Functions**: Include the confirmation context and other utility functions.

> 🚨 **Note**: A valid News API key needs to be set in the environment variable `NEWS_API_KEY` to use this script.

## 🚀 Getting Started

### 🛠️ Prerequisites

- Node.js
- npm or yarn
- A valid News API key
- Alan AI Studio account

### 📦 Installation

1. 📂 Clone the repository
   ```sh
   git clone git@github.com:jmoliugp/react-alan-ai-news-app.git
   ```
2. 📦 Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. 🌿 Set up your `.env` file with your News API key and Alan AI key
   ```env
   REACT_APP_NEWS_API_KEY=your_news_api_key
   REACT_APP_ALAN_AI_KEY=your_alan_ai_key
   ```
4. 🚀 Run the app in the development mode
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

## 🗣️ Usage

Once the app is running, you can interact with it using the following voice commands:

- "🔍 Give me the latest news from [source]"
- "🔍 Find news about [term]"
- "🔍 Show me the top headlines in [category]"
- "📢 Read the headlines"
- "🔗 Open article number [number]"

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- [Alan AI](https://alan.app/)
- [News API](https://newsapi.org/)
- [Material-UI](https://mui.com/)
- [JS Mastery](https://www.jsmastery.pro/)
