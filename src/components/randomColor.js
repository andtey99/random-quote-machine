export default function randomColor() {
    return Array(3).fill(0).map( elem => elem = Math.floor(Math.random() * 256));
}