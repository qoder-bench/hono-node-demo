import {Hono} from "hono";

export const userRouter = new Hono()

userRouter.get('/api/v1/users', (c) => {
    return c.json([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}])
})

userRouter.get('/api/v1/users/:id', (c) => {
    const id = parseInt(c.req.param('id'))
    return c.json({id: id, name: 'John Doe'})
})
