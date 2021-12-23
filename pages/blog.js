import { getSession, useSession } from "next-auth/react";

function Blog({ data }) {
  const { data: session } = useSession();
  return (
    <>
      <h1>Blog page</h1>
      <h2>{data}</h2>
      {/* <h2>{session.user.name}</h2> */}
    </>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  // Since server side we need to pass request information
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session
        ? `Blog post you might be interested in ${session.user.name}`
        : `General Blog posts`,
    },
  };
}
