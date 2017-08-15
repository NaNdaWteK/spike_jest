FROM node:latest

RUN apt-get update

ENV HOME=/opt/test/jest

RUN mkdir -p $HOME
ADD . $HOME
WORKDIR $HOME
