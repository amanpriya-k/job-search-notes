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
  
  ## DNS - Domain Name Service
  - how does the user find your server?
    - your ip address is like your phone # or street address
    - your domain name is like your nickname or contact name 
  - kind of like 411, it looks up the correct IP address for you for a specific domain, and sends you there
  - to get to google, you type www.google.com and it gets sent to the DNS which gives the ip address and you are sent there
  - your computer is hardcode configured the IP address of the DNS - 8.8.8.8
  - google, att, comcast, and other internet service providers own their own versions of DNS
  - *CNAME*: one domain name to another domain name
  - *ANAME*: domain name to ip address

## Bottlenecks & Load Balancers
  - Usually the first bottleneck is the DB
  - you can have load balancers sending traffic to different servers
  - but they all hit the same database
  - NGINX (a load balancer) has a gatekeeper that can blacklist certain IP addresses if somebody sends too many requests