# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a smaller, lightweight base image for serving the application
FROM nginx:alpine

# Copy the built app from the builder stage to the nginx container
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start the nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
