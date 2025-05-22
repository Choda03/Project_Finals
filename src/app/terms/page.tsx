import { Metadata } from 'next'
import { CheckCircle2, UserCircle, FileText, Shield, AlertCircle, Scale, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Gallery Hub',
  description: 'Terms and conditions for using Gallery Hub services.',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Please read these terms carefully before using Gallery Hub.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">1. Acceptance of Terms</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              By accessing and using Gallery Hub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <UserCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">2. User Accounts</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              To use certain features of Gallery Hub, you must register for an account. You agree to:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Provide accurate and complete information
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Maintain the security of your account
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Notify us immediately of any unauthorized use
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Accept responsibility for all activities under your account
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">3. Content Guidelines</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              You agree not to upload, post, or transmit content that:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Is illegal, harmful, threatening, or abusive
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Infringes on intellectual property rights
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Contains malware or harmful code
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Is spam or unauthorized advertising
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">4. Intellectual Property</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              You retain ownership of your content, but grant us a license to:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Host, store, and display your content
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Use your content to provide and improve our services
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Share your content with other users as part of the service
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">5. Termination</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We reserve the right to terminate or suspend your account and access to our services at any time, without notice, for any reason, including violation of these Terms.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">6. Limitation of Liability</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Gallery Hub is provided "as is" without any warranties. We are not liable for any damages arising from your use of our services.
            </p>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">7. Changes to Terms</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We may modify these terms at any time. We will notify you of significant changes by posting the new terms on this page.
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