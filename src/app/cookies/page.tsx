import { Metadata } from 'next'
import { Cookie, Shield, Settings, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy - Gallery Hub',
  description: 'Information about how Gallery Hub uses cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-muted-foreground">
            Learn about how we use cookies and similar technologies on Gallery Hub.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">What Are Cookies?</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and enable certain features to work properly.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Types of Cookies We Use</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Session management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Security features
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Page views and navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    User behavior analysis
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies allow the website to remember choices you make and provide enhanced features.
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Language preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    User preferences
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Managing Cookies</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-muted-foreground">
              However, if you do this, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Cookie Duration</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Session Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are temporary and expire when you close your browser.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Persistent Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies remain on your device until they expire or you delete them.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Third-Party Cookies</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Some cookies are placed by third-party services that appear on our pages. We use trusted third-party services that track this information on our behalf.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Updates to This Policy</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 