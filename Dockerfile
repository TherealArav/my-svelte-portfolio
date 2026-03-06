# ==========================================
# STAGE 1: The Build Environment
# ==========================================
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy your package files and install ALL dependencies (including Tailwind/Vite)
COPY package*.json ./
RUN npm ci

# Copy the rest of your project files
COPY . .

# Build the SvelteKit application
RUN npm run build

# Remove development dependencies so they don't bloat the final image
RUN npm prune --production

# ==========================================
# STAGE 2: The Production Environment
# ==========================================
FROM node:20-alpine

WORKDIR /app

# Copy ONLY the compiled build and production modules from Stage 1
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Set the environment to production
ENV NODE_ENV=production

# SvelteKit Node adapter defaults to port 3000
EXPOSE 3000

# Start the server
CMD ["node", "build"]