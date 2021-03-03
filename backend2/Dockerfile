FROM python:3.7

WORKDIR /api2
USER root

RUN pip install fastapi uvicorn[standard] -i https://pypi.douban.com/simple

COPY . .