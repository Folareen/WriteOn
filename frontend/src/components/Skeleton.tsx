
const Skeleton = ({ className }: { className: string }) => {
    return (
        <div className={`bg-slate-500 rounded-[10px] animate-pulse ${className}`}></div>
    )
}

export default Skeleton