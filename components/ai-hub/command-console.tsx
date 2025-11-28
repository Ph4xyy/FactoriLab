"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type CommandResult = {
  id: string
  command: string
  response: string
  created_at: string
}

const mockHistory: CommandResult[] = [
  {
    id: "1",
    command: "Show me all overdue invoices",
    response: "Found 12 overdue invoices totaling $45,230. The oldest is from 45 days ago. Top client: Acme Corp ($12,500).",
    created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    id: "2",
    command: "Summarize this month's activity",
    response: "This month: 45 new clients, $234,500 revenue, 12 projects completed. Revenue is up 23% from last month.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "3",
    command: "List at-risk clients",
    response: "3 clients showing risk signals: TechStart (payment delay), DesignCo (reduced engagement), MediaPro (contract ending soon).",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
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

export function CommandConsole() {
  const [command, setCommand] = React.useState("")
  const [history, setHistory] = React.useState<CommandResult[]>(mockHistory)

  const handleRun = () => {
    if (!command.trim()) return

    const newResult: CommandResult = {
      id: Date.now().toString(),
      command: command,
      response: "Processing your command... This is a mock response. In production, this would connect to your AI service.",
      created_at: new Date().toISOString(),
    }

    setHistory([newResult, ...history].slice(0, 3))
    setCommand("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleRun()
    }
  }

  return (
    <div className="rounded-xl border border-neutral-900 bg-neutral-950/70 p-4 space-y-4">
      {/* Console Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">
            AI Command Console
          </div>
          <div className="text-xs text-neutral-500 mt-1">
            Ask questions, trigger automations, or generate reports.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs text-neutral-500 hover:text-neutral-300"
          >
            History
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs text-neutral-500 hover:text-neutral-300"
            onClick={() => setHistory([])}
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Command Input */}
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Try: "Show me all overdue invoices" or "Summarize this month\'s activity"'
            className="bg-neutral-950 border-neutral-900 text-neutral-200 placeholder:text-neutral-600 h-11"
          />
        </div>
        <Button
          onClick={handleRun}
          className="h-11 px-4 bg-neutral-100/5 border border-neutral-800 text-neutral-100 hover:bg-neutral-100/10"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Run
        </Button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="space-y-3 text-sm">
          {history.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-neutral-900 bg-neutral-950/60 px-3 py-2"
            >
              <div className="text-[11px] uppercase tracking-wide text-neutral-500 mb-1">
                You
              </div>
              <div className="text-sm text-neutral-200 font-medium">
                {item.command}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wide text-neutral-500">
                AI
              </div>
              <div className="text-sm text-neutral-300 line-clamp-3 mt-1">
                {item.response}
              </div>
              <div className="mt-2 text-[11px] text-neutral-600 text-right">
                {formatTime(item.created_at)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

