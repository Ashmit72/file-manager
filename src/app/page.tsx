import {
  ArrowRight,
  FileText,
  Search,
  Tag,
  Zap,
  Shield,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: FileText,
      title: "Smart OCR",
      description:
        "Automatically extract text from PDFs and images with advanced OCR technology.",
      color: "text-primary-text",
      bgColor: "bg-primary-accent",
    },
    {
      icon: Search,
      title: "Full-Text Search",
      description:
        "Search through all your documents instantly, even inside scanned files.",
      color: "text-info-text",
      bgColor: "bg-info-accent",
    },
    {
      icon: Tag,
      title: "Smart Tagging",
      description:
        "Organize documents with tags and categories for easy retrieval.",
      color: "text-success-text",
      bgColor: "bg-success-accent",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Upload, process, and search through thousands of documents in seconds.",
      color: "text-warning-text",
      bgColor: "bg-warning-accent",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your documents are encrypted and stored securely with enterprise-grade protection.",
      color: "text-error-text",
      bgColor: "bg-error-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description:
        "Access your documents from anywhere, on any device, anytime.",
      color: "text-info-text",
      bgColor: "bg-info-accent",
    },
  ];

  const benefits = [
    "Unlimited document uploads",
    "Advanced OCR processing",
    "Smart categorization",
    "Full-text search",
    "Tag management",
    "Cloud synchronization",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-bg to-elevation-level1">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-2">
            <Badge color="info" variant="soft" size="28">
              <Zap className="w-4 h-4" />
              Powered by AI & OCR
            </Badge>
            <h1 className="mb-6 heading-1">
              Your Documents,
              <br />
              <span className=" text-fg-secondary">Organized & Searchable</span>
            </h1>
            <p className="text-xl mb-8 ">
              Upload PDFs and images, extract text automatically, and find
              anything in seconds. The smart way to manage your documents.
            </p>
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="active:bg-primary w-full relative overflow-hidden border border-black/10 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-b before:from-white/20 before:to-white/0"
              >
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

             <Button
				className="active:bg-elevation-level1 w-full shadow-[0_-1px_0_0_var(--color-border)_inset,0_1px_1px_0_rgba(25,24,27,0.04)] active:shadow-[0_0px_0_0_var(--color-border)_inset,0_1px_1px_0_rgba(25,24,27,0.04)]"
				color="neutral"
				variant="outline">
        Watch Demo
			</Button>
            </div>
            <p className="text-sm text-fg-secondary mt-4">
              No credit card required • Free forever
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-info-hover to-info-focus rounded-2xl blur-3xl opacity-20"></div>
            <Card className="relative bg-bg p-8 shadow-2xl">
              <Image
                src="/landing.jpg"
                alt="Document management"
                className="rounded-lg w-full"
                height={700}
                width={700}
              />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="mb-1">1000+</div>
                  <div className="text-sm text-fg-secondary">Documents</div>
                </div>
                <div className="text-center">
                  <div className="mb-1">99.9%</div>
                  <div className="text-sm text-fg-secondary">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="mb-1">{"< 2s"}</div>
                  <div className="text-sm text-fg-secondary">Processing</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-5 mb-4">
              Everything you need to manage documents
            </h2>
            <p className="text-xl text-fg-secondary max-w-2xl mx-auto">
              Powerful features designed to make document management effortless
              and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg hover:shadow-fill4 transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-fg-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-linear-to-br from-info to-warning">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Stop searching.
                <br />
                Start finding.
              </h2>
              <p className="text-xl mb-8">
                Transform your document chaos into an organized, searchable
                library in minutes.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 text-success-accent rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-success-text" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Button color="info" variant="strong" asChild>
                <Link href="/signin">
                  Start Organizing Now
                  <ArrowRight />
                </Link>
              </Button>
              
            </div>

            <div className="relative">
              <Card className="bg-fill3 p-6 shadow-xl">
                <Image
                  src="/landing2.jpg"
                  alt="Dashboard preview"
                  className="rounded-lg w-full"
                  height={700}
                  width={500}
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 heading-5">Ready to organize your documents?</h2>
          <p className="text-xl text-fg-secondary mb-8">
            Join thousands of users who have transformed their document
            management workflow
          </p>
          <Button asChild>
            <Link href="/signin">
              Get Started for Free
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t  py-12 bg-fill1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-info to-info-hover rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span>DocuVault</span>
              </div>
              <p className="text-sm text-fg-secondary">
                Smart document management for modern teams
              </p>
            </div>
            <div>
              <h4 className="mb-3 heading-6">Product</h4>
              <ul className="space-y-2 text-sm text-fg-secondary">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 heading-6">Company</h4>
              <ul className="space-y-2 text-sm text-fg-secondary">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 heading-6">Legal</h4>
              <ul className="space-y-2 text-sm  text-fg-secondary">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
                <li>Licenses</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-soft pt-8 text-center text-sm text-fg-secondary">
            © 2024 DocuVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
