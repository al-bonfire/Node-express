FROM node

WORKDIR /usr/app

COPY package.json /usr/app/

RUN yarn install

COPY . . 

EXPOSE 5000

CMD ["yarn", "start"]