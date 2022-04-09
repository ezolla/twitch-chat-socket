import { Server, Socket } from 'socket.io'
import { messages, users } from './data'

// Create and start socket
const io = new Server(4000, { cors: { origin: '*' } })

// Handle connection event
io.on('connection', (socket: Socket) => {
  setInterval(() => {
    // Generate mock data (message & user)
    const message = messages[Math.floor(Math.random() * messages.length)]
    const user = users[Math.floor(Math.random() * users.length)]

    // Send chat message
    socket.emit('chat-message', {
      type: 'chat-message',
      body: message,
      user: user,
    })
  }, 10000) // 10 seconds

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
