FROM node:18.15.0-alpine

# https://bitbucket.org/site/master/issues/16334/pipelines-failing-with-could-not-get-uid
# https://github.com/npm/npm/issues/20861


# RUN [ "mkdir", "-p", "/usr/src" ]

WORKDIR /usr/src

COPY package.json /usr/src/
COPY package-lock.json /usr/src/
COPY tsconfig.json /usr/src/
COPY .env /usr/src/


RUN [ "npm", "install" ]

COPY . /usr/src

RUN [ "npm", "run"]

EXPOSE 3000

# ENV NODE_ENV=production
CMD [ "npm", "run", "start" ]
