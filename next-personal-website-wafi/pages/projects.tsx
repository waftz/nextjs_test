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
      <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
        <li>
          <a href="[link]" className="href">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">[name]</div>
              </div>
              <div className="px-6 pb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">🔗 [URL]</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-16 mb-8">
      <h2 className="text-2xl">Books</h2>
    </div>
  </div>
}