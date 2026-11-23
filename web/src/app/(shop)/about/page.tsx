import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Heart,
  Leaf,
  Sparkles,
  Gem,
  HandHeart,
} from "lucide-react";

const journey = [
  {
    title: "The Fibre",
    image: "/images/journey-01-cotton-fibre.jpg",
    alt: "Cotton fibres ready for textile making",
    text: "A beautiful textile begins with its fibres. Cotton and silk bring their own textures, character and feel to the fabric.",
  },
  {
    title: "The Spinning",
    image: "/images/journey-02-yarn-spinning.jpg",
    alt: "Traditional spinning wheel and yarn",
    text: "Fibres are spun into yarn, preparing the threads that will become the foundation of a woven creation.",
  },
  {
    title: "The Dyeing",
    image: "/images/journey-03-yarn-dyeing.jpg",
    alt: "Yarn being dyed in a rich colour",
    text: "Colour gives each textile its expression, from vibrant festive shades to soft, understated tones.",
  },
  {
    title: "The Warping",
    image: "/images/journey-04-warping-threads.jpg",
    alt: "Colourful warp threads arranged on a loom",
    text: "Threads are carefully arranged on the loom, creating the structure that guides the weaving process.",
  },
  {
    title: "The Weaving",
    image: "/images/journey-05-hand-weaving.jpg",
    alt: "Artisan hands weaving fabric on a handloom",
    text: "Warp and weft meet through the rhythm of the loom, bringing patterns, borders and textures to life.",
  },
  {
    title: "The Finished Saree",
    image: "/images/journey-06-finished-saree.jpg",
    alt: "Finished traditional silk saree",
    text: "The finished saree brings together colour, detail and the beauty of the weaving journey.",
  },
];

const values = [
  {
    icon: Flower2,
    title: "Heritage",
    text: "Celebrating the rich legacy and diversity of Indian handloom.",
  },
  {
    icon: HandHeart,
    title: "Craftsmanship",
    text: "Recognising the skill, patience and artistry behind every weave.",
  },
  {
    icon: Leaf,
    title: "Authenticity",
    text: "Appreciating textiles for their character, texture and traditional inspiration.",
  },
  {
    icon: Gem,
    title: "Timeless Style",
    text: "Choosing graceful designs that feel beautiful across generations.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f8f0e6] text-[#351e23]">
      {/* HERO */}
      <section className="relative isolate min-h-[540px] overflow-hidden bg-[#351820] md:min-h-[620px]">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[250px]">
            <Image
              src="/images/about-hero-woman.jpg"
              alt="Woman wearing a traditional silk saree"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/images/about-handloom-texture.jpg"
              alt="Close-up of traditional silk and zari textile"
              fill
              priority
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#351820]/35 via-[#351820]/85 to-[#351820]/80" />
        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center justify-center px-6 py-20 text-center md:min-h-[620px]">
          <div className="max-w-3xl text-[#fffaf2]">
            <div className="mb-6 flex items-center justify-center gap-3 text-[#e3c18e]">
              <span className="h-px w-12 bg-[#c69b5d]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                The AARANYA Story
              </span>
              <span className="h-px w-12 bg-[#c69b5d]" />
            </div>
            <h1 className="font-serif text-5xl font-semibold tracking-[0.12em] sm:text-6xl md:text-7xl">
              AARANYA
            </h1>
            <p className="mt-4 font-serif text-3xl italic text-[#e3c18e] sm:text-4xl md:text-5xl">
              The Art of Handloom
            </p>
            <Flower2 className="mx-auto my-7 text-[#e3c18e]" size={30} />
            <p className="mx-auto max-w-2xl text-sm leading-8 text-[#fff3e7] sm:text-base">
              A celebration of India’s rich weaving heritage. Discover the
              beauty of handloom sarees, expressive colours and traditional
              artistry brought together with contemporary grace.
            </p>
            <Link
              href="/collections"
              className="mt-9 inline-flex items-center gap-3 bg-[#e3c18e] px-8 py-4 text-xs font-bold tracking-[0.16em] text-[#351820] transition hover:bg-white"
            >
              EXPLORE OUR COLLECTIONS <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR BEGINNING */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#bd965d]" />
            <div className="relative aspect-[5/3] overflow-hidden">
              <Image
                src="/images/about-village-weaving-house.jpg"
                alt="Traditional weaving house in an Indian village"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="absolute -bottom-4 right-5 bg-[#632d35] px-5 py-3 font-serif italic text-white">
              Inspired by our roots
            </p>
          </div>
          <div className="lg:pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47748]">
              Our Beginning
            </p>
            <h2 className="mt-4 font-serif text-4xl italic leading-tight text-[#632d35] md:text-5xl">
              Rooted in Our Heritage
            </h2>
            <div className="my-6 h-[2px] w-20 bg-[#b58a50]" />
            <p className="text-[15px] leading-8 text-[#66574e]">
              AARANYA is inspired by a deep appreciation for India’s handloom
              legacy and the artistry behind traditional textiles. Across
              regions, weaving carries stories through distinctive patterns,
              colours, textures and techniques.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[#66574e]">
              We bring this inspiration into our collections, celebrating
              sarees that honour tradition while complementing the style
              and individuality of the woman who wears them.
            </p>
          </div>
        </div>
      </section>

      {/* INSPIRATION */}
      <section className="bg-[#efe3d4] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47748]">
              Our Inspiration
            </p>
            <h2 className="mt-4 font-serif text-4xl italic leading-tight text-[#632d35] md:text-5xl">
              The Beauty of Indian Handloom
            </h2>
            <div className="my-6 h-[2px] w-20 bg-[#b58a50]" />
            <p className="text-[15px] leading-8 text-[#66574e]">
              Inspired by the rich colours of our land, the motifs found in
              our culture and the stories woven through generations, AARANYA
              celebrates textiles with character and soul.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[#66574e]">
              From intricate borders to expressive patterns, every detail
              reminds us why handloom continues to hold a special place in
              Indian fashion.
            </p>
          </div>
          <div className="relative order-1 aspect-[16/9] overflow-hidden lg:order-2">
            <Image
              src="/images/about-handloom-texture.jpg"
              alt="Intricate silk saree weave and zari detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47748]">
              The Journey of a Handloom Saree
            </p>
            <h2 className="mt-4 font-serif text-4xl italic text-[#632d35] md:text-5xl">
              From Fibre to a Timeless Drape
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#806a5e] md:text-base">
              A closer look at the traditional stages that turn fibres and
              yarn into a beautiful woven textile.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {journey.map((step) => (
              <article key={step.title} className="group text-center">
                <div className="relative aspect-square overflow-hidden rounded-t-full bg-[#e5d5c3]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl text-[#632d35]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#806a5e]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#efe3d4] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47748]">
              Our Values
            </p>
            <h2 className="mt-4 font-serif text-4xl italic text-[#632d35] md:text-5xl">
              What AARANYA Stands For
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="px-5 py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a16c] bg-[#fff9f0] text-[#632d35]">
                    <Icon size={30} strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[#632d35]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#806a5e]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative isolate overflow-hidden bg-[#351820]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-closing-sarees.jpg"
            alt="A collection of richly coloured traditional silk sarees"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#351820]/95 via-[#351820]/80 to-[#351820]/25" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
          <div className="max-w-2xl text-white">
            <Sparkles size={32} className="text-[#e3c18e]" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#e3c18e]">
              AARANYA Promise
            </p>
            <h2 className="mt-5 font-serif text-4xl italic leading-tight md:text-6xl">
              A Legacy Woven Forward
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#f1e4d9] md:text-base">
              At AARANYA, we continue to celebrate the stories, skills and
              traditions that make Indian handloom truly special. Thank you
              for being part of a story woven with culture, creativity and
              timeless elegance.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-3 bg-[#e3c18e] px-7 py-4 text-xs font-bold tracking-[0.15em] text-[#351820] transition hover:bg-white"
              >
                EXPLORE OUR COLLECTIONS <ArrowRight size={17} />
              </Link>
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center gap-3 border border-[#e3c18e] px-7 py-4 text-xs font-bold tracking-[0.15em] text-white transition hover:bg-[#e3c18e] hover:text-[#351820]"
              >
                GET IN TOUCH <Heart size={16} />
              </Link>
            </div>
            <p className="mt-12 font-serif text-lg italic text-[#e3c18e]">
              AARANYA · The Art of Handloom
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
