"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPosition, CreatePositionInput } from "../services";

interface CreatePositionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreatePositionModal({ open, onOpenChange, onSuccess }: CreatePositionModalProps) {
  const [formData, setFormData] = useState<CreatePositionInput>({ position: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CreatePositionInput, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof CreatePositionInput, string>> = {};
    if (!formData.position.trim()) newErrors.position = "Position is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await createPosition({
        position: formData.position.trim(),
        description: formData.description?.trim() || undefined,
      });

      setFormData({ position: "", description: "" });
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      setErrors({
        position: error instanceof Error ? error.message : "Failed to create position",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof CreatePositionInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && !isLoading) {
      setFormData({ position: "", description: "" });
      setErrors({});
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Position</DialogTitle>
          <DialogDescription>Add a new official position to the system.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="position" className="text-sm font-medium">
                Position <span className="text-destructive">*</span>
              </label>
              <Input
                id="position"
                placeholder="e.g., Barangay Captain"
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                disabled={isLoading}
                className={errors.position ? "border-destructive" : ""}
              />
              {errors.position && <p className="text-sm text-destructive">{errors.position}</p>}
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Enter position description (optional)"
                value={formData.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
                disabled={isLoading}
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Position"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
