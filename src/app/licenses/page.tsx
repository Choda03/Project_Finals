import { Metadata } from 'next'
import { FileText, Code, Package, Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Licenses - Gallery Hub',
  description: 'Information about the licenses used in Gallery Hub.',
}

export default function LicensesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Licenses</h1>
          <p className="text-lg text-muted-foreground">
            Information about the licenses used in Gallery Hub and its dependencies.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Gallery Hub License</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Gallery Hub is licensed under the MIT License. This means you are free to use, modify, and distribute the software under the terms of the MIT License.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm whitespace-pre-wrap">
                {`MIT License

Copyright (c) 2024 Gallery Hub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
              </pre>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Dependencies</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Gallery Hub uses several open-source packages. Here are some of the key dependencies and their licenses:
            </p>
            <div className="space-y-6">
              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Next.js</h3>
                <p className="text-muted-foreground mb-2">MIT License</p>
                <Link 
                  href="https://github.com/vercel/next.js/blob/canary/license.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View License <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">React</h3>
                <p className="text-muted-foreground mb-2">MIT License</p>
                <Link 
                  href="https://github.com/facebook/react/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View License <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-4 rounded-md border">
                <h3 className="text-xl font-medium mb-2">Tailwind CSS</h3>
                <p className="text-muted-foreground mb-2">MIT License</p>
                <Link 
                  href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View License <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Contributing</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We welcome contributions to Gallery Hub! By contributing, you agree to license your contributions under the MIT License.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">How to Contribute</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fork the repository</li>
                <li>Create a new branch for your feature</li>
                <li>Make your changes</li>
                <li>Submit a pull request</li>
              </ol>
            </div>
          </section>

          <section className="mb-12 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Acknowledgments</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              We would like to thank all the open-source contributors and projects that have made Gallery Hub possible. Your work and dedication to the open-source community is truly appreciated.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 