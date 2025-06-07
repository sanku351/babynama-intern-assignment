# Babynama Webinars Feature

A Next.js application showcasing upcoming live webinars for Babynama, designed to help busy parents quickly discover and access expert-led sessions on child care topics.

## 🚀 Live Demo

**Live URL:** [Your Vercel deployment URL will go here]

## 📸 Screenshot

![HomePage](https://github.com/user-attachments/assets/5a2fa547-29be-49e3-ae11-ef1867d48294)
![Webinar](https://github.com/user-attachments/assets/4ca1ed55-61e7-4d03-8278-e8ce82bcf22b)
*The webinars page showing upcoming and past sessions with detailed information cards*

## ✨ Features

- **Clean, Parent-Friendly Design**: Professional layout with calming blue color scheme
- **Responsive Grid Layout**: Adapts beautifully to desktop, tablet, and mobile devices
- **Upcoming vs Past Webinars**: Clear separation with visual indicators
- **Detailed Information Cards**: Each webinar shows speaker, date, time, duration, and description
- **Interactive Elements**: "View Details" buttons with console logging functionality
- **Visual Hierarchy**: Color-coded categories and status badges for easy scanning

## 🛠️ Technical Implementation

### Key Technical Choices Made

**Component Architecture**: I created a single-page component rather than separate WebinarCard components because the webinar data structure is simple and the page isn't overly complex. This keeps the code more straightforward while still being maintainable. If this were to scale with more features, I would definitely extract reusable components.

**Date Handling**: I implemented custom date formatting functions (\`formatDate\` and \`formatTime\`) to provide user-friendly date displays and automatic categorization of upcoming vs. past webinars. This ensures the content stays relevant and well-organized.

**Styling Approach**: I used Tailwind CSS with shadcn/ui components to achieve a professional, healthcare-appropriate design quickly while maintaining consistency and accessibility.

### Mock Data Structure

Each webinar object contains:
- \`id\`: Unique identifier
- \`title\`: Descriptive session name
- \`speaker\`: Expert pediatrician name (e.g., "Dr. Sumitra Meena")
- \`date\`: ISO date string for proper sorting and formatting
- \`duration\`: Session length
- \`description\`: Brief overview of the content
- \`category\`: Topic classification for better organization

## 🚧 Roadblock & Learning

**Challenge**: I initially struggled with the proper TypeScript typing for the onClick handler when passing the webinar ID parameter. The error was related to how React handles event handlers with custom parameters.

**Solution**: I researched the React documentation and found that I needed to use an arrow function in the onClick prop: \`onClick={() => handleViewDetails(webinar.id)}\` rather than trying to pass the parameter directly. This ensures the function is called with the correct context and parameters.

**Learning**: This reminded me of the importance of understanding JavaScript closures and how React's synthetic event system works. It's a common pattern that I'll remember for future projects.

## 🏗️ Project Structure

\`\`\`
app/
├── webinars/
│   └── page.tsx          # Main webinars listing page
├── globals.css           # Global styles
└── layout.tsx           # Root layout

components/
└── ui/                  # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    └── badge.tsx
\`\`\`

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies: \`npm install\`
3. Run the development server: \`npm run dev\`
4. Open [http://localhost:3000/webinars](http://localhost:3000/webinars)

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+): 3-column grid layout
- Tablet (768px-1023px): 2-column grid layout  
- Mobile (<768px): Single-column layout with touch-friendly buttons

## 🎯 Future Enhancements

- Add webinar registration functionality
- Implement search and filtering capabilities
- Add calendar integration
- Include webinar recordings and replay functionality
- Add user authentication for personalized recommendations

---

Built with ❤️ for Babynama - Supporting parents with expert guidance
\`\`\`
