import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Wifi, DollarSign, Clock, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find the Best Internet Plan for Your Home
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare broadband plans from top providers in just 5 simple steps
        </p>
        
        <Link href="/address">
          <Button size="lg" className="text-lg px-8 py-3">
            Start Comparison
          </Button>
        </Link>
      </div>

      {/* How it Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: 'Address', icon: MapPin, desc: 'Enter your address' },
            { step: 2, title: 'Preferences', icon: Wifi, desc: 'Tell us your needs' },
            { step: 3, title: 'Plans', icon: DollarSign, desc: 'Compare options' },
            { step: 4, title: 'Sign Up', icon: CheckCircle, desc: 'Choose your plan' },
            { step: 5, title: 'Connect', icon: Clock, desc: 'Get connected' }
          ].map(({ step, title, icon: Icon, desc }) => (
            <Card key={step} className="text-center">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{step}. {title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: 'Smart Recommendations',
            desc: 'Get personalized plan suggestions based on your usage patterns and household size'
          },
          {
            title: 'Real-time Pricing',
            desc: 'See current promotional offers and pricing from all major providers'
          },
          {
            title: 'No Lock-in Contracts',
            desc: 'Find flexible plans with no long-term commitments required'
          }
        ].map((feature, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/address">
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            Get Started Now
          </Button>
        </Link>
      </div>
    </div>
  )
}