FROM node:14-alpine3.12
WORKDIR /home/node/app
RUN apk update && \
    apk add git yarn build-base autoconf automake libtool pkgconfig nasm && \
    yarn global add gatsby-cli && \
    gatsby options set package-manager yarn
EXPOSE 8000
