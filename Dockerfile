# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files into the container
COPY . .

# Build the application
RUN npm run build --prod

# Expose port 80 for the web server to listen on
EXPOSE 80

# Start the web server
CMD ["npm", "start"]
