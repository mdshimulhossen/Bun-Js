
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
        return new Response ("404 Not Found")
        
        
    }
});

console.log(`Listenig on PORT http://localhost:${server.port}`);

