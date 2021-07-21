# build environment 
FROM node: lts-alpine

# Set working directory 
WORKDIR /usr/src/app

# Copy the app package and package-lock.json file
COPY package.json ./
COPY package-lock.json ./

#install node packages
RUN npm install --silent

# Copy app
COPY . ./

# Build app 
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy build artifacts to production env to be served by nginx
COPY -from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Run nginx within container w/o haulting
CMD ["nginx", "-g", "daemon off;"]