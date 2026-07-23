import { useState } from 'react'
import { Pagination } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function PaginationPage() {
  const [page, setPage] = useState(3)
  return (
    <ComponentDoc
      name="Pagination" description="A page navigation control for splitting content across multiple pages."
      preview={
        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      }
      code={`const [page, setPage] = useState(1)

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>`}
      props={[
        { name: 'currentPage', type: 'number', defaultVal: '—', description: 'The currently active page' },
        { name: 'totalPages', type: 'number', defaultVal: '—', description: 'Total number of pages' },
        { name: 'onPageChange', type: '(page: number) => void', defaultVal: '—', description: 'Called when the user navigates to a page' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="10 pages, current page 3">
            <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />
          </Row>
          <Row label="5 pages">
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
          </Row>
          <Row label="20 pages, middle">
            <Pagination currentPage={10} totalPages={20} onPageChange={() => {}} />
          </Row>
        </div>
      }
    />
  )
}
