export default function ContactItem({ icon: Icon, title, content }) {
    return (
        <div className='flex items-center gap-x-4'>
            <div className="pointer-events-none btn btn-circle btn-neutral">
                <Icon size={25} />
            </div>
            <div className='text-sm'>
                <p className="font-semibold">{title}:</p>
                <p className="font-sans select-all">{content}</p>
            </div>
        </div>
    );
}