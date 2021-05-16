FROM node:12-alpine

WORKDIR /app

# install
COPY package.json /app
COPY yarn.lock /app
RUN ["yarn", "install"]

# copy files and build
COPY . /app
RUN ["yarn", "build"]

CMD ["yarn", "start"]
