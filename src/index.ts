import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import {userRouter} from "./router/users.ts";

const app = new Hono()

app.route('/', userRouter)

app.get('/', (c) => {
    return c.text('Hello Hono!')
})


serve({
    fetch: app.fetch,
    port: 3000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})
