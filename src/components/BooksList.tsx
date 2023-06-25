import ReactCard from './ReactCard';
import { useState } from 'react';
import type { Books } from '../xata';

type BooksListProps = {
    pages: any
}

const BooksList = ({pages}: BooksListProps) => {

    //const [page, setPage] = useState(1)
    const [books, setBooks] = useState<Books[]>(pages[0])
    const [page, setPage] = useState(0)
    
    const handleNextPage = () => {
        console.log('handleNextPage', page)
        if(page < pages.length - 1) {
            setBooks(pages[page + 1])       
            setPage(prev => ++prev)
        }
        
    }

    const handlePrevPage = () => {
        console.log('handlePrevPage', page)
        if(page > 0){
            setBooks(pages[page - 1])       
            setPage(prev => --prev)
        }
    }

    
    return (
        <>
        <ul role="list" className="link-card-grid">
                {books?.map((book: Books) => (
                    <ReactCard
                        key={book.id}
                        author={`${book.author?.lastname}, ${book.author?.firstname}`}
                        title={book?.name}
                        description={book?.description?.toString() ?? ''}
                    />
                ))}
                
            </ul>
            <button onClick={() => handlePrevPage()}>Get Prev Page</button>  
            <button onClick={() => handleNextPage()}>Get Next Page</button>    
        </>
    )
}

export default BooksList