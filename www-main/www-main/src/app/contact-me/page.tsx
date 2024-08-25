"use client";

import ContactCard from '@/components/contact-card';
import { Navigation } from '@/components/navigation';
export default function ContactMe() {
  return (
    <div className="flex justify-center items-center min-h-screen black">
      <ContactCard />
      <Navigation /> 
    </div>

  );
}
