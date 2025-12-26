"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Mail, X } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const navigation = [
    { name: "사무소 소개", href: "#about" },
    { name: "전문분야", href: "#services" },
    { name: "업무프로세스", href: "#process" },
    { name: "오시는 길", href: "#location" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-primary">탑플러스</span>
              <span className="ml-1 text-sm text-muted-foreground">손해사정</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-4">
            <Button size="sm" className="hidden lg:flex items-center gap-2" onClick={() => setContactModalOpen(true)}>
              <Mail className="h-4 w-4" />
              무료상담
            </Button>
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full mt-2"
                size="sm"
                onClick={() => {
                  setContactModalOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                <Mail className="h-4 w-4 mr-2" />
                무료상담
              </Button>
            </div>
          </div>
        )}
      </header>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  )
}
