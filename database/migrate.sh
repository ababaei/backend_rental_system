#!/bin/bash

MAX_RETRIES=40
RETRY_DELAY=10
PGPASSWORD=${POSTGRES_PASSWORD}

echo "Waiting for db to be ready..."

for ((i=1; i<=MAX_RETRIES; i++)); do
    if psql ${DATABASE_URL}; then
    # if psql -h ${DB_HOST} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -p 5432 -c = 0; then
        echo "Database is ready!"

        echo "Generating Prisma client..."
        npx prisma generate        
        echo "Running Prisma migrations..."
        npx prisma migrate deploy
        
        echo "Prisma generation and migrations complete"
        exit 0
    fi
    echo "Database not ready yet..."
    sleep $RETRY_DELAY
done

echo "Max retries reached. Database is still not ready. Exiting..."
exit 1