import React, { useEffect, useState } from "react";
import styles from "./TableContainer.module.css";
import { TableHeader } from "@/shared/types/entities/TableHeader";
import CustomSelectNumber from "../CustomSelectNumber/CustomSelectNumber";
import CaretDownIcon from "@/shared/Icons/CaretDownIcon";

interface TableProps {
  headers: TableHeader<any>[];
  rows?: any[];
  rowHref: (row: any) => string;
  totalPages?: number;
  pageChange?: (page: number) => void;
  pageSize?: number;
  onPageSizeChange?: (value: number) => void;
  currentPage?: number;
  totalItems?: number;
}

const pageSizeOptions = [
  { value: 15, label: "15" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

const TableContainer: React.FC<TableProps> = ({
  headers,
  rows = [],
  rowHref,
  pageChange,
  totalPages = 0,
  pageSize = 15,
  onPageSizeChange,
  currentPage = 1,
  totalItems = 0,
}) => {
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setIsLastPage(currentPage === totalPages);
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    if (currentPage < totalPages && pageChange) {
      pageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1 && pageChange) {
      pageChange(currentPage - 1);
    }
  };

  return (
    <div className={styles.content_total_table}>
      <div className={styles.content_table}>
        <div className={styles.head_table}>
          {headers.map((header, index) => (
            <div
              className={styles.head_th}
              key={index}
              style={{ width: header.width }}
            >
              <p>{header.label}</p>
            </div>
          ))}
        </div>
        <div className={styles.contentTotalBody}>
          {rows.map((row, rowIndex) => (
            <a
            key={rowIndex}
              className={styles.anclaTable}
              href={rowHref ? rowHref(row) : "#"}
            >
              <div className={styles.body_row}>
                {headers.map((header, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={styles.body_td}
                    style={{ width: header.width }}
                  >
                    <p>{header.value(row)}</p>
                  </div>
                ))}
                <div className={styles.buttonVer}>
                  <p>Ver</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {totalItems > 15 && (
          <div className={styles.contentPageSize}>
            <div className={styles.contentCustomSelectedNumber}>
              <CustomSelectNumber
                options={pageSizeOptions}
                value={{ value: pageSize, label: pageSize.toString() }}
                onChange={(selectedOption) => {
                  if (onPageSizeChange) {
                    onPageSizeChange(selectedOption.value);
                  }
                }}
                labelName="Filas"
              />
            </div>
            <div className={styles.contentButonsPage}>
              <div className={styles.leftIcon} onClick={handlePrevPage}>
                <CaretDownIcon
                  color={currentPage > 1 ? "rgb(32, 46, 68)" : "#606c7f"}
                  w="24"
                  h="24"
                />
              </div>
              {Array.from({ length: totalPages }, (page, index) => (
                <button
                  key={index}
                  onClick={() => pageChange && pageChange(index + 1)}
                  className={
                    currentPage === index + 1
                      ? styles.activePageButton
                      : styles.pageButton
                  }
                >
                  {index + 1}
                </button>
              ))}
              <div className={styles.rigthIcon} onClick={handleNextPage}>
                <CaretDownIcon
                  h="24"
                  w="24"
                  color={isLastPage ? "#606c7f" : "rgb(32, 46, 68)"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableContainer;
