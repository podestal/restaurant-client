import { useEffect, useState } from "react"
import { Order } from "../../services/api/orderService"

interface Props {
    order: Order
    setBackground: (value: string) => void
}

const formattedTime = ({miliSeconds}: {miliSeconds: number}) => {
    const totalSeconds = Math.floor(miliSeconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    let summary = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

    if (hours) {
        summary = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }

    const time = {
        hours,
        minutes,
        seconds,
        summary,
    }
    
    return time
}

const OrderTimer = ({ order, setBackground }: Props) => {

    const [timePassed, setTimePassed] = useState(0)
    const time = formattedTime({miliSeconds: timePassed})
    


    useEffect(() => {
        if (order.updated_at) {
            const orderUpdatedTime = new Date(order.updated_at).getTime()
            const updateTimePassed = () => {
                const currentTime = Date.now()
                const timeDifference = currentTime - orderUpdatedTime
                setTimePassed(timeDifference)
            }

            updateTimePassed()

            const intervalId = setInterval(updateTimePassed, 1000)

            return () => clearInterval(intervalId)
        }
        
    }, [order.created_at])

    useEffect(() => {
        if (time.minutes <= 10 && time.minutes > 5) {
            setBackground('bg-yellow-500')
        } else if (time.minutes <= 16 && time.minutes > 10) {
            setBackground('bg-amber-500')
        } else if (time.minutes > 16) {
            setBackground('bg-red-500')
        }
    }, [time.minutes])

  return (
    <div>{time.summary}</div>
  )
}

export default OrderTimer