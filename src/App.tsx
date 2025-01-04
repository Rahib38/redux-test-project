import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";

// import { Button } from "./components/ui/button";
// import { decrement, increment } from "./Redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  // const dispatch = useAppDispatch();


  // const { count } = useAppSelector((state) => state.counter);

  // const handleIncrement = (amount:number) => {
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <h1>Counter with Redux</h1>
        <Button onClick={()=>handleIncrement(5)}>Increment 5</Button>
        <Button onClick={()=>handleIncrement(1)}>Increment</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>Decrement</Button> */}
      </div>
    </>
  );
}

export default App;
