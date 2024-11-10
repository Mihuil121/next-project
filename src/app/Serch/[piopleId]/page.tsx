
export default function Piople({ params }: { params: { piopleId: string } }) {
    const { piopleId } = params; 
    return (
        <div>page {piopleId}</div>
    );
}
