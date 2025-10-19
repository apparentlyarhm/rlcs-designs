export default function DesignDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (<main className="p-4 sm:p-6 md:p-8">{children}</main>);
}