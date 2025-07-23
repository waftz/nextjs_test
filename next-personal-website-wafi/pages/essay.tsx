export async function getStaticProps() {
  return {
    props: {
      pageId: "essay"
    }
  }
}

export default function Essay() {
  return <div>Essay</div>
}
