import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = [
  "Μοναδικές συσκευές, σύγχρονη τεχνολογία, έξυπνες λύσεις, αξιοπιστία",
  "Κορυφαία τεχνολογία, καινοτομία, ποιότητα, ασφάλεια, επιλογές",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>GA.TA</h1>
      <p>{description}</p>
    </header>
  );
}
