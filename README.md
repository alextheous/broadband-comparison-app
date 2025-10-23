# Broadband Comparison App

A progressive web application for comparing broadband internet plans with a seamless 5-step user flow.

## Features

### 5-Step Comparison Flow
1. **Address Entry** - Check service availability at your location
2. **Preferences** - Select usage patterns, priorities, and requirements
3. **Plan Comparison** - View tailored recommendations with pricing
4. **Sign Up** - Complete registration with provider of choice
5. **Connect** - Finalize service activation

### Key Capabilities
- Smart recommendations based on usage patterns
- Real-time pricing and promotional offers
- Multiple provider comparisons
- No lock-in contract options
- Bundle savings opportunities
- Mobile-responsive design
- **No top navigation required** - Clean, step-by-step interface

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Database**: (To be determined - PostgreSQL recommended)
- **Deployment**: Vercel/Netlify

## Getting Started

```bash
# Clone the repository
git clone https://github.com/alextheous/broadband-comparison-app.git

# Navigate to project directory
cd broadband-comparison-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/
│   ├── address/          # Step 1: Address entry
│   ├── preferences/      # Step 2: User preferences
│   ├── plans/           # Step 3: Plan comparison
│   ├── signup/          # Step 4: Registration
│   ├── connect/         # Step 5: Connection setup
│   ├── components/      # Reusable UI components
│   └── lib/            # Utilities and helpers
├── public/             # Static assets
└── styles/            # Global styles
```

## Development Roadmap

- [ ] Set up Next.js project structure
- [ ] Implement address lookup functionality
- [ ] Create preference selection forms
- [ ] Build plan comparison interface
- [ ] Integrate provider APIs
- [ ] Add signup and connection flows
- [ ] Implement responsive design
- [ ] Add form validation and error handling
- [ ] Deploy to production

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.