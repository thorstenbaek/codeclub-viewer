FROM node:10.16.0-alpine

RUN apk update
RUN apk add git
RUN apk add python3
RUN apk add py3-pip

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN echo $(node -v)

RUN yarn

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
COPY ./oppgaver ../oppgaver

EXPOSE 8080

ENV TZ=Europe/Oslo
ENV IN_CONTAINER=1

CMD [ "yarn", "start" ]
