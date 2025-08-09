# Gunakan Node 20
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json dan lockfile dulu untuk caching dependency
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies (pakai npm, yarn, atau pnpm sesuai project)
RUN npm install

# Copy semua file project
COPY . .

# Build Next.js
RUN npm run build

# Stage produksi
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy hasil build dan file yang dibutuhkan untuk runtime
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port Next.js
EXPOSE 3000

# Jalankan Next.js
CMD ["npm", "start"]
