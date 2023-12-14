# Two-Factor Authentication POC with Twilio Integration

## Overview

This Proof of Concept (POC) demonstrates a basic implementation of a two-factor authentication (2FA) system using Twilio's API. The application follows a monorepo structure managed by Lerna and employs the sidecar pattern. The main application is built with Next.js, TypeScript, and SQLite, while the sidecar is a separate Node.js application that interacts with the Twilio SDK.

### Main Application (Next.js + TypeScript + SQLite)

The main application utilizes the Next.js app router and incorporates the NextAuth library v5 for streamlined authentication processes.

### Sidecar Application (Node.js + Twilio SDK)

The sidecar application, developed from scratch with Node.js, integrates with the Twilio SDK to handle the 2FA authentication.

## Setup

1. Clone the repository.

2. Navigate to the root directory and run `yarn` to install dependencies.

3. Create a new `.env` with the necessary values, you can use the `.env.example` file as a guide

4. Run both applications

```bash
yarn start
```

## Todo/Improvements

While this POC provides a functional 2FA system, several improvements could enhance its robustness:

1. Implement unit and integration testing for various authentication scenarios.
2. Refactor styles for better reusability, considering integration with Tailwind CSS.
3. Explore additional security measures for the Next.js application.
4. Optimize database queries and consider alternative database solutions for scalability.
