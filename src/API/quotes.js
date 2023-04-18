export default function getQuotes() {
    return fetch("https://type.fit/api/quotes") // fetch quotes in JSON
        .then(response => response.json());
}