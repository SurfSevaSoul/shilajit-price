// Server component — can safely import fs-dependent modules.
// Passes build-time blog post count to the client component.
import { BLOG_POSTS } from "./data/blog";
import HomeClient from "./HomeClient";

export default function Page() {
  return <HomeClient blogPostCount={BLOG_POSTS.length} />;
}
