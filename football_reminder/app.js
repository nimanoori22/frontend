ui = new UI()

async function getMatches() {
    const response = await fetch('http://127.0.0.1:5000/');
    const data = await response.json();

    return data;
}

getMatches().then(matchs => ui.showMatch(matchs))