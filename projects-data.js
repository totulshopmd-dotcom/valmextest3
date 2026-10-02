/* =====================================================================
   VALMEX.MD — BAZA DE DATE PROIECTE (Portofoliu)
   =====================================================================
   Adaugi/modifici proiecte aici. La fel ca la products-data.js — nu ai
   nevoie de cod, doar copiezi un bloc { ... } și schimbi valorile.

   CÂMPURI:
   id          - cod unic, fără spații
   category    - "Acoperișuri" / "Fațade" / "AMK" / "Pavaj" (poți adăuga altă categorie)
   location    - localitatea proiectului (ex: "Chișinău")
   title       - titlul proiectului
   description - descriere scurtă (1-2 propoziții)
   images      - LISTĂ de poze. Poți pune UNA singură, sau MAI MULTE —
                 dacă pui mai multe, pe site apare un rând de thumbnail-uri
                 sub poza mare, pe care vizitatorul le poate apăsa ca să
                 schimbe imaginea principală (exact ca la fatade3d.md).
   ===================================================================== */

const PROJECTS = [
  {
    id: "gard-telenesti-1",
    category: "Garduri",
    location: "Telenești",
    title: "Gard Telenești",
    description: "Transformare completă de gard — de la schița stabilită cu clientul, până la rezultatul final. Un rezultat care merită așteptarea.",
    images: [
      "https://i.ibb.co/Fk0sXQd6/Proiect-gard-Telenesti-dupa.jpg",
      "https://i.ibb.co/362CVVd/Proiect-Gard-Telenesti-inainte.jpg",
      "https://i.ibb.co/6RTbZ8NX/Proiect-Telenesti-gard-Rezultatul-proiectului.jpg",
      "https://i.ibb.co/Q7VjgMxx/Proiect-telenesti-gard-2.avif",
      "https://i.ibb.co/WpHRvWyN/Proiect-gard-Telenesti-3.avif",
      "https://i.ibb.co/ZpYfBtsF/Proiect-Gard-Telenesti-5.avif",
      "https://i.ibb.co/20NbTnwy/Proiect-Gard-Telenesti-Schita-Clientului.jpg"
    ]
  },
  {
    id: "acoperis-negureni-1",
    category: "Acoperișuri",
    location: "Negureni",
    title: "Acoperiș Negureni",
    description: "Montaj complet acoperiș metalic — transformare completă, de la structura veche până la finisajul final.",
    images: [
      "https://i.ibb.co/TM5jnQjs/Acoperis-Negureni-dupa-editat.jpg",
      "https://i.ibb.co/jPCFfSLZ/Acoperis-negureni-pina-la.jpg"
    ]
  },
  {
    id: "acoperis-chisinau-1",
    category: "Acoperișuri",
    location: "Chișinău",
    title: "Acoperiș Premium",
    description: "Montaj complet acoperiș din țiglă metalică Dakia cu finisaj antracit. Suprafață 180 m².",
    images: ["https://i.ibb.co/XfbsDsQg/Acoperis-finisat2.png"]
  },
  {
    id: "acoperis-balti-1",
    category: "Acoperișuri",
    location: "Bălți",
    title: "Acoperiș Modern",
    description: "Acoperiș din țiglă metalică Melano cu finisaj modern. Suprafață 220 m².",
    images: ["https://www.presshub.ro/wp-content/uploads/2024/09/RoofArt-acoperisuri-din-tigla-metalica.jpg"]
  },
  {
    id: "acoperis-orhei-1",
    category: "Acoperișuri",
    location: "Orhei",
    title: "Acoperiș Elegant",
    description: "Design sofisticat cu țiglă metalică Florenția. Suprafață 150 m².",
    images: ["https://www.mihu-steel.ro/wp-content/uploads/2019/10/Germania-Simetric-Plus-Detalii-5.jpg"]
  },
  {
    id: "acoperis-cahul-1",
    category: "Acoperișuri",
    location: "Cahul",
    title: "Acoperiș Rezistent",
    description: "Configurație profilată pentru distribuire uniformă a sarcinilor. Suprafață 200 m².",
    images: ["https://www.mihu-steel.ro/wp-content/uploads/2019/10/Germania-Simetric-Plus-Detalii-2.jpg"]
  },
  {
    id: "amk-chisinau-1",
    category: "AMK",
    location: "Chișinău",
    title: "Fațadă AMK",
    description: "Montaj panouri AMK Mix 200. Aspect premium de marmură naturală. Suprafață 300 m².",
    images: ["https://i.ibb.co/mrnmsNR6/Fatade-AMK-proiect-finisat-5.jpg"]
  },
  {
    id: "fatada-ungheni-1",
    category: "Fațade",
    location: "Ungheni",
    title: "Fațadă Decorativă",
    description: "Tencuială siliconată decorativă cu termoizolație. Suprafață 250 m².",
    images: ["https://i.ibb.co/Cp1XsLy8/file-00000000175471f4aad6bcf08160e2a1.png"]
  },
  {
    id: "amk-soroca-1",
    category: "AMK",
    location: "Soroca",
    title: "Proiect AMK",
    description: "Panouri AMK Mono 001 pentru o vilă modernă. Suprafață 180 m².",
    images: ["https://i.ibb.co/r2XyBcN6/IMG-20260713-214057-443.jpg"]
  },
  {
    id: "amk-comrat-1",
    category: "AMK",
    location: "Comrat",
    title: "Proiect AMK",
    description: "Montaj rapid panouri AMK Mix 241. Suprafață 220 m².",
    images: ["https://i.ibb.co/b5sQDBVz/IMG-20260713-214227-481.jpg"]
  },
  {
    id: "pavaj-chisinau-1",
    category: "Pavaj",
    location: "Chișinău",
    title: "Pavaj Curte",
    description: "Amenajare curte cu pavaj Arka 20×20. Suprafață 120 m².",
    images: ["https://movipavaje.md/storage/products/01KKQDKA5WYB78SHEJ82ECK5PR.png"]
  }
];
