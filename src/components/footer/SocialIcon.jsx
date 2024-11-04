export default function SocialIcon({ tooltip, icon: Icon, href, color }) {
    return (
        <div className='tooltip tooltip-top' data-tip={tooltip}>
            <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={`${color}`}
            >
                <Icon size={35} />
            </a>
        </div>
    );
}