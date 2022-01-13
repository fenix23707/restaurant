FROM rabbitmq:latest

COPY ./build/libs/enrichment-service-1.0-SNAPSHOT-all.jar /home/app.jar

EXPOSE

ENTRYPOINT ["java","-jar","/home/app.jar"]
