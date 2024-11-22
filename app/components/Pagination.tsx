import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 py-6">
      <button
        className={`px-4 py-2 rounded ${
          currentPage > 1
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handlePrevious}
        disabled={currentPage <= 1}
      >
        Anterior
      </button>

      <span className="text-lg font-semibold">Página {currentPage}</span>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleNext}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
