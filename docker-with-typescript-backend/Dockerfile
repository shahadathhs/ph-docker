FROM node:22

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

# VOLUME ["/app/logs"]

RUN pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "run", "dev"]