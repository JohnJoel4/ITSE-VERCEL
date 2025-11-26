import Link from 'next/link'

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Build your next <span className="text-blue-600">AI Project</span> faster
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The ultimate starter kit for your Next.js and Supabase applications. 
                Secure, scalable, and ready to deploy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-x-4">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              >
                Documentation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}