FROM mhart/alpine-node:6.10.0

LABEL Marcel Belmont "marcelbelmont@gmail.com"

ENV appDir /var/www/app

# Run updates and install deps
RUN apk add --no-cache make gcc g++ python

# Set the work directory
RUN mkdir -p /var/www/app
WORKDIR ${appDir}

ADD package.json ./
RUN npm install

# Install gulp so we can run our application
RUN npm i -g gulp nyc tape rimraf

# Add application files
ADD . /var/www/app

# Define mountable directories.
VOLUME ["/usr/local/var/lib/couchdb"]

CMD ["npm", "run", "dev"]
