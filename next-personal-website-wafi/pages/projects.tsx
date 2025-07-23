export async function getStaticProps() {
  return {
    props: {
      pageId: "projects"
    }
  }
}

export default function Projects() {
  return <div className="mt-16 px-8">
    <header>
      <h1 className="font-bold  text-4xl text-zinc-800">Thing I Do</h1>
      <p className="text-base mt-6 text-zinc-600">I have been working on a number of small creative projects</p>
    </header>
    <div className="mt-16">
      <h2 className="text-2xl">Apps</h2>
    </div>
    <div className="mt-16 mb-8">
      <h2 className="text-2xl">Books</h2>
    </div>
  </div>
}