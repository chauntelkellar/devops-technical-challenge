#base environment
FROM ruby:2.6.6

# Install dependencies 
RUN apt-get update -yqq \
    && apt-get install -yqq\
    apt-utils\
    nodejs\
    postgresql-client \
    libpq-dev

# Set working directory
WORKDIR /usr/src/app

#Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

RUN gem install bundler -v1.17.2\
    && bundle install

# Copy app
COPY . .

#expose port 3000 for Rails
EXPOSE 3000


# create entry point files and make executable
COPY ./dev-docker-entrypoint.sh /usr/local/bin/dev-docker-entrypoint.sh
RUN chmod +x /usr/local/bin/dev-docker-entrypoint.sh
ENTRYPOINT ["dev-docker-entrypoint.sh"]

#start rails
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
