const sock = new WebSocket('ws://localhost:8080/api')

sock.onopen = () => {
	console.log('connected')
}

sock.onmessage = event => {
	console.log(event.data)
}

sock.onclose = () => {
	console.log('disconnected')
}
