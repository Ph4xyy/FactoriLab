"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  CreditCard,
  Calendar,
  X,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Download,
  Edit,
  Shield,
  Clock,
} from "lucide-react";

// Types pour les données
interface Subscription {
  id: string;
  plan: string;
  status: "active" | "cancelled" | "expired" | "pending";
  price: number;
  currency: string;
  billingCycle: "monthly" | "yearly";
  startDate: string;
  nextBillingDate: string;
  cancelAtPeriodEnd: boolean;
  features: string[];
}

interface PaymentMethod {
  id: string;
  type: "card" | "paypal" | "bank";
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
  name: string;
}

interface PaymentHistory {
  id: string;
  date: string;
  amount: number;
  currency: string;
  status: "success" | "failed" | "pending" | "refunded";
  description: string;
  invoiceUrl?: string;
}

// Données mockées (à remplacer par des appels API réels)
const mockSubscription: Subscription = {
  id: "sub_1234567890",
  plan: "Pro",
  status: "active",
  price: 29.99,
  currency: "EUR",
  billingCycle: "monthly",
  startDate: "2024-01-15",
  nextBillingDate: "2024-02-15",
  cancelAtPeriodEnd: false,
  features: [
    "Accès illimité à toutes les fonctionnalités",
    "Support prioritaire",
    "Analytics avancés",
    "Intégrations personnalisées",
  ],
};

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "pm_1",
    type: "card",
    last4: "4242",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true,
    name: "Carte principale",
  },
  {
    id: "pm_2",
    type: "card",
    last4: "8888",
    brand: "Mastercard",
    expiryMonth: 6,
    expiryYear: 2026,
    isDefault: false,
    name: "Carte secondaire",
  },
];

const mockPaymentHistory: PaymentHistory[] = [
  {
    id: "pay_1",
    date: "2024-01-15",
    amount: 29.99,
    currency: "EUR",
    status: "success",
    description: "Abonnement Pro - Janvier 2024",
    invoiceUrl: "#",
  },
  {
    id: "pay_2",
    date: "2023-12-15",
    amount: 29.99,
    currency: "EUR",
    status: "success",
    description: "Abonnement Pro - Décembre 2023",
    invoiceUrl: "#",
  },
  {
    id: "pay_3",
    date: "2023-11-15",
    amount: 29.99,
    currency: "EUR",
    status: "refunded",
    description: "Abonnement Pro - Novembre 2023",
    invoiceUrl: "#",
  },
];

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState(mockSubscription);
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);
  const [paymentHistory] = useState(mockPaymentHistory);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showAddPaymentDialog, setShowAddPaymentDialog] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const getStatusBadge = (status: Subscription["status"]) => {
    const variants = {
      active: "bg-green-500/10 text-green-500 border-green-500/20",
      cancelled: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      expired: "bg-red-500/10 text-red-500 border-red-500/20",
      pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    };

    const labels = {
      active: "Actif",
      cancelled: "Annulé",
      expired: "Expiré",
      pending: "En attente",
    };

    return (
      <Badge
        variant="outline"
        className={variants[status]}
      >
        {labels[status]}
      </Badge>
    );
  };

  const getPaymentStatusBadge = (status: PaymentHistory["status"]) => {
    const variants = {
      success: "bg-green-500/10 text-green-500",
      failed: "bg-red-500/10 text-red-500",
      pending: "bg-yellow-500/10 text-yellow-500",
      refunded: "bg-gray-500/10 text-gray-500",
    };

    const labels = {
      success: "Réussi",
      failed: "Échoué",
      pending: "En attente",
      refunded: "Remboursé",
    };

    return (
      <Badge variant="outline" className={variants[status]}>
        {labels[status]}
      </Badge>
    );
  };

  const handleCancelSubscription = async () => {
    setIsCancelling(true);
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubscription({
      ...subscription,
      cancelAtPeriodEnd: true,
      status: "cancelled",
    });
    
    setIsCancelling(false);
    setShowCancelDialog(false);
  };

  const handleReactivateSubscription = async () => {
    setIsCancelling(true);
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubscription({
      ...subscription,
      cancelAtPeriodEnd: false,
      status: "active",
    });
    
    setIsCancelling(false);
  };

  const handleSetDefaultPayment = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((pm) => ({
        ...pm,
        isDefault: pm.id === id,
      }))
    );
  };

  const handleDeletePaymentMethod = (id: string) => {
    if (paymentMethods.length === 1) {
      alert("Vous devez avoir au moins un moyen de paiement");
      return;
    }
    setPaymentMethods(paymentMethods.filter((pm) => pm.id !== id));
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Abonnement et Paiement</h1>
          <p className="text-muted-foreground">
            Gérez votre abonnement, vos moyens de paiement et consultez votre historique
          </p>
        </div>

        <Tabs defaultValue="subscription" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="subscription">Abonnement</TabsTrigger>
            <TabsTrigger value="payment-methods">Moyens de paiement</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          {/* Onglet Abonnement */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Plan {subscription.plan}</CardTitle>
                    <CardDescription className="mt-2">
                      Votre abonnement actuel
                    </CardDescription>
                  </div>
                  {getStatusBadge(subscription.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Date de début</span>
                    </div>
                    <p className="text-lg font-semibold">
                      {formatDate(subscription.startDate)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Prochain renouvellement</span>
                    </div>
                    <p className="text-lg font-semibold">
                      {formatDate(subscription.nextBillingDate)}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      <span>Prix</span>
                    </div>
                    <p className="text-lg font-semibold">
                      {formatCurrency(subscription.price, subscription.currency)} /{" "}
                      {subscription.billingCycle === "monthly" ? "mois" : "an"}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Cycle de facturation</span>
                    </div>
                    <p className="text-lg font-semibold capitalize">
                      {subscription.billingCycle === "monthly" ? "Mensuel" : "Annuel"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Fonctionnalités incluses</h3>
                  <ul className="space-y-2">
                    {subscription.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {subscription.cancelAtPeriodEnd ? (
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-orange-500 mb-1">
                          Abonnement annulé
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Votre abonnement sera annulé le{" "}
                          <strong>{formatDate(subscription.nextBillingDate)}</strong>.
                          Vous continuerez à avoir accès à toutes les fonctionnalités jusqu&apos;à
                          cette date.
                        </p>
                        <Button
                          onClick={handleReactivateSubscription}
                          disabled={isCancelling}
                          variant="outline"
                        >
                          Réactiver l&apos;abonnement
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
                      <DialogTrigger asChild>
                        <Button variant="destructive">
                          <X className="h-4 w-4 mr-2" />
                          Annuler l&apos;abonnement
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Annuler l&apos;abonnement</DialogTitle>
                          <DialogDescription>
                            Êtes-vous sûr de vouloir annuler votre abonnement ? Vous
                            continuerez à avoir accès jusqu&apos;au{" "}
                            <strong>{formatDate(subscription.nextBillingDate)}</strong>.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setShowCancelDialog(false)}
                          >
                            Non, garder l&apos;abonnement
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={handleCancelSubscription}
                            disabled={isCancelling}
                          >
                            {isCancelling ? "Annulation..." : "Oui, annuler"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier le plan
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Moyens de paiement */}
          <TabsContent value="payment-methods" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Moyens de paiement</CardTitle>
                    <CardDescription>
                      Gérez vos cartes et méthodes de paiement
                    </CardDescription>
                  </div>
                  <Dialog open={showAddPaymentDialog} onOpenChange={setShowAddPaymentDialog}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter un moyen de paiement
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ajouter un moyen de paiement</DialogTitle>
                        <DialogDescription>
                          Ajoutez une nouvelle carte ou méthode de paiement
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Numéro de carte</Label>
                          <Input
                            id="card-number"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Date d&apos;expiration</Label>
                            <Input
                              id="expiry"
                              type="text"
                              placeholder="MM/AA"
                              maxLength={5}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              type="text"
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Nom sur la carte</Label>
                          <Input
                            id="card-name"
                            type="text"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setShowAddPaymentDialog(false)}
                        >
                          Annuler
                        </Button>
                        <Button onClick={() => setShowAddPaymentDialog(false)}>
                          Ajouter
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{method.name}</p>
                            {method.isDefault && (
                              <Badge variant="secondary" className="text-xs">
                                Par défaut
                              </Badge>
                            )}
                          </div>
                          {method.type === "card" && (
                            <p className="text-sm text-muted-foreground">
                              {method.brand} •••• {method.last4} • Expire{" "}
                              {method.expiryMonth}/{method.expiryYear}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {!method.isDefault && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSetDefaultPayment(method.id)}
                          >
                            Définir par défaut
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeletePaymentMethod(method.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Historique */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des paiements</CardTitle>
                <CardDescription>
                  Consultez tous vos paiements et téléchargez vos factures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-semibold">{payment.description}</p>
                          {getPaymentStatusBadge(payment.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(payment.date)}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-lg">
                          {formatCurrency(payment.amount, payment.currency)}
                        </p>
                        {payment.invoiceUrl && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Facture
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </main>
  );
}

