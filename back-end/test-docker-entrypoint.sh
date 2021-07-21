#!/bin/sh

set -e

echo "Environment: $RAILS_ENV"

# Check if we need to install new gems
bundle check || bundle install 

# Then run any passed command
bundle exec ${@}