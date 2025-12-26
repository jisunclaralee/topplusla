"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function Hero() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/handshake-business-trust.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
          }}
        />
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              30년 경력의 전문성으로
              <br />
              정당한 권익을 보호합니다
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90 text-pretty">
              삼성화재 28년, K손해사정 2년의 실무 경험을 바탕으로
              <br />
              이제는 의뢰인 편에서 최상의 손해사정 서비스를 제공합니다
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => setContactModalOpen(true)}
              >
                <Mail className="mr-2 h-5 w-5" />
                무료 상담 접수
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  )
}
