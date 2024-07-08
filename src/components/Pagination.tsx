'use client'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'

interface PaginationProps {
    currentPage: number
    totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const handleNavigation = (page: number) => {
        window.location.assign(`/portfolio/rooftops?page=${page}`)
    }

    return (
        <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
                <button
                    onClick={() => handleNavigation(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900">
                    <span className="sr-only">Prev Page</span>
                    <NavigateBefore fontSize="small" />
                </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
                <li key={i}>
                    <button
                        onClick={() => handleNavigation(i + 1)}
                        className={`${
                            currentPage === i + 1
                                ? 'no-underline block size-8 rounded border-blue-600 bg-theme1-light text-center leading-8 text-white'
                                : 'block size-8 rounded no-underline border border-gray-100 bg-white text-center leading-8 text-gray-900'
                        }`}>
                        {i + 1}
                    </button>
                </li>
            ))}
            <li>
                <button
                    onClick={() => handleNavigation(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900">
                    <span className="sr-only">Next Page</span>
                    <NavigateNext fontSize="small" />
                </button>
            </li>
        </ol>
    )
}

export default Pagination
