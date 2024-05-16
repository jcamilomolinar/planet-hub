'use client';

import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/Button"
import { useRouter } from "next/navigation";
import QueryCardCommentButton from "@/components/QueryCardCommentButton"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"

function QueryCard({ children, queryName, username, description, queryId, refresh, setRefresh }: {
  children: React.ReactNode, queryName: string, username: string, description: string, queryId: number, refresh: boolean, setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter();
  const { toast } = useToast();

  function fetchQueryId() {
    localStorage.setItem('queryId', queryId.toString());
    router.push('/querybuilder')
  }

  function deleteToast() {
    toast({
      variant: "destructive",
      title: "Query Deleted!",
      description: "The query has been deleted.",
    })
  }

  async function deleteQuery() {
    deleteToast();
    const response = await fetch(`http://localhost:8000/api/delete-query/${queryId}`,
      {
        method: 'DELETE'
      }).then(
        (res) => res.json()
      ).then(
        (data) => console.log(data)
      );
    setRefresh(!refresh);
  }

  return (
    <div className='m-5'>
      <Card className="text-sm">
        <CardHeader>
          <CardTitle>{queryName}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
          {children}
        </CardContent>
        <CardFooter className="gap-5">
          <QueryCardCommentButton refresh={refresh} setRefresh={setRefresh} queryId={queryId} />
          <Button onClick={fetchQueryId} variant="outline">Open in Query Builder</Button>
          <Button onClick={deleteQuery} variant="destructive">Delete Query</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default QueryCard;