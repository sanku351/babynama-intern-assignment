import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Video } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Babynama</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert pediatric guidance and live webinars to support you on your parenting journey. Connect with certified
            doctors and get answers to all your child care questions.
          </p>
          <Link href="/webinars">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 cursor-pointer">
              View Live Webinars
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Live Webinars</CardTitle>
              <CardDescription>Join expert-led sessions on child care topics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Interactive sessions with pediatricians covering sleep, feeding, development, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Expert Doctors</CardTitle>
              <CardDescription>Certified pediatricians and child care specialists</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get guidance from experienced doctors who understand modern parenting challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Flexible Schedule</CardTitle>
              <CardDescription>Sessions designed for busy parents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Multiple time slots and recorded sessions available for your convenience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
