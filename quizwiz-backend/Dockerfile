FROM gradle:jdk21-alpine as builder

COPY --chown=gradle:gradle . /home/gradle/src

WORKDIR /home/gradle/src

RUN gradle build --no-daemon



FROM openjdk:21-jdk

COPY --from=builder /home/gradle/src/build/libs/*.jar quizwiz.jar

ENTRYPOINT ["java","-jar","/quizwiz.jar"]