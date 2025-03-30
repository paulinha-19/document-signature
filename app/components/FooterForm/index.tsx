import Link from 'next/link'

interface FooterFormProps {
    message: string
    linkLabel: string
    linkHref: string
}

export function FooterForm({
    message,
    linkLabel,
    linkHref,
}: FooterFormProps) {
    return (
        <p className="mt-6 text-center text-sm text-gray-500">
            {message}{' '}
            <Link
                href={linkHref}
                className="font-medium text-primary-500 hover:text-primary-600"
            >
                {linkLabel}
            </Link>
        </p>
    )
}