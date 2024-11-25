#!/bin/bash
echo "Waiting for PostgreSQL..."
until pg_isready do
  sleep 2
done

echo "PostgreSQL ready. initialization..."
psql -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/schema.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/data.sql

echo "Initialization complete."
exec postgres