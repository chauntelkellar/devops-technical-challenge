#base environment
FROM ruby:2.6.6

#set environment variables 
ENV APP_PATH /var/app
ENV BUNDLE_VERSION 1.17.2
ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/ 
ENV RAILS_PORT 3000

# Install dependencies 
RUN apt-get update -yqq \
    && apt-get install -yqq\
    nodejs\
    postgresql-client \
    libpq-dev \
    && mkdir -p $APP_PATH

# Set working directory
WORKDIR $APP_PATH

#Copy Gemfile and Gemfile.lock
COPY Gemfile* ./

RUN gem install bundler:$BUNDLE_VERSION \
    && bundle install

# Copy app
COPY . .

#expose port 3000 for Rails
EXPOSE $RAILS_PORT


# create entry point files and make executable
COPY ./dev-docker-entrypoint.sh /usr/local/bin/dev-entrypoint.sh
COPY ./test-docker-entrypoint.sh /usr/local/bin/test-entrypoint.sh
RUN chmod +x /usr/local/bin/dev-entrypoint.sh && chmod +x /usr/local/bin/test-entrypoint.sh

ENTRYPOINT ["bundle, "exec"]
