import { Link } from 'react-router-dom'

export default function CabecalhoLinks({children, to}) {
    return (
        <Link to={to}>
            {children}
        </Link>
    )
}