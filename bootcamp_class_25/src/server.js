// src/server.js
import { createServer } from "miragejs";
import books from './json/books.json'

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({

        routes() {
            this.namespace = "api";

            this.get("/books", (schema) => {
                return books;
            });

            this.post("/add", (schema, req) => {
                console.log(req)
                const newBook = JSON.parse(req.requestBody);
                books.push(newBook)
            });

        },
    });

    return server;
}
