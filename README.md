# Parlez Vous – A Language Learning Proof of Concept

**Parlez Vous** is a proof of concept for a language learning app for schools focusing on French. The goal is to combine the best aspects learning grammar and vocabulary with the study tools of platforms like Duolingo and Quizlet. Although this apps focuses on French, the long-term vision is to support multiple langauges such as Spansih and German, with expansion planned for the future.

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Project Timeline](#project-timeline)
- [Features](#features)
- [Learn More](#learn-more)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Technologies

This project uses the following technologies:

- **Next.js**: A React-based framework that enables server-side rendering and static web application generation.
- **Firebase**: Used for user authentication.
- **JSON**: Temporary storage for French verb conjugations during the proof of concept phase.
- **Google Cloud SQL (PostgreSQL)**: Planned for future data storage and scalability.
- **Contenful**: Used for content management.
- **Tailwind CSS**: For styling and responsive design.

## Project Timeline

- **Phase 1**: Proof of concept focusing on French grammar and conjugations, built with JSON files and Firebase (soon) for user authentication.
- **Phase 2**: Transition to Firebase/Google Cloud SQL for database management and scalability. 
- **Phase 3**: Expand app features to include quizzes, grammar explanations, and other study tools.

## Features

- **Verb Conjugation**: Focus on mastering regular and irregular French verbs in key tenses such as Présent, Passé Composé, Imparfait, Futur, and Subjonctif.
- **Grammar Focus**: Emphasis on French grammar, helping users practice more than just vocabulary.
- **User Experience**: Streamlined UI for easy navigation and tailored learning paths based on proficiency level.
- **Future Expansion**: Plans to support additional languages and advanced features like user quizzes and personalized learning paths.

## Learn More

### To learn more about the technologies being used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase
- [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres) - learn more about Cloud SQL for PostgreSQL
- [Contentful Documentation](https://www.contentful.com/developers/docs/) - learn about Contentful a headless CMS

### To learn more about the project

- Contact Brandon Chan at Brandon.chan0216@gmail.com for business inquiries, questions, or concerns.