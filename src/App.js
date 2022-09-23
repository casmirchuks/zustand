import useBearStore from './store';

function BearCounter() {
    const bears = useBearStore((state) => state.bears);
    return <h1>{bears} around here ...</h1>;
}

function Grow() {
    const increasePopulation = useBearStore(
        (state) => state.increasePopulation
    );
    return <button onClick={increasePopulation}>one up</button>;
}

function Shrink() {
    const decreasePopulation = useBearStore(
        (state) => state.decreasePopulation
    );
    return <button onClick={decreasePopulation}>down up</button>;
}

function App() {
    return (
        <>
            <BearCounter />
            <Grow />
            <Shrink />
        </>
    );
}

export default App;
