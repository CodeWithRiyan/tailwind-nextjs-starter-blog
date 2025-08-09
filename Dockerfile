# Gunakan Node.js 20 untuk build dan runtime
FROM node:20-alpine AS base

# Install dependency yang dibutuhkan untuk build (contoh: sharp untuk Next.js image optimization)
RUN apk add --no-cache libc6-compat

# Enable Corepack for proper Yarn version management
RUN corepack enable

# Set working directory
WORKDIR /app

# Salin package.json dan lockfile terlebih dahulu (untuk cache build yang efisien)
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Salin semua file project
COPY . .

# Pastikan NODE_ENV production
ENV NODE_ENV=production

# Build Next.js
RUN yarn build

# Stage runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Install dependency yang dibutuhkan untuk runtime Next.js
RUN apk add --no-cache libc6-compat

# Enable Corepack for runtime stage
RUN corepack enable

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Salin hanya file yang dibutuhkan untuk runtime
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Jalankan Next.js
CMD ["yarn", "start"]
