# Restaurant reservations

*The service provides an opportunity to book tables in the restaurant. The hotel manager can register his restaurant and add tables and a scheme to the database. Users can book tables for a specific date and time. The manager also has the opportunity to book tables at his discretion. It should also be possible to write reviews for individual restaurants.**

---

#Launch guidelines
1. run rabbitmq: `docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management`
2. go to main folder `cd restaurant`
5. run email-service: `node email-service/src/index.js`
3. run mongo
4. run postgres
6. run project: `node project/src/index.js`
