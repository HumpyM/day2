const List=(props) =>{
    return(
        <div>
            <p>{props.a.join(",")}</p>
        </div>
    );
};
export default function ToDo() {
    return (
        <div>
            <h1>To Do List</h1>
            <h2>Today</h2>
            <List a={['Walk','Cook','Bake']}/>
            <h2>Tomorrow </h2>
            <List a={['Study', 'Code', 'Eat']}/>

        </div>
    );

};