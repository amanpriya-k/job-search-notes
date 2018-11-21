# RESTful APIs

Rest stands for Representational State Transfer. It is a set of design principles that makes network communication more scalable and flexible. 

It is defined by the Fielding constraints:

### Client-Server
This constraint specifies that the network has to be made of clients and servers. Server: a computer that has resources of interest. Client: a computer that wants to interact with the resources stored on the server. 

### Stateless
It doesn't mean the client and server can't have states. It means they do not keep track of one another's states. When they are not interacting, they have no idea of one anothers existences.

### Uniform Interface 
This constraint ensures that there is a common language between servers and clients - it has 4 sub-constraints:
  - **identification of resources:** each resource must be uniquely identified by stable identifier
  - **manipulation of resources through representations:** this means the client manipulates resources through sending representations of the object to the server, like JSON objects containing the content to be modified.
  - **self descriptive messages:** an example of this is server responses like the 200-500 codes and messages. 
  - **hypermedia:** this word means data send from the server to the client that contains information about what the client can do next, like what further requests it can make. 
  

  ## Summary:

REST is the underlying architectural principle of the web. The amazing thing about the web is the fact that clients (browsers) and servers can interact in complex ways without the client knowing anything beforehand about the server and the resources it hosts. The key constraint is that the server and client must both agree on the media used, which in the case of the web is HTML.

An API that adheres to the principles of REST does not require the client to know anything about the structure of the API. Rather, the server needs to provide whatever information the client needs to interact with the service. An HTML form is an example of this: The server specifies the location of the resource and the required fields. The browser doesn't know in advance where to submit the information, and it doesn't know in advance what information to submit. Both forms of information are entirely supplied by the server. (This principle is called HATEOAS: Hypermedia As The Engine Of Application State.)