import ControlledTabs from "../../Components/ControlledTabs/ControlledTabs";

function Main(props) {

    return (
        <div>
            <ControlledTabs user_id={props.userid} />
        </div>
    )
}

export default Main;