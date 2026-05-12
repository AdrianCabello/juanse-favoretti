# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build:ssr

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist/juanse-favoretti ./dist/juanse-favoretti
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

RUN mkdir -p dist/juanse-favoretti/browser && touch dist/juanse-favoretti/browser/.env

RUN npm ci --omit=dev

ENV PORT=4000

EXPOSE 4000
CMD ["node", "dist/juanse-favoretti/server/server.mjs"]
