const deitails = [
  {
    id: 1,
    title: "Watch any time everywhere.",
    text: "Four loko gluten-free listicle, live-edge put a bird on it aesthetic 3 wolf moon DIY heirloom semiotics.",
    url: 'url("../imgs/deitails1.jpg")',
  },
  {
    id: 2,
    title: "Alone or with the family.",
    text: "live-edge put a bird on it aesthetic 3 wolf moon DIY heirloom semiotics, Four loko gluten-free listicle.",
    url: 'url("../imgs/deitails2.jpg")',
  },
];

export function getDeitail(id) {
  return deitails.find((d) => d.id === id);
}
