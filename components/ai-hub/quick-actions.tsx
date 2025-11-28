"use client"

import React from "react"
import { cn } from "@/lib/utils"

type QuickAction = {
  id: string
  title: string
  description: string
  label: "Report" | "Insight" | "Automation"
  command: string
}

const actions: QuickAction[] = [
  {
    id: "1",
    title: "End-of-month revenue report",
    description: "Generate a comprehensive revenue breakdown for the current month",
    label: "Report",
    command: "Generate end-of-month revenue report",
  },
  {
    id: "2",
    title: "List at-risk clients",
    description: "Identify clients showing warning signs or payment delays",
    label: "Insight",
    command: "Show me all at-risk clients",
  },
  {
    id: "3",
    title: "Show overdue invoices",
    description: "Display all unpaid invoices sorted by age",
    label: "Report",
    command: "List all overdue invoices",
  },
  {
    id: "4",
    title: "Summarize this week's activity",
    description: "Get a quick overview of key metrics and events",
    label: "Insight",
    command: "Summarize this week's activity",
  },
  {
    id: "5",
    title: "Top 10 projects by revenue",
    description: "Rank projects by total revenue generated",
    label: "Report",
    command: "Show top 10 projects by revenue",
  },
  {
    id: "6",
    title: "Generate weekly CEO briefing",
    description: "Create an executive summary for leadership review",
    label: "Automation",
    command: "Generate weekly CEO briefing",
  },
]

export function QuickActions() {
  const handleActionClick = (action: QuickAction) => {
    // In production, this would pre-fill the command input or trigger the command
    console.log("Action clicked:", action.command)
    // You could use a context or state management to update the command console
  }

  return (
    <div className="rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 space-y-3">
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-500">
          Quick Actions
        </div>
        <div className="text-xs text-neutral-500 mt-1">
          Run common commands in one click.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {actions.map((action) => (
          <div
            key={action.id}
            onClick={() => handleActionClick(action)}
            className={cn(
              "rounded-lg border border-neutral-900 bg-neutral-950/70 px-3 py-3",
              "cursor-pointer hover:bg-neutral-900/70 transition-colors",
              "group"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="text-sm font-medium text-neutral-100 group-hover:text-[#E6D3A4] transition-colors">
                  {action.title}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  {action.description}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-[10px] uppercase tracking-wide text-neutral-600 border border-neutral-800 rounded px-1.5 py-0.5">
                {action.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

