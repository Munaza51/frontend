# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use an official Nginx image to serve the React app
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
