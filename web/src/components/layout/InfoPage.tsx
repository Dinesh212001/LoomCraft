import Link from "next/link";

interface Section {
  heading: string;
  body: string[];
}

interface Props {
  title: string;
  subtitle: string;
  sections: Section[];
  /** Shown at the bottom for policy pages that the store owner must review. */
  draftNote?: boolean;
}

// Shared layout for Contact / Shipping / Returns / Privacy / Terms (Footer links).
export default function InfoPage({ title, subtitle, sections, draftNote = false }: Props) {
  return (
    <main className="min-h-[60vh] bg-[#fffdf9] px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#66574e]">
          <Link href="/" className="underline-offset-4 hover:text-[#632d35] hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#632d35]">{title}</span>
        </nav>

        <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">AARANYA</p>
        <h1 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-7 text-[#66574e]">{subtitle}</p>
        <div className="mt-6 h-[3px] w-20 bg-[#b58a50]" />

        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-semibold text-[#632d35]">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#4d3b33]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {draftNote && (
          <p className="mt-10 rounded-lg border border-[#e5c28f] bg-[#f8f1e8] px-4 py-3 text-sm text-[#6b4a3b]">
            This page is a draft. The store owner should review and confirm the final wording before launch.
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/collections" className="rounded-md bg-[#632d35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f232a]">
            Continue shopping
          </Link>
          <Link href="/enquiry" className="rounded-md border border-[#a47748] px-5 py-3 text-sm font-semibold text-[#632d35] transition hover:bg-[#f3ece3]">
            Send an enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
