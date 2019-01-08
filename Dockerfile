FROM node:10-alpine

# Create a working directory where the application resides
WORKDIR /app

# Copy the package.json
COPY package*.json .

# Install all the application dependencies
RUN yarn install

# Copy all the files and folders to container
COPY . .

# Expose the port from the container
EXPOSE 3000
EXPOSE 443

# Start the container
CMD ["yarn", "start"]