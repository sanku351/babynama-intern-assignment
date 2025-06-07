"use client"

import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for webinars
const webinars = [
  {
    id: 1,
    title: "Newborn Sleep Patterns: What Every Parent Should Know",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-15T10:00:00Z",
    duration: "45 minutes",
    description: "Learn about healthy sleep patterns for newborns and practical tips for better sleep routines.",
    category: "Sleep & Development",
  },
  {
    id: 2,
    title: "Breastfeeding Basics: Common Challenges and Solutions",
    speaker: "Dr. Priya Sharma",
    date: "2024-01-18T14:00:00Z",
    duration: "60 minutes",
    description: "Comprehensive guide to breastfeeding, addressing common concerns and providing expert solutions.",
    category: "Feeding & Nutrition",
  },
  {
    id: 3,
    title: "Baby's First Foods: Introduction to Solid Foods",
    speaker: "Dr. Rajesh Kumar",
    date: "2024-01-22T11:00:00Z",
    duration: "50 minutes",
    description: "Everything you need to know about introducing solid foods to your baby safely and effectively.",
    category: "Feeding & Nutrition",
  },
  {
    id: 4,
    title: "Understanding Baby Cries: Communication Before Words",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-25T16:00:00Z",
    duration: "40 minutes",
    description: "Decode your baby's different cries and learn how to respond appropriately to their needs.",
    category: "Development & Behavior",
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatTime(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

function isUpcoming(dateString: string) {
  return new Date(dateString) > new Date()
}

export default function WebinarsPage() {
  const handleViewDetails = (webinarId: number) => {
    console.log(`Viewing details for webinar ID: ${webinarId}`)
  }

  const upcomingWebinars = webinars.filter((webinar) => isUpcoming(webinar.date))
  const pastWebinars = webinars.filter((webinar) => !isUpcoming(webinar.date))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Babynama Live Webinars</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our expert pediatricians and child care specialists for live sessions designed to support you on your
              parenting journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Webinars */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-green-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Upcoming Webinars</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {upcomingWebinars.length} Live Sessions
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingWebinars.map((webinar) => (
              <Card
                key={webinar.id}
                className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {webinar.category}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 text-xs">Upcoming</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{webinar.title}</CardTitle>
                  <CardDescription className="text-sm">{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>
                        {formatTime(webinar.date)} • {webinar.duration}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleViewDetails(webinar.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Webinars */}
        {pastWebinars.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
              <h2 className="text-2xl font-semibold text-gray-900">Past Webinars</h2>
              <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                {pastWebinars.length} Recordings Available
              </Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastWebinars.map((webinar) => (
                <Card
                  key={webinar.id}
                  className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-gray-400 opacity-90"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {webinar.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Recorded
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{webinar.title}</CardTitle>
                    <CardDescription className="text-sm">{webinar.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>
                          {formatTime(webinar.date)} • {webinar.duration}
                        </span>
                      </div>
                    </div>
                    <Button onClick={() => handleViewDetails(webinar.id)} variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
