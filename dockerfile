FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

FROM base AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run panda
RUN npm run build

FROM builder AS production
WORKDIR /app
RUN npm install --global pm2
RUN addgroup --system --gid 1003 obliviongroup
RUN adduser --system --uid 1003 oblivionuser
COPY --from=builder /app/public ./public
COPY --from=builder --chown=oblivionuser:obliviongroup /app/.next/standalone ./
COPY --from=builder --chown=oblivionuser:obliviongroup /app/.next/static ./.next/static
COPY --from=builder --chown=oblivionuser:obliviongroup /app/ecosystem.config.js ./
USER oblivionuser
ENTRYPOINT ["pm2-runtime", "start","ecosystem.config.js"]