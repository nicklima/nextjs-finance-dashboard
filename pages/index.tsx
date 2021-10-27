import React from "react"
import { GetStaticProps } from "next"
import prisma from 'lib/prisma';

import { PostProps } from "interfaces"

import Layout from "components/Layout"
import Post from "components/Post"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      {props.feed.map((post) => (
        <div key={post.id} className="post">
          <Post post={post} />
        </div>
      ))}
    </Layout>
  )
}

export default Blog
