# CIO News App

A modern web application for delivering technology and business news targeted at Chief Information Officers (CIOs) and IT leaders.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RaymanMohs/cio-news-app
cd cio-news-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the mock API server:
```bash
json-server --watch db.json --port 8000
```

4. Start the development server:
```bash
npm run start
```

5. Run tests:
```bash
npm run test
```

6. Run linting:
```bash
npm run lint
```

## Project Structure

```
cio-news-app/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── AdvertisementBanner/
│   │   ├── ContentPanel/
│   │   ├── Descriptor/
│   │   ├── EdgeMenu/
│   │   └── SectionTitle/
│   ├── constants/
│   │   └── data.ts
│   ├── pages/
│   │   ├── Home/
│   │   └── Article/
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
├── public/
├── tests/
├── db.json
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- Latest technology news and insights
- Categorized content browsing
- Responsive design for all devices
- Tag-based navigation
- Search functionality
- Advertisement integration

## Available Scripts

- `npm run start` - Starts the development server
- `npm run build` - Creates a production build
- `npm run test` - Runs the test suite
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code using Prettier
- `json-server --watch db.json --port 8000` - Starts the mock API server

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- JSON Server (for mock API)
- Jest (for testing)
- ESLint & Prettier (for code quality)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Rayman Mohs - [@RaymanMohs](https://github.com/RaymanMohs)

Project Link: [https://github.com/RaymanMohs/ci