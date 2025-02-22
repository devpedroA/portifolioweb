"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebase"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: new Date(),
      })
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error("Error adding document: ", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-center ">Contato</h2>
        {isSubmitted ? (
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <p className="text-white text-xl mb-4">Obrigado pelo seu contato!</p>
            <p className="text-white/80">Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full p-3 rounded bg-white/10 text-white border ${errors.name ? "border-red-500" : "border-white/20"} focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full p-3 rounded bg-white/10 text-white border ${errors.email ? "border-red-500" : "border-white/20"} focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className={`w-full p-3 rounded bg-white/10 text-white border ${errors.message ? "border-red-500" : "border-white/20"} focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

