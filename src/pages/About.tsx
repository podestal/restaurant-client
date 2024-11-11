import Table from "../components/ui/Table"

const About = () => {
  return (
    <div className="2xl:max-w-[1280px] mx-auto mt-20">
        <div className="grid grid-cols-3 gap-12 p-8  min-h-screen mx-auto place-items-center">
        <Table tableNumber="1" guestName="John Doe" status="Occupied" seats={4} />
        <Table tableNumber="2" guestName="Emma Clark" status="Occupied" seats={4} />
        <Table tableNumber="3" guestName="Maria" status="Occupied" seats={4} />
        {/* <Table tableNumber="4" status="Vacant" seats={6} /> */}
        {/* <Table tableNumber="5" guestName="Cathy" status="Reserved" seats={6} /> */}
        <Table tableNumber="6" guestName="David John" status="Occupied" seats={2} />
        <Table tableNumber="7" status="Vacant" seats={2} />
        <Table tableNumber="8" status="Vacant" seats={2} />
        <Table tableNumber="9" guestName="Sarah K." status="Reserved" seats={4} />
        <Table tableNumber="10" guestName="Emma Watson" status="Occupied" seats={4} />
        <Table tableNumber="11" guestName="John Davis" status="Occupied" seats={4} />
        <Table tableNumber="12" status="Vacant" seats={2} />
        <Table tableNumber="9" guestName="Sarah K." status="Reserved" seats={4} />
        <Table tableNumber="10" guestName="Emma Watson" status="Occupied" seats={4} />
        <Table tableNumber="11" guestName="John Davis" status="Occupied" seats={4} />
        <Table tableNumber="12" status="Vacant" seats={2} />
        </div>
    </div>
  )
}

export default About