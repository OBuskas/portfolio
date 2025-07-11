"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Globe } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#education", label: t("nav.education") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-slate-700 bg-slate-800 bg-gradient-to-r from-blue-400 to-purple-400 hover:bg-slate-700">
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                <DropdownMenuItem className="hover:bg-slate-700">
                  <span onClick={() => setLanguage("en")} className="cursor-pointer">English</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700">
                  <span onClick={() => setLanguage("pt")} className="cursor-pointer">Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700">
                  <span onClick={() => setLanguage("es")} className="cursor-pointer">Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-slate-700 bg-slate-800">
                  <Globe className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                <DropdownMenuItem>
                  <span onClick={() => setLanguage("en")} className="cursor-pointer block w-full">English</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span onClick={() => setLanguage("pt")} className="cursor-pointer block w-full">Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span onClick={() => setLanguage("es")} className="cursor-pointer block w-full">Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="border-slate-700 bg-slate-800">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900 border-slate-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-slate-300 hover:text-blue-400 transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
