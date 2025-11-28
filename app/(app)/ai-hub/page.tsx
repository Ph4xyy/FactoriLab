"use client"

import React from "react"
import { CommandConsole } from "@/components/ai-hub/command-console"
import { QuickActions } from "@/components/ai-hub/quick-actions"
import { SavedPlaybooks } from "@/components/ai-hub/saved-playbooks"
import { RecentRuns } from "@/components/ai-hub/recent-runs"

export default function AIHubPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            AI Automation Hub
          </h1>
          <p className="text-sm text-neutral-500">
            Interact with AI-powered commands and insights
          </p>
          <p className="text-xs text-neutral-600 mt-1">
            Use natural language to query your data, trigger automations, and generate reports.
          </p>
        </div>

        {/* Command Console */}
        <CommandConsole />

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <QuickActions />
            <SavedPlaybooks />
          </div>

          {/* Right Column */}
          <div>
            <RecentRuns />
          </div>
        </div>
      </div>
    </div>
  )
}

