import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";

export const metadata: Metadata = getPageSEO(
  "Abonnement et Paiement",
  "Gérez votre abonnement, vos moyens de paiement et consultez votre historique de facturation"
);

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

