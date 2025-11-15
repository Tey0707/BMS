"use client";

import { useState } from "react";
import { PositionTable } from "./table/PositionTable";
import { CreatePositionModal } from "./components/CreatePositionModal";
import { OfficialPosition } from "./services";

export default function PositionsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCreateClick = () => setIsCreateModalOpen(true);

  const handleEditClick = (position: OfficialPosition) => console.log("Edit:", position);
  const handleDeleteClick = (position: OfficialPosition) => console.log("Delete:", position);

  const handleCreateSuccess = () => setRefreshTrigger((prev) => prev + 1);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Official Positions</h1>

      <PositionTable
        onCreateClick={handleCreateClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        refreshTrigger={refreshTrigger}
      />

      <CreatePositionModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onSuccess={handleCreateSuccess}
      />
    </div>
  );
}
