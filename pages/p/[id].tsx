import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"

import { PostProps } from "interfaces"
import prisma from 'lib/prisma';
import Layout from "components/Layout"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const Post: React.FC<PostProps> = (props) => {
  const title = props.title
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown source={props.content} />
      </div>
    </Layout>
  )
}

export default Post
