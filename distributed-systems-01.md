# Distributed Systems 1

## Simplest way to deploy application
  - Heroku running 1 dyno

    - it basically rents servers from amazon to run your site
    - EC2 is when you rent a computer in their center
    - that's what heroku uses
    - your code is run there on one of those computer
    - "machine", "instance", "box" are physical machines that run code

  - You're going to have to run several servers on this instance 
    - it run's the db server, and the rails app server as well which is a client to the db server
    - the rails app is also a server, and the user is the client to it
    - puma: an http server (also being run)
      - this takes http requests and passes it to rails in a parseable way
      - it also sends info from rails back as an http response
  
  ## DNS
  
    - how does the user find your server?
      - 