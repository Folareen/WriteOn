
const Error = ({ message }: { message: string }) => {
    return (
        <p className='text-red-600 font-medium text-center text-base lg:text-xl p-1 lg:p-2.5'>
            {message}
        </p>
    )
}

export default Error