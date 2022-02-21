FROM node:16-alpine

ARG NETLIFY_API_KEY
ARG NETLIFY_SERVICE_ID

RUN apk add --no-cache \
      autoconf \
      automake \
      libtool \
      make \
      python3 \
      g++ \
      vips-dev \
      fftw-dev \
      nasm \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

WORKDIR /app

RUN yarn global add gatsby-cli
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 8000
CMD [ "yarn", "dev" ]
