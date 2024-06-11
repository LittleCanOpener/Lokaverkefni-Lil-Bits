import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderFromStorage } from '../../utils/storage';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const order = getOrderFromStorage(email);
    const attendees = localStorage.getItem('attendees') ? parseInt(localStorage.getItem('attendees') || '0') : 0;

    useEffect(() => {
        if (!order.items.length) {
            navigate('/order-confirmation');
        }
    }, [order, navigate]);

    const calculateTotal = () => {
        const foodPrice = 10; // dummy example price per food item
        const drinkPrice = 5; // dummy example price per drink item
        let total = 0;

        order.items.forEach(item => {
            const itemPrice = item.type === 'food' ? foodPrice : drinkPrice;
            total += item.quantity * itemPrice;
        });

        return total;
    };

    const getItemPrice = (type: string) => (type === 'food' ? 10 : 5);

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const doc = new jsPDF();

        doc.text('Receipt', 10, 10);
        doc.text(`Email: ${email}`, 10, 20);
        doc.text(`Arrival Time: ${new Date(order.orderTime).toLocaleString()}`, 10, 30);
        doc.text(`Number of Attendees: ${attendees}`, 10, 40);

        const tableColumn = ["Item Name", "Type", "Quantity", "Price"];
        const tableRows: any[] = [];

        order.items.forEach((item) => {
            const itemData = [
                item.name,
                item.type === 'food' ? 'Food' : 'Beverage',
                item.quantity,
                `$${getItemPrice(item.type) * item.quantity}`
            ];
            tableRows.push(itemData);
        });

        (doc as any).autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 50,
        });

        doc.text(`Total Price: $${calculateTotal()}`, 10, (doc as any).lastAutoTable.finalY + 10);

        doc.save('receipt.pdf');
    };

    return (
        <div className="container mx-auto py-8 bg-[#e2e299] p-6 mt-7 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Receipt</h1>
            <p className="mb-2"><strong>Email:</strong> {email}</p>
            <p className="mb-2"><strong>Arrival Time:</strong> {new Date(order.orderTime).toLocaleString()}</p>
            <p className="mb-4"><strong>Table For:</strong> {attendees}</p>
            <table className="min-w-full bg-white shadow-md">
                <thead className="bg-[#C16757] text-white">
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-800">Item Name</th>
                        <th className="py-2 px-4 border-b-2 border-gray-800">Type</th>
                        <th className="py-2 px-4 border-b-2 border-gray-800">Quantity</th>
                        <th className="py-2 px-4 border-b-2 border-gray-800">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item, index) => (
                        <tr
                            key={index}
                            className={`${item.type === 'food'
                                ? 'bg-[#C16757]/20'
                                : 'bg-[#3E6053]/20'
                                }`}
                        >
                            <td className="py-2 px-4 border-b border-gray-300 text-center">{item.name}</td>
                            <td className="py-2 px-4 border-b border-gray-300 text-center">
                                {item.type === 'food' ? <strong>Food</strong> : <strong>Beverage</strong>}
                            </td>
                            <td className="py-2 px-4 border-b border-gray-300 text-center">{item.quantity}</td>
                            <td className="py-2 px-4 border-b border-gray-300 text-center">
                                ${getItemPrice(item.type) * item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-4"><strong>Total Price:</strong> ${calculateTotal()}</p>
            <div className="mt-6 flex justify-center space-x-4">
                <button
                    onClick={handlePrint}
                    className="px-6 py-3 bg-[#3E6053] text-white rounded-lg shadow-md hover:bg-[#C16757] transition duration-200 text-lg"
                >
                    Print
                </button>
                <button
                    onClick={handleDownload}
                    className="px-6 py-3 bg-[#3E6053] text-white rounded-lg shadow-md hover:bg-[#C16757] transition duration-200 text-lg"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default ReceiptScreen;