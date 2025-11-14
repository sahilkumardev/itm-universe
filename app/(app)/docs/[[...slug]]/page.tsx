import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const slug = (await params).slug;

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <>
      <section>
        <MDX components={mdxComponents} />
        <Button variant={"outline"}>
          <Link href={"/"}>Home</Link>
        </Button>

        <div className="flex justify-between mt-8">
          {neighbours.previous && (
            <Button variant="outline" asChild>
              <Link href={neighbours.previous.url}>
                <Icons.arrowLeft />
                {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button variant="outline" asChild>
              <Link href={neighbours.next.url}>
                {neighbours.next.name}
                <Icons.arrowRight />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
