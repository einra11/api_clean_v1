FROM node:15-alpine
WORKDIR /app
COPY package.json /app
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN npm install
# RUN npm rebuild bcrypt --build-from-source
COPY . /app
CMD ["npm", "start"]