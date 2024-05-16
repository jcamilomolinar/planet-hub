'use client';

import QueryFormFieldInput from "@/components/QueryFormFieldInput"
import { Button } from "@/components/ui/Button"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/Form"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/Dialog"

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  commentDescription: z.string().min(1, {
    message: "Enter a comment!",
  }),
  queryId: z.number(),
});

function QueryCardCommentButton({ queryId, refresh, setRefresh }: { queryId: number, refresh: boolean, setRefresh: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      commentDescription: "",
      queryId: queryId,
    },
  })

  function closeDialog() {
    setOpen(!open);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    closeDialog();
    const response = await fetch('http://localhost:8000/api/send-comment-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    setRefresh(!refresh);
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Comment query</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a comment!</DialogTitle>
          <DialogDescription>
            Comment on this query and share your thoughts with the community!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex-col space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <QueryFormFieldInput
              form={form}
              name="username"
              placeholder="Enter your username"
              description=""
              label="Username" />
            <QueryFormFieldInput
              form={form}
              name="commentDescription"
              placeholder="Share your thoughts!"
              description=" "
              label="Comment" />
            <DialogFooter>
              <Button type="submit">Comment!</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default QueryCardCommentButton;