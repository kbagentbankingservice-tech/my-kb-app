"use client";

import { useLanguage } from "@/hooks/use-language";
import Header from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Banknote, BadgeCheck, Building } from "lucide-react";
import LoanCalculator from "@/components/loan-calculator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";


export default function HomePage() {
  const { t } = useLanguage();

  const stats = [
    { title: t('happyClients'), value: "50,000+", icon: <Users className="h-8 w-8 text-primary" />, description: t('happyClientsDescription') },
    { title: t('disbursedAmount'), value: "৳150Cr+", icon: <Banknote className="h-8 w-8 text-primary" />, description: t('disbursedAmountDescription') },
    { title: t('approvalRate'), value: "98%", icon: <BadgeCheck className="h-8 w-8 text-primary" />, description: t('approvalRateDescription') },
    { title: t('branchesWorldwide'), value: "250+", icon: <Building className="h-8 w-8 text-primary" />, description: t('branchesWorldwideDescription') },
  ]
  
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        
        <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t('homeTitle')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:mt-6">
                {t('homeSubtitle')}
            </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
           {stats.map((stat, index) => (
             <Card key={index} className="text-center">
                <CardHeader className="flex flex-col items-center gap-4">
                    {stat.icon}
                    <CardTitle className="font-headline text-4xl font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{stat.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
            <LoanCalculator />
        </div>

      </main>
      <footer className="text-center py-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} KB Agent Banking Secretary Service. All rights reserved.</p>
      </footer>
    </div>
  );
}
