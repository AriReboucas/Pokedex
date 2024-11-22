import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDarkMode: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isDarkMode,
}) => {
  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPageChange(page);
  };

  const paginationClass = isDarkMode
    ? "bg-gray-800 text-gray-100"
    : "bg-gray-200 text-gray-800";
  const buttonClass = isDarkMode
    ? "px-3 py-1 bg-gray-600 text-gray-100 rounded disabled:opacity-50"
    : "px-3 py-1 bg-gray-300 text-gray-800 rounded disabled:opacity-50";

  return (
    <div className={`flex justify-center gap-2 mt-4 ${paginationClass}`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={buttonClass}
      >
        Anterior
      </button>
      <span className="text-sm">{`Página ${currentPage}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={buttonClass}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
