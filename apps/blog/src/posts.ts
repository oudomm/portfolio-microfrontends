export const posts = [
    {
      title: "Building Endora — Our Full Stack Final Project",
      date: "2026-02-15",
      category: "Project",
      excerpt:
        "How our team built a Backend-as-a-Service platform as the final project for the Full Stack Web Development course at ISTAD.",
      content: [
        "Endora was the final project for my Full Stack Web Development course at ISTAD. After spending the course learning Spring Boot and Next.js, our team decided to build something ambitious — a Backend-as-a-Service platform that lets frontend developers create APIs without writing backend code.",
        "The platform has two main approaches: a visual schema-based API designer where you design database tables and get instant CRUD endpoints, and an external database connection feature that uses PostgREST to connect to existing PostgreSQL databases and auto-generate API layers.",
        "One of the features I'm most proud of is Endora AI — an intelligent web scraping tool where you can describe what data you want in natural language, and it scrapes, parses, and auto-creates database tables from the results. The scraping engine uses Selenium and JSoup under the hood, with the Claude API powering the conversational interface and intelligent field detection.",
        "We also built a table visualizer that shows interactive Entity Relationship Diagrams, auto-generated Swagger UI documentation, Postman collection export, and built-in authentication with GitHub and Google OAuth via NextAuth.js.",
        "The frontend uses Next.js 15 with the App Router, Redux Toolkit with RTK Query for state management, React Flow for the visual schema designer, and Shadcn/UI for the component library. The backend runs on Spring Boot 3 with Java 21, using both MongoDB and PostgreSQL — MongoDB for dynamic schemas and project data, PostgreSQL for user accounts and relational data. We used Keycloak for OAuth2 authentication and Google Cloud Storage for file uploads.",
        "Building Endora taught me what it takes to ship a real product — not just writing code, but thinking about architecture, user experience, API design, and working as a team. It's the project that made everything I learned in the course come together.",
      ],
    },
    {
      title: "LineupLab — Built for Our Monthly Football Match",
      date: "2026-02-15",
      category: "Project",
      excerpt:
        "How a Google Meet with my ITP team before our school football match turned into a full lineup builder app.",
      content: [
        "At ISTAD, there's a monthly party where all the students from every class get together in the morning to play football. A few days before one of those match days, my ITP team had a Google Meet to plan our lineup.",
        "We wanted to create a proper formation with everyone's photo on it, but every lineup tool we tried either didn't let you add player photos or was cluttered with ads and paywalls. So I thought — why not just build one myself?",
        "That's how LineupLab was born. I built it with Next.js, TypeScript, and Tailwind CSS. The core idea was simple: drag and drop players onto a pitch, add their photos, and export it as an image to share with the team.",
        "The drag-and-drop system uses @dnd-kit, which made it smooth to move players between positions and rows. You can set up formations with 5 to 16 players, assign jersey numbers, pick roles like GK, CB, or ST, and even add notes like 'captain' or 'left-footed'.",
        "I added bench/substitute management so you can have backup players and swap them in. There's also team logo upload, an attack direction toggle, and the ability to export lineups as PNG or JPEG — or copy straight to clipboard. Everything auto-saves to localStorage so you don't lose your lineup if you close the tab.",
        "The export was the trickiest part. I used html-to-image to capture the pitch at 3x resolution so it looks crisp when shared. Getting it to match exactly what you see on screen — the grass texture, field markings, player photos, and positions — took a lot of fine-tuning.",
        "What started as a quick tool for one match day turned into a proper app that I kept improving. It's one of those projects that reminded me why I love building things — when you're solving your own problem, the motivation never runs out.",
      ],
    },
    {
      title: "My Learning Path at ISTAD",
      date: "2026-02-15",
      category: "Journey",
      excerpt:
        "From Web Development Fundamentals to Full Stack to Spring Microservices — how each course built on the last.",
      content: [
        "My journey at ISTAD started with the Web Development Fundamental course. The main skills were Java and React — we learned OOP, data structures, databases, and built our way up to creating web applications.",
        "Then came the Full Stack Web Development course, which was a big step up. The main skills were Spring Boot and Next.js. This is where we learned to build real production-grade applications — REST APIs, authentication, database design, and connecting everything together. The final project for this course was Endora, our Backend-as-a-Service platform.",
        "Building Endora with my team was the turning point. It wasn't just a homework assignment — it was a real product with features like a visual schema designer, AI-powered web scraping, auto-generated API docs, and OAuth authentication. It pushed me to think about architecture, user experience, and teamwork in a way that smaller projects never did.",
        "Now I'm in the ITP Program studying Spring Microservices. It's a whole different level — API gateways, service discovery, distributed systems, and container orchestration. Understanding how large-scale systems are broken into independent services that communicate with each other has completely changed how I think about software.",
        "Each course built on the last. Java fundamentals made Spring Boot click. Spring Boot made microservices understandable. And along the way, side projects like LineupLab kept me building things outside of class. This portfolio itself is a micro-frontend architecture experiment — because the best way to learn is to build.",
      ],
    },
  ];

export type Post = (typeof posts)[number];