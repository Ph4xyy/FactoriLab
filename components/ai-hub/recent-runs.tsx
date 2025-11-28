"use client"

import React from "react"
import { cn } from "@/lib/utils"

type AiRun = {
  id: string
  label: string
  command: string
  status: "success" | "error" | "running"
  created_at: string
}

const mockRuns: AiRun[] = [
  {
    id: "1",
    label: "Weekly report generated",
    command: "Generate weekly CEO briefing",
    status: "success",
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: "2",
    label: "Client analysis completed",
    command: "Analyze at-risk clients",
    status: "success",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "3",
    label: "Revenue report failed",
    command: "Generate end-of-month revenue report",
    status: "error",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "4",
    label: "Processing invoice data",
    command: "List all overdue invoices",
    status: "running",
    created_at: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
  },
]

function formatTime(isoString: string): string {
  const date = new Date(isoString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  return `${diffDays}d ago`
}

function getStatusColor(status: AiRun["status"]): string {
  switch (status) {
    case "success":
      return "bg-[#E6D3A4]"
    case "error":
      return "bg-red-400"
    case "running":
      return "bg-neutral-500"
    default:
      return "bg-neutral-500"
  }
}

function getStatusText(status: AiRun["status"]): string {
  switch (status) {
    case "success":
      return "Success"
    case "error":
      return "Error"
    case "running":
      return "Running"
    default:
      return "Unknown"
  }
}

export function RecentRuns() {
  const runs = mockRuns.length > 0 ? mockRuns : []

  return (
    <div className="rounded-xl border border-neutral-900 bg-neutral-950/70 p-4 space-y-4">
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-500">
          Recent Runs
        </div>
        <div className="text-xs text-neutral-500 mt-1">
          History of AI commands and automations.
        </div>
      </div>

      {runs.length === 0 ? (
        <div className="text-xs text-neutral-600 text-center py-8">
          No AI runs yet.
        </div>
      ) : (
        <div className="space-y-4">
          {runs.map((run, index) => (
            <div key={run.id} className="relative flex gap-4">
              {/* Timeline line */}
              {index < runs.length - 1 && (
                <div className="absolute left-[5px] top-6 bottom-0 w-px bg-neutral-900" />
              )}

              {/* Dot */}
              <div
                className={cn(
                  "relative z-10 h-2.5 w-2.5 rounded-full flex-shrink-0 mt-1.5",
                  getStatusColor(run.status)
                )}
              />

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-medium text-neutral-100">
                    {run.label}
                  </div>
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-wide rounded border px-1.5 py-0.5 flex-shrink-0",
                      run.status === "success"
                        ? "border-[#E6D3A4]/30 text-[#E6D3A4] bg-[#E6D3A4]/10"
                        : run.status === "error"
                        ? "border-red-400/30 text-red-400 bg-red-400/10"
                        : "border-neutral-500/30 text-neutral-400 bg-neutral-500/10"
                    )}
                  >
                    {getStatusText(run.status)}
                  </span>
                </div>
                <div className="text-xs text-neutral-500 line-clamp-1">
                  {run.command}
                </div>
                <div className="text-[11px] text-neutral-600">
                  {formatTime(run.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Optional: Explore data section */}
      <div className="pt-4 border-t border-neutral-900">
        <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
          Explore data
        </div>
        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Open Dashboard
          </a>
          <a
            href="#"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Open Clients
          </a>
          <a
            href="#"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Open Invoices
          </a>
        </div>
      </div>
    </div>
  )
}

