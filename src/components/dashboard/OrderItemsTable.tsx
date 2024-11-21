import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { OrderItem } from "../../services/api/orderItemService";

interface Props {
    data: OrderItem[];
}

{/* <p className="col-span-2">{orderItem.name}</p>
<p>{createdAt}</p>
<p>{orderItem.quantity}</p>
<p>{orderItem.cost}</p>
<p>{(orderItem.quantity * orderItem.cost).toFixed(2)}</p> */}

const columns = [
    {
        accessorKey: "id",
        header: "Id",
        cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "created_at",
        header: "Date",
        cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
        cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: "cost",
        header: "Cost",
        cell: (props: any) => <p>{props.getValue()}</p>,
    },
    {
        id: 'totalCost',
        header: 'Total Cost',
        cell: (props: any) => {
            const row = props.row.original
            const totalCost = row.quantity * row.cost
            return <p>{(totalCost).toFixed(2)}</p>
        }
    }
];

const OrderItemsTable = ({ data }: Props) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-full">
            {table.getHeaderGroups().map((headerGroup) => (
                <div 
                    key={headerGroup.id}
                    className="grid grid-cols-6 w-full"
                >
                    {headerGroup.headers.map((header) => (
                        <div 
                            className=""
                            key={header.id}>{header.column.columnDef.header}</div> 
                    ))}
                </div>
            ))}
            {table.getRowModel().rows.map( row => (
                <div
                className="grid grid-cols-6 w-full" 
                    key={row.id}>
                    {row.getVisibleCells().map( cell => (
                        <div key={cell.id}>
                            {flexRender(
                                cell.column.columnDef.cell, cell.getContext()
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default OrderItemsTable;
