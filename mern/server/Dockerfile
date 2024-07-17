FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ARG ATLAS_URI
ARG PORT

ENV ATLAS_URI=${ATLAS_URI}
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["node", "server.js"]