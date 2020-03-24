# Notes Simple App created by Saeed Murrad
A simple app that interacts with REST API to perform actions on Notes.

## Create ECR Repository

```bash
aws ecr create-repository --repository-name react-app-saeed --region us-east-2
```
## Get Login

```bash
aws ecr get-login-password | docker login --username AWS --password-stdin 097599994788.dkr.ecr.us-east-2.amazonaws.com
```

## Build Image from Docker

```bash
docker build -t react-app .
```

## Tag image created to ECR Repository with URI

```bash
docker tag react-app 097599994788.dkr.ecr.us-east-2.amazonaws.com/react-app-saeed
```


## Push created Image to ECR

```bash
docker push 097599994788.dkr.ecr.us-east-2.amazonaws.com/react-app-saeed
```

## Pull Image from ECR
Configure AWS CLI then get login after that run below command.
```bash
docker pull 097599994788.dkr.ecr.us-east-2.amazonaws.com/react-app-saeed
```

## Run React App Container

```bash
docker run -it -p 8080:80 097599994788.dkr.ecr.us-east-2.amazonaws.com/react-app-saeed
```


