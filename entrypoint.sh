#!/bin/sh
set -e

echo "[entrypoint] Applying Prisma schema (db push)..."
n=0
until ./node_modules/.bin/prisma db push --skip-generate; do
  n=$((n + 1))
  if [ "$n" -ge 10 ]; then
    echo "[entrypoint] ERROR: could not reach database after 10 attempts" >&2
    exit 1
  fi
  echo "[entrypoint] Database not ready, retrying in 5s... (attempt $n/10)"
  sleep 5
done

if [ "$RUN_SEED" = "true" ]; then
  echo "[entrypoint] Seeding database..."
  npm run db:seed
fi

echo "[entrypoint] Starting Next.js..."
exec npm run start