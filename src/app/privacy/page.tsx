import { Metadata } from 'next'
import { Shield, User, Share2, Key, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Gallery Hub',
  description: 'Our commitment to protecting your privacy and personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Your privacy is our priority. Learn how we protect and manage your data.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">1. Information We Collect</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Account information (name, email, password)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Profile information (bio, profile picture)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Content you upload (images, descriptions)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Communications with us
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">2. How We Use Your Information</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Provide and maintain our services
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Process your transactions
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Send you technical notices and support messages
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Communicate with you about products, services, and events
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">3. Information Sharing</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Service providers who assist in our operations
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Law enforcement when required by law
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Other users as part of the service (e.g., public profile information)
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Key className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">4. Your Rights</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              You have the right to:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Access your personal information
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Correct inaccurate information
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Request deletion of your information
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                Opt-out of marketing communications
              </li>
            </ul>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">5. Contact Us</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a 
              href="mailto:privacy@galleryhub.com"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              privacy@galleryhub.com
            </a>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">6. Updates to This Policy</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
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