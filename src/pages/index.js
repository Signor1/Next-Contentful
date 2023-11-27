import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  });
}

export default function Recipes() {
  return <div>Recipe Lists</div>;
}
