import { twMerge } from 'tailwind-merge'


type Props = {
    children: React.ReactNode
    className?: string
}

const Box = ({children, className}: Props) => {
    return (
        <div className={twMerge(``,className)}>
            {children}
        </div>
    )
}

export default Box