"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatMessage } from "./ChatMessage"; // Importa el nuevo componente

const FormSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

export function ChatComponent() {
  const [messages, setMessages] = useState<string[]>([]);

  // Cargar mensajes desde localStorage al montar el componente
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      setMessages(parsedMessages); // Actualizamos el estado con los mensajes cargados
      console.log("Loaded messages from localStorage:", parsedMessages);
    }
  }, []);

  // Guardar mensajes en localStorage cada vez que cambien
  useEffect(() => {
    if (messages.length > 0) {
      console.log("Saving messages to localStorage:", messages);
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: "",
    },
  });

  // Manejar el envio del formulario
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newMessage = data.message;

    // Actualizar el estado de los mensajes
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Resetear el formulario
    form.reset();
  }

  // Manejar el evento "Enter" para enviar el mensaje
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevenir salto de linea
      form.handleSubmit(onSubmit)(); // Llamar al envio del formulario
    }
  }

  return (
    <Card className="w-1/2 mx-auto mt-10  shadow-2xl bg-white rounded-xl  shadow-palleteOrangeVariant">
      <CardHeader>
        <CardTitle className="text-textTitle">Chat with your host!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chat-window mb-5 p-4 border border-gray-200 rounded-md h-64 overflow-y-scroll flex flex-col ">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} isUserMessage={true} />
            ))
          ) : (
            <p>No messages yet.</p>
          )}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="resize-none"
                      {...field}
                      onKeyDown={handleKeyDown} // Añadir evento para capturar "Enter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="my-5" type="submit" variant="outline">
              Send
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
