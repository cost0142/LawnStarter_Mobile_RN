Quick Run:

Run Backend server at: https://github.com/cost0142/LawnStarter.git

--> docker-compose up --build

RN Mobile 

a) npm install

b) npx expo start


2. Main Screens

SearchScreen – same character name search.

PersonDetailScreen – displays character details + movies.

(Optional) MetricsScreen – displays saved logs.

3. API Requests

Fetch characters from SWAPI through the backend (http://localhost:3001/api/people)

Fetch person details and movies via /api/people/:id and /api/proxy/films/:filmId

4. Styling

Create a visual theme similar to the web version using StyleSheet

Use reusable components (Card, Button, etc.)

5. Metrics

Create a hook or function to record metrics using POST /api/metrics
 
 swstarter-mobile/
│
├── components/
│   ├── SearchInput.js
│   ├── ResultItem.js
│   └── FilmCard.js
│
├── screens/
│   ├── SearchScreen.js
│   ├── DetailScreen.js
│   └── MetricsLogScreen.js
│
├── services/
│   └── api.js
│
├── App.js
├── app.json
└── package.json



