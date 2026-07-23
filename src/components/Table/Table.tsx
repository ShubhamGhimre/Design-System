import * as React from 'react';
import { cn } from '../../lib/utils';

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  cell: (row: T, index: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  variant?: 'default' | 'striped';
  className?: string;
}

export function Table<T>({
  data,
  columns,
  variant = 'default',
  className,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn('w-full border-collapse text-sm', className)}>
        <thead>
          <tr className="border-b border-border">
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'px-4 py-3 text-start text-xs font-medium uppercase tracking-wider text-muted-foreground',
                  column.headerClassName,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={(row as { id?: string | number }).id ?? rowIndex}
              className={cn(
                'border-b border-border transition-colors duration-fast',
                variant === 'striped' && rowIndex % 2 === 1 && 'bg-muted',
                'hover:bg-muted',
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn('px-4 py-3 text-foreground', column.className)}
                >
                  {column.cell(row, rowIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
