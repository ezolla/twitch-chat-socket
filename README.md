<p align="center">
  <a href="https://storybook.js.org/">
    <img src="https://i.imgur.com/rGFLNpU.png" alt="Twitch" width="125" />
  </a>
</p>

<p align="center"><b>Mock Twitch chat socket server</b></p>

<br/>

## Project Inspiration

This project was inspired after watching a [React mock interview](https://www.youtube.com/watch?v=uqII0AOW1NM) by [Theo](https://twitter.com/t3dotgg) with [Dan Abramov](https://twitter.com/dan_abramov). In this mock interview, Theo has created a socket server that replicates Twitch chat messages and challenges Dan to build the frontend in React to handle incoming messages in a chat-like interface. This sparked my interested in [socket.io](https://socket.io/), so I decided to replicate the server.

## Example Client Connection

Connects to chat server using socket running on port 4000.

```
const connectTwitchChat = () => {
  const socket = io('http://localhost:4000')

  socket.onAny((type, message) => console.log(type, message))

  return socket
}

useEffect(() => {
  const socket = connectTwitchChat()

  return () => {
    socket.disconnect()
  }
}, [])
```
