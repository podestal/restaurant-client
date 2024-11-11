import APIClient from "./apiClient"

export interface TableType {
    id: number
    number: number
    status: string
    guest_name: string | null
    seats:  2 | 4 | 6 | 8
}

const getTableService = (tableId?: number) => {
    const URL = tableId ? `tables/${tableId}` : `tables/`
    return new APIClient<TableType>(URL)
}

export default getTableService
