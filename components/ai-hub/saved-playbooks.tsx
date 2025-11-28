"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

type Playbook = {
  id: string
  title: string
  description: string
}

const mockPlaybooks: Playbook[] = [
  {
    id: "1",
    title: "Monthly Finance Summary",
    description: "Generates a PDF recap of revenue, expenses, and overdue invoices.",
  },
  {
    id: "2",
    title: "Client Health Check",
    description: "Analyzes client engagement, payment history, and risk factors.",
  },
  {
    id: "3",
    title: "Project Performance Report",
    description: "Compiles project metrics, timelines, and profitability analysis.",
  },
  {
    id: "4",
    title: "Weekly Team Briefing",
    description: "Creates a summary of team activity, milestones, and blockers.",
  },
]

export function SavedPlaybooks() {
  const handleRun = (playbook: Playbook) => {
    console.log("Running playbook:", playbook.title)
    // In production, this would trigger the playbook workflow
  }

  return (
    <div className="rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 space-y-3">
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-500">
          Playbooks
        </div>
        <div className="text-xs text-neutral-500 mt-1">
          Reusable AI workflows for your business.
        </div>
      </div>

      <div className="space-y-2">
        {mockPlaybooks.map((playbook) => (
          <div
            key={playbook.id}
            className="flex items-start justify-between gap-3 rounded-lg border border-neutral-900 bg-neutral-950/60 px-3 py-2 hover:bg-neutral-900/60 cursor-pointer transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-neutral-100 group-hover:text-[#E6D3A4] transition-colors">
                {playbook.title}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                {playbook.description}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 border border-neutral-900 hover:bg-neutral-800 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                handleRun(playbook)
              }}
            >
              <Play className="h-3 w-3 text-neutral-400" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

