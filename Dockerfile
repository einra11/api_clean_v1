FROM node:9-slim
WORKDIR /app
COPY package.json /app


# ENV HTTP_PROXY=http://192.168.36.35:3128 
# ENV HTTPS_PROXY=http://192.168.36.35:3128

RUN npm config set proxy http://192.168.36.35:3128
RUN npm config set https-proxy http://192.168.36.35:3128

RUN npm install

COPY . /app


CMD ["npm", "start"]