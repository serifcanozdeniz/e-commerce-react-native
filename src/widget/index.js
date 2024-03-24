import BestSeller from "./BestSeller";
import Introduction from "./Introduction";
import NewArrival from "./NewArrival";

const widgets = [
    {
        id: 1,
        name: "introduction",
        component: <Introduction />,
        isShow: true,
        title: null,
    },
    {
        id: 2,
        name: "newArrival",
        component: <NewArrival />,
        isShow: true,
        title: "New Arrival",

    },
    {
        id: 3,
        name: "bestSeller",
        component: <BestSeller />,
        isShow: true,
        title: "Best Seller",
        category: "",
    },
]
export default widgets;