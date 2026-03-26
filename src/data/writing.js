export const writingPosts = [
  {
    slug: "building-slowly",
    title: "A Little About Me",
    excerpt:
      "A short introduction to who I am, how I have grown as an engineer, and the kind of work and life I want to keep building.",
    date: "March 2026",
    readTime: "3 min read",
    tags: ["About", "Life", "Work"],
    featured: true,
    quote: {
      text: "How we spend our days is, of course, how we spend our lives.",
      source: "Annie Dillard, The Writing Life",
    },
    sections: [
      {
        heading: "Where I am coming from",
        paragraphs: [
          "I am Oluwafemi Medale, a software engineer based in Lagos, Nigeria. Over the years I have grown through building products, writing software across different stacks, and learning that good engineering is rarely only about code. It is also about judgment, steadiness, and how well you work with people.",
          "My public profile tells a straightforward story: more than nine years in software, a degree from the Federal University of Technology Akure, technical writing published online, and a reputation for being thoughtful, proactive, and detailed. I am grateful for that story, but I also think there is a quieter one underneath it.",
        ],
      },
      {
        heading: "How I have learned to work",
        paragraphs: [
          "The older I get in this field, the more I value engineers who bring calm into complexity. I want to be the kind of person who improves systems without creating drama around myself, who collaborates well, and who pays attention to the small details that make a product more trustworthy.",
          "I care about reliability, clear thinking, clean abstractions, and helping teams move forward together. The recommendations people have written about me often mention collaboration and depth. Those matter to me because they point to something deeper than competence: trust.",
        ],
      },
      {
        heading: "What this site is for",
        paragraphs: [
          "This website is my attempt to leave room for more than a summary of achievements. I want it to hold writing, a few lines I love, and a more honest picture of the values shaping my life and work.",
          "I still care deeply about software. But I also care about attention, faith, discipline, and becoming the kind of person whose inner life can sustain the outer work. That is the thread I hope runs through everything here.",
        ],
      },
    ],
  },
  {
    slug: "mathematics-memory-and-massive-traffic",
    title: "How Mathematics Helped Me Tame Memory At Scale",
    excerpt:
      "A practical look at using queueing math and probabilistic data structures to control memory pressure in large systems under heavy traffic.",
    date: "February 2026",
    readTime: "8 min read",
    tags: ["Engineering", "Performance", "Systems"],
    featured: false,
    quote: {
      text: "The way is long if one follows precepts, but short and helpful, if one follows patterns.",
      source: "Seneca, Letters to Lucilius, Letter 6",
    },
    sections: [
      {
        heading: "The first equation I reach for",
        paragraphs: [
          "When a large application starts falling over under traffic, memory graphs often get blamed before they are understood. The first shift that helped me was to stop thinking in terms of mystery and start thinking in terms of quantities.",
          "One of the most practical relationships here is Little's Law: average work in the system equals throughput multiplied by average time in the system. In software terms, in-flight memory tends to grow with requests per second multiplied by how long each request stays alive. That does not explain every leak, but it gives you a hard lower bound for how much memory concurrency alone can create.",
        ],
        codeBlocks: [
          {
            label: "Simple in-flight estimate",
            code: "requests_in_flight = throughput_per_second * average_request_lifetime_seconds\nmemory_in_flight = requests_in_flight * average_memory_per_request\n\nExample:\n2,400 req/s * 0.85 s = 2,040 in-flight requests\n2,040 * 180 KB ~= 367 MB before cache growth, queues, or retries",
          },
        ],
      },
      {
        heading: "Where the memory really went",
        paragraphs: [
          "In one high-traffic service, the problem was not a single dramatic leak. It was the combined effect of several mathematically boring decisions: oversized payload retention, too many duplicate objects in application caches, and frequency counters that kept exact state for far longer than the business actually needed.",
          "The system handled large tenant datasets, repeated lookups, and burst traffic. During peak load, GC activity increased, request latency stretched, and retry traffic amplified the pressure. The incident looked like a runtime problem, but much of it was actually a modeling problem.",
        ],
        bullets: [
          "Exact distinct counters were consuming memory proportional to cardinality.",
          "Negative lookups still triggered expensive cache or storage work.",
          "Hot-key tracking used maps that grew with traffic shape rather than product intent.",
        ],
      },
      {
        heading: "Using approximation where exactness was wasteful",
        paragraphs: [
          "Once the team agreed on the parts of the system that truly needed exact answers, several memory-heavy structures became obvious candidates for approximation. This is where mathematics became directly operational, not academic.",
          "For negative membership checks, a Bloom filter let us avoid many unnecessary backing-store lookups with a controlled false-positive rate. For distinct counting, HyperLogLog gave us cheap cardinality estimates instead of retaining every seen key. For high-volume frequency tracking, a Count-Min Sketch helped us identify heavy hitters without paying full hash-map cost on every event.",
        ],
        codeBlocks: [
          {
            label: "Bloom filter sizing sketch",
            code: "Goal: 10,000,000 possible membership checks\nTarget false positive rate: 1%\nRough budget: ~9.6 bits per element\n\n10,000,000 * 9.6 bits ~= 96,000,000 bits\n96,000,000 / 8 ~= 12 MB\n\nThat is often far cheaper than materializing a much larger set in memory.",
          },
          {
            label: "Approximate counting trade-off",
            code: "Need: approximate daily unique actors\nExact set approach: memory grows with every unique id\nHyperLogLog approach: fixed sketch size, predictable error\n\nIf a 2% error is acceptable for reporting, the memory savings can be dramatic.",
          },
        ],
      },
      {
        heading: "Why traffic shape matters as much as data volume",
        paragraphs: [
          "Massive traffic does not only increase CPU use. It changes object lifetime, retry behavior, queue depth, and cache churn. A service that looks healthy at 300 requests per second can behave like a completely different organism at 3,000.",
          "That is why I have learned to combine memory profiling with simple operational math. If p95 latency stretches from 200 ms to 900 ms while input traffic doubles, your in-flight work can grow much faster than intuition suggests. The memory graph is often just the visible consequence of a queueing problem upstream.",
        ],
        codeBlocks: [
          {
            label: "Traffic amplification example",
            code: "Before spike:\n800 req/s * 0.20 s = 160 in-flight\n\nDuring spike:\n1,600 req/s * 0.90 s = 1,440 in-flight\n\nTraffic doubled, but in-flight work became 9x larger.",
          },
        ],
      },
      {
        heading: "What actually improved the system",
        paragraphs: [
          "The winning combination was not one clever algorithm. It was a sequence of boring corrections: shorter object lifetimes, bounded queues, approximate structures where business tolerance allowed them, and fewer requests carrying more data than they truly needed.",
          "The most useful outcome was not just lower memory. It was better predictability. Once the system had clearer limits, scaling decisions became less emotional. We could reason about capacity with concrete assumptions instead of waiting for the next incident to teach us again.",
        ],
        bullets: [
          "Reduced backing-store misses for known negatives with Bloom filters.",
          "Moved some unique counting workloads to HyperLogLog sketches.",
          "Used approximate frequency tracking for operational visibility instead of exact retention everywhere.",
          "Tightened payload scope and object lifetime in request handlers.",
          "Added queue and concurrency limits so traffic spikes could not quietly multiply memory pressure.",
        ],
      },
    ],
    references: [
      {
        label: "John D. C. Little, A Proof for the Queueing Formula: L = λW (1961)",
        href: "https://doi.org/10.1287/opre.9.3.383",
      },
      {
        label: "Burton H. Bloom, Space/Time Trade-offs in Hash Coding with Allowable Errors (1970)",
        href: "https://doi.org/10.1145/362686.362692",
      },
      {
        label: "Philippe Flajolet et al., HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm (2007)",
        href: "http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf",
      },
      {
        label: "Graham Cormode and S. Muthukrishnan, An Improved Data Stream Summary: The Count-Min Sketch and its Applications (2005)",
        href: "https://doi.org/10.1016/j.jalgor.2003.12.001",
      },
    ],
  },
  {
    slug: "building-a-sustainable-pace",
    title: "Building a Sustainable Pace",
    excerpt:
      "Some thoughts on staying useful for the long term without letting speed, noise, and comparison hollow out the work.",
    date: "January 2026",
    readTime: "4 min read",
    tags: ["Life", "Work", "Reflection"],
    featured: false,
    quote: {
      text: "The universe is change; our life is what our thoughts make it.",
      source: "Marcus Aurelius, Meditations 4.3",
    },
    sections: [
      {
        heading: "Why pace matters to me",
        paragraphs: [
          "A lot of modern technical work rewards visible motion. Shipping, reacting, posting, responding, context-switching. Some of that is necessary. But some of it quietly erodes the very qualities that make good work possible in the first place.",
          "I have become more interested in sustainability than in speed for its own sake. Not laziness, not avoidance, but a pace that allows depth to survive.",
        ],
      },
      {
        heading: "What an unsustainable pace costs",
        paragraphs: [
          "When pace becomes identity, attention gets fragmented. You read less deeply. You think in shorter loops. You make decisions too early. Even outside work, the inner life starts sounding like a notification feed.",
          "That is expensive in ways no dashboard shows. It affects clarity, relationships, patience, and the ability to remain generous under pressure.",
        ],
      },
      {
        heading: "What I am trying instead",
        paragraphs: [
          "I am trying to protect longer stretches of focus, to make fewer promises with more care, and to let consistency do more of the work that adrenaline used to do. I want a pace I can keep, not just a pace I can survive for one quarter.",
          "In the long run, I suspect steadiness is underrated. The people who remain thoughtful over time often outlast the people who merely burn brightly for a while.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug) => writingPosts.find((post) => post.slug === slug);

export const getFeaturedPost = () => writingPosts.find((post) => post.featured) || writingPosts[0];
