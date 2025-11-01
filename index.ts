
import figlet from "figlet";

const server = Bun.serve({
    port:3001,
    fetch(req){
        const url = new URL(req.url)
        if(url.pathname === "/"){
            const msg = figlet.textSync("HOLA")
            return new Response (msg)
        }
        if (url.pathname === "/about"){
            return new Response ("About Me")
        }
        if(url.pathname === "/contact"){
            return new Response ("Contact Us")
        }
        if (url.pathname === "/help"){
            throw new Error("Could not help you");
        }
        return new Response ("404 Not Found")
        
        
    },
    error(error){
        return new Response ("Custom Error Page: "+ error.message, {status:500})
    }
});

console.log(`Listenig on PORT http://localhost:${server.port}`);

