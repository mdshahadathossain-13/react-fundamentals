import withCounter from '.HOC/withCounter';

const HoverCounter2 = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter2);