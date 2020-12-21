FROM node:12-alpine

WORKDIR /app

# copy files and install dependencies
COPY . ./
RUN yarn install
RUN yarn run build

CMD ["yarn", "start"]
