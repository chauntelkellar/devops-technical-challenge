#!/bin/bash

set -e

rm -f /usr/src/app/pids/server.pid
mkdir -p /usr/src/app/tmp/pids
touch /usr/src/app/tmp/pids/server.pid


# Initialize and seed database
bundle exec rake db:setup

# Execute defualt instruction
exec bundle exec "$@"