'use client'

import { Suspense } from "react";
import { useEffect, useState } from "react";
import Title from "@/components/ui/Title"
import QueryCard from "@/components/QueryCard"
import QueryComment from "@/components/QueryComment"
import { Separator } from "@/components/ui/Separator"
import QueryCardSkeleton from "@/components/QueryCardSkeleton";

function QueriesPage() {
  const [queries, setQueries] = useState([]);
  const [queryComments, setQueryComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function noQuery() {
    if (queries.length > 0) {
      return <></>;
    } else {
      return (
        <div className="flex flex-col items-center justify-center m-10">
          <Title>No queries yet.</Title>
          <Title>Be the first to post a query!</Title>
        </div>
      );
    }
  }

  async function getQueriesAndComments() {
    const response = await fetch('http://localhost:8000/api/retrieve-query').then(
      (res) => res.json()).then(
        (data) => setQueries(data));
    const response1 = await fetch('http://localhost:8000/api/retrieve-comment').then(
      (res) => res.json()).then((data) => setQueryComments(data));
  }

  useEffect(() => {
    getQueriesAndComments();
  }, [refresh]);

  function commentsOfQuery(queryId: number) {
    if (queryComments.filter((queryComment: { queryId: number, queryCommentId: number, username: string, commentDescription: string }
    ) => queryComment.queryCommentId === queryId).length > 0) {
      return (
        <>
          <Separator className="my-3" />
          <p className="font-bold text-base">Comments</p>
          {queryComments.filter((queryComment: { queryId: number, queryCommentId: number, username: string, commentDescription: string }
          ) => queryComment.queryCommentId === queryId).map(
            (queryComment:
              { queryId: number, queryCommentId: number, username: string, commentDescription: string }
            ) => (
              <QueryComment
                key={queryComment.queryId}
                username={queryComment.username}
                comment={queryComment.commentDescription}
              />
            )
          )
          }
        </>
      );
    };
  }

  return (
    <Suspense fallback={<QueryCardSkeleton />}>
      <div>
        <Title>Queries</Title>
        {noQuery()}
        {queries.map(
          (query:
            { queryId: number, queryName: string, username: string, queryDescription: string }
          ) => (
            <QueryCard
              key={query.queryId}
              queryId={query.queryId}
              queryName={query.queryName}
              username={query.username}
              description={query.queryDescription}
              refresh={refresh}
              setRefresh={setRefresh}
            >
              <>
                {commentsOfQuery(query.queryId)}
              </>
            </QueryCard>
          )
        )
        }
      </div>
    </Suspense>
  );
}
export default QueriesPage;