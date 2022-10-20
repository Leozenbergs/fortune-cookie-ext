async function fetchMessage() {
  try {
    document.getElementById('message').innerHTML = `Loading ...`
    const { quote, by } = await (await fetch('https://pquotes.p.rapidapi.com/api/quote', {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3f14ce5c0emshe6cc8a704aa095cp198806jsnf3069c63d10b',
        'X-RapidAPI-Host': 'pquotes.p.rapidapi.com'
      },
      method: 'POST',
      body: JSON.stringify({"topic":"fun"})
    })).json()

    document.getElementById('message').innerHTML = `"${quote}"`
    document.getElementById('author').innerHTML = `By: "${by}"`
  } catch (err) {
    console.log(err);
  }
}

fetchMessage();