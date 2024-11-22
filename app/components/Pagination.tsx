import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPageChange(page);
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="text-sm">{`Página ${currentPage}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
