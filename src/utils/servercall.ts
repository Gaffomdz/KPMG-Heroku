export async function passCall(passcode: string) {

  try {

    const body = JSON.stringify({
      "room": "string",
      "passcode": passcode
    })
    //log(body)
    const response = await fetch("https://20.220.216.111/api/validate/room", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    const json = await response.json()
    log(json)

    return json.access_granted

  } catch (e) {
    log('error posting to server ', e)
  }
}
