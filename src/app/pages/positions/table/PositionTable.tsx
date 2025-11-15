"use client"

import { useEffect, useState } from "react"
import { getAllPositions, OfficialPosition } from "../services"
import { Button } from "@/components/ui/button"
import { Loader2, Edit, Trash2, Plus } from "lucide-react"

interface PositionTableProps {
  onCreateClick?: () => void
  onEditClick?: (position: OfficialPosition) => void
  onDeleteClick?: (position: OfficialPosition) => void
  refreshTrigger?: number
}

export function PositionTable({
  onCreateClick,
  onEditClick,
  onDeleteClick,
  refreshTrigger,
}: PositionTableProps) {
  const [positions, setPositions] = useState<OfficialPosition[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPositions = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getAllPositions()
      setPositions(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch positions")
      console.error("Error fetching positions:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPositions()
  }, [refreshTrigger])

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return dateString
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading positions...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
        <p className="text-sm text-destructive">{error}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchPositions}
          className="mt-4"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {onCreateClick && (
        <div className="flex justify-end">
          <Button onClick={onCreateClick}>
            <Plus className="mr-2 h-4 w-4" />
            Create Position
          </Button>
        </div>
      )}

      {positions.length === 0 ? (
        <div className="rounded-lg border border-dashed p-12 text-center">
          <p className="text-sm text-muted-foreground">
            No positions found. Create your first position to get started.
          </p>
          {onCreateClick && (
            <Button onClick={onCreateClick} className="mt-4" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create Position
            </Button>
          )}
        </div>
      ) : (
        <div className="rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Position
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Description
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Created
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Updated
                  </th>
                  {(onEditClick || onDeleteClick) && (
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {positions.map((position) => (
                  <tr
                    key={position.id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle font-medium">
                      {position.position}
                    </td>
                    <td className="p-4 align-middle text-sm text-muted-foreground">
                      {position.description || (
                        <span className="italic text-muted-foreground/50">
                          No description
                        </span>
                      )}
                    </td>
                    <td className="p-4 align-middle text-sm text-muted-foreground">
                      {formatDate(position.createdAt)}
                    </td>
                    <td className="p-4 align-middle text-sm text-muted-foreground">
                      {formatDate(position.updatedAt)}
                    </td>
                    {(onEditClick || onDeleteClick) && (
                      <td className="p-4 align-middle">
                        <div className="flex justify-end gap-2">
                          {onEditClick && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onEditClick(position)}
                              className="h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          )}
                          {onDeleteClick && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onDeleteClick(position)}
                              className="h-8 w-8 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}