export async function passcall() {
    
    try {
      
      const body = JSON.stringify({
        "room": "string",
        "passcode": "string" 
      })
      log(body)
      const response = await fetch("http://20.220.216.111/api/validate/room", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      })
      log(response)
      return response.json()

    } catch (e) {
      log('error posting to server ', e)
    }
  }
