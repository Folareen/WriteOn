import React, { SetStateAction } from 'react'

type Props = {
    currPage: number,
    setNewPage: React.Dispatch<SetStateAction<number>>,
    totalPages: number
}

const Pagination = ({ currPage, setNewPage, totalPages }: Props) => {
    if (totalPages < 2) return null
    return (
        <div className='flex flex-row items-center py-2 lg:py-4 gap-2 lg:gap-2.5 overflow-x-auto mx-auto justify-center'>

            {
                currPage > 2 ?
                    <button className=' h-[30px] w-[30px] flex items-center justify-center text-[#063A4F]'>
                        <span>
                            ...
                        </span>
                    </button>
                    :
                    null
            }
            {
                Array.from({ length: totalPages }, (_, index) => index + 1).slice(currPage > 2 ? currPage - 2 : 0, currPage < totalPages ? currPage + 2 : totalPages).map(
                    (num) => {
                        if (num == currPage) {
                            return (
                                <button className='bg-[#9333EA] text-white rounded-lg h-[30px] w-[30px] flex items-center justify-center' onClick={() => setNewPage(num)}>
                                    <span>
                                        {num}
                                    </span>
                                </button>

                            )
                        }

                        return (
                            <button className=' h-[30px] w-[30px] rounded-lg border flex items-center justify-center text-[#063A4F]' onClick={() => setNewPage(num)}>
                                <span>
                                    {num}
                                </span>
                            </button>
                        )

                    }
                )

            }
            {
                (totalPages > 3 && currPage < totalPages) ?
                    <button className=' h-[30px] w-[30px] flex items-center justify-center text-[#063A4F]'>
                        <span>
                            ...
                        </span>
                    </button>
                    :
                    null
            }


        </div>
    )
}

export default Pagination