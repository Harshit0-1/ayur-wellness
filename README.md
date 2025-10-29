# Ayur Wellness - Ayurvedic Diet & Wellness Platform

A web application for personalized Ayurvedic diet recommendations and wellness tracking based on individual body types (Prakriti).

## About the Project

This platform helps users discover their Ayurvedic body type and provides customized diet plans, wellness tips, and health recommendations according to Ayurvedic principles.

## Features

- Body type (Prakriti) assessment
- Personalized diet recommendations
- Wellness tips and guidance
- User-friendly interface
- Responsive design for all devices

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database
- **shadcn/ui** - UI components

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Harshit0-1/ayur-wellness.git
cd ayur-wellness
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
# Copy the example env file
copy .env.example .env

# Open .env and add your Supabase credentials
```

4. Run the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
ayur-wellness/
├── src/
│   ├── components/    # React components
│   ├── pages/        # Page components
│   ├── lib/          # Utility functions
│   └── App.tsx       # Main app component
├── public/           # Static assets
└── index.html        # HTML entry point
```

## Environment Variables

Required environment variables (add these to your `.env` file):

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Building for Production

```bash
npm run dev
```

The build files will be generated in the `dist/` folder.

## Author

Harshit

## License

This project is for educational purposes.
