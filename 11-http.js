 const http=require('http');

 const server=http.createServer((request,response)=>{
  if(request.url==='/'){
      response.end('Welcome to out Home Page')
  }
  if(request.url==='/about'){
      response.end('About Us')
  }
  response.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you're looking for</p>
   <a href="/">Back Home</a>
  `)
  
 })

 server.listen(4000)