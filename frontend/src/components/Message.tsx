
const Message = ({ message }: { message: string }) => {
    return (
        <p className='text-slate-700 font-medium text-center text-base lg:text-xl p-2 lg:p-5 bg-[rgba(0,0,0,0.1)] rounded-md'>
            {message}
        </p>
    )
}

export default Message
