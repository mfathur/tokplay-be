# **Tokopedia Play Clone - Backend**

Developed by GG3FSGP0426_Muhammad Fathurrohman

This is a clone of the Tokopedia Play app for Generasi Gigih 3.0 final project. This repo consists of a backend application built with NodeJS Express and MongoDB as its database. Both the app and the database are containerized using docker.

## **Requirement**

- Docker and docker compose. If you haven't installed these yet, you can follow the instruction [here](https://docs.docker.com/compose/install/)

## **Database structure**

![final-project-db-diagram](https://github.com/mfathur/tokplay-be/assets/54427272/a693356d-0f25-4d9c-872f-65a0cb7116e4)

## **API Structure**

| Name                                                                                     | Endpoint                  |
| ---------------------------------------------------------------------------------------- | ------------------------- |
| <span style="background-color:orange">POST</span> Login                                  | /auth/login               |
| <span style="background-color:orange">POST</span> Register                               | /auth/register            |
| <span style="background-color:green">GET</span> All videos                               | /videos?keyword           |
| <span style="background-color:green">GET</span> Video comments                           | /videos/:videoId/comments |
| <span style="background-color:orange">POST</span> Comment on video (need JSON Web Token) | /videos/:videoId/comments |
| <span style="background-color:green">GET</span> All products                             | /products?relatedVideoId  |

## **API Documentation**

You can download this [file](https://drive.google.com/file/d/1LsUyM3Phk5-zZF-jM4URsXDIKyUmSdnR/view?usp=sharing). Then, you can import the file into postman to view the documentation of each API endpoints. If you still have no idea on how to import the file to postman, you can follow the instruction [here](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-data/).

## **How to run locally**

### **1. Create `.env` file in root directory and copy the snippet below**

```
JWT_SECRET_KEY=5e8d400383c9a274eb1c74bc16025c30eb1098a52408b29eded5898dd252c1010efa0b5c3b0e5761558ebeef706ddcb36897db545f0ff0addacc55559ac463e4
```

### **2. Run docker compose**

First, you need to go to `local` directory by the command below using command line.

```
cd local
```

Then, execute the command below to build containers and start the app.

```
docker compose up -d
```

**Note**: If you're using linux, you may need to use `sudo` at the beginning of the command.

### **3. Populate data**

First, you need to go to `getting-started` directory by the command below.

```
cd getting-started
```

Then, you copy `tokplaydb` folder to mongodb container.

```
docker cp ./tokplaydb local-tokplay-mongo-1:/dump/
```

**Note**: If you're using linux, you may need to use `sudo` at the beginning of the command.

Next, run the following command to import data to mongodb.

```
docker exec -it local-tokplay-mongo-1  mongorestore --db tokplaydb --verbose /dump/tokplaydb
```

**Note**: If you're using linux, you may need to use `sudo` at the beginning of the command.

### **4. It's all done**

Server is running, so you can open your browser and type this url to check.

```
http://localhost:8080/
```
